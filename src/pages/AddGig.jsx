import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { gigService } from '../services/gig.service'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { BigGigPreview } from '../cmps/BigGigPreview'
import { MUISelect } from '../cmps/MUISelect'
import { utilService } from '../services/util.service'
import checkImg from '../assets/img/check.svg'
const categories = gigService.getCategories()


export function AddGig() {
    const [gigToEdit, setGigToEdit] = useState(null)
    const [currCategory, setCurrCategory] = useState({})
    const [selectedPackage, setSelectedPackage] = useState('basic')
    const { gigId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setGigToEdit(gigService.getEmptyGig())
        onLoadGig()
        window.scrollTo(0, 0)
    }, [gigId])

    useEffect(() => {
        if (gigToEdit && gigToEdit.category) setCurrCategory(categories.find(c => c.category === gigToEdit.category))
    }, [gigToEdit])

    async function onLoadGig() {
        if (!gigId) return
        try {
            const desiredGig = await gigService.getById(gigId)
            setGigToEdit(desiredGig)
        } catch (err) {
            console.log('Had issues in addGig ->', err)
            showErrorMsg('Oops cannot load gig')
            navigate('/')
        }
    }

    function handleChange(ev) {
        let { name, value, dataset, type } = ev.target
        const { idx, pack } = dataset
        if (type === 'number') value = +value

        if (name.endsWith('features')) {
            setGigToEdit(gig => {
                let tempGig = { ...gigToEdit }
                tempGig.packages[pack].features[idx] = value
                gig = tempGig
                return gig
            })
        } else if (name.startsWith('packages.')) {
            const [packageName, property] = name.split('.').slice(1)
            setGigToEdit(prevState => {
                const updatedPackages = {
                    ...prevState.packages,
                    [packageName]: {
                        ...prevState.packages[packageName],
                        [property]: value
                    }
                }

                // console.log('Package Name:', name)
                // console.log('New Value:', value)

                return {
                    ...prevState,
                    packages: updatedPackages
                }
            })
        } else {
            setGigToEdit(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }


    function onAddPackage(packageName, packageData) {
        const currentPackageCount = Object.keys(gigToEdit.packages).length

        if (currentPackageCount >= 3) {
            return
        }

        setGigToEdit({ ...gigToEdit, packages: { ...gigToEdit.packages, [packageName]: packageData } })
    }

    function handlePackageChange(packageKey) {
        setSelectedPackage(packageKey)
    }

    function onUploadedImgs(imgUrl) {
        setGigToEdit({ ...gigToEdit, ['imgUrls']: [...gigToEdit.imgUrls, imgUrl] })
    }

    function onSelectTag(ev) {
        let { value } = ev.target
        setGigToEdit({ ...gigToEdit, tags: [...value] })
    }

    function onSelectCategory(ev) {
        let { value } = ev.target
        setGigToEdit({ ...gigToEdit, tags: [], category: value })
    }

    async function onSaveGig(ev) {
        ev.preventDefault()
        if (!gigToEdit.description || !gigToEdit.title) return showErrorMsg('All fields are required!')
        try {
            const savedGig = await gigService.save(gigToEdit)
            showSuccessMsg(`Created your new gig!`)
            navigate(`/gig/${savedGig._id}`)
        } catch (err) {
            console.log(err)
            showErrorMsg('Cannot add gig at this time..')
        }

    }

    if (!gigToEdit) return null
    return (

        <section className="add-gig">
            <section className='section-heading full'>
                <h1 className="heading">{gigId ? 'Edit a gig' : 'Add a gig'}</h1>
                <h2 className="sub-heading">Fill the required information and start earning today!</h2>
            </section>

            <form className='create-gig' onSubmit={onSaveGig}>
                <label className='form-label imgs'>
                    <span className='input-title'>
                        Upload images
                    </span>
                    <ImgUploader onUploaded={onUploadedImgs} />
                </label>

                <label className='form-label gig-title'>
                    <span className='input-title'>
                        <span className='title'>Title</span>
                        <small className='sub-title'>A short title for your gig</small>
                    </span>
                    <input className='input-field title' onChange={handleChange} name='title' value={gigToEdit.title} type="text" placeholder='I will...' maxLength={100} />
                </label>
                <label className='form-label gig-desc'>
                    <span className='input-title'>
                        <span className='title'>Description</span>
                        <small className='sub-title'>Extended details about your provided service</small>
                    </span>
                    <textarea className='input-field desc' type="text" onChange={handleChange} name='description' value={gigToEdit.description} maxLength={500} placeholder='Provided service will include...' />
                </label>
                <label className='form-label tags'>
                    <span className='input-title'>
                        <span className='title'>Category</span>
                        <small className='sub-title'>Related category</small>
                    </span>
                    <MUISelect className='input-field categories' categories={categories} selectCategory={onSelectCategory} selectedCategory={gigToEdit.category}></MUISelect>
                </label>
                <label className='form-label tags'>
                    <span className='input-title'>
                        <span className='title'>Sub categories</span>
                        <small className='sub-title'>Related category tags</small>
                    </span>
                    <MultiSelect className='input-field tags' tags={currCategory.tags || []} onChooseTag={onSelectTag} chosenTags={gigToEdit.tags} />
                </label>


                <section className='build-packs'>
                    <h1 className="heading">{gigId ? 'Edit Your Packages' : 'Build Your Packages'}</h1>
                    <h2 className="sub-heading">Offer three sales packages, increase your service to reach a multitude of customers</h2>

                    <div className="package-options flex">
                        {Object.keys(gigToEdit.packages).map((packageKey) => (
                            <button
                                key={packageKey}
                                type="button"
                                className={`package ${selectedPackage === packageKey ? 'selected' : ''}`}
                                onClick={() => handlePackageChange(packageKey)}
                            >
                                {utilService.capitalizeFirstLetter(packageKey)}
                            </button>
                        ))}
                    </div>

                    <label className='form-label package-details'>
                        Package name
                        <input className='input-field' onChange={handleChange} name={`packages.${selectedPackage}.title`} value={gigToEdit.packages[selectedPackage].title} type="text" maxLength={20} />
                        <span className='numbers flex'>
                            <label className='form-label days-to-make'>
                                {/* <p className='est'> Est. delivery </p> */}
                                <span className='days-input'>
                                    <i className="fa-solid fa-dolly delivery-icon"></i>
                                    <input className='input-field' type="number" min={1} max={90} onChange={handleChange} name={`packages.${selectedPackage}.packDaysToMake`} value={gigToEdit.packages[selectedPackage].packDaysToMake} />
                                </span>
                            </label>

                            <label className='form-label price'>
                                {/* <p> Price in USD </p> */}
                                <span className='price-input'>
                                    <input className='input-field' type="number" min={1} max={999} maxLength={3} onChange={handleChange} name={`packages.${selectedPackage}.packPrice`} value={gigToEdit.packages[selectedPackage].packPrice} />
                                </span>
                            </label>
                        </span>
                    </label>


                    <section className='add-features form-label'>
                        <span className='features-heading'>Features</span>
                        <div className="features-container flex">
                            {Object.values(gigToEdit.packages[selectedPackage].features).map((feature, idx) => {
                                return (
                                    <label key={idx} className='feature'>
                                        <input key={idx} className='input-field' onChange={handleChange} name={`packages.${selectedPackage}.features`} data-idx={idx} data-pack={selectedPackage} value={feature} type="text" maxLength={30} required />
                                        <img src={checkImg} alt="Feature" />
                                    </label>
                                )
                            })}
                        </div>
                    </section>

                </section>

                <button className='send'>Continue</button>
            </form>
            <BigGigPreview gig={gigToEdit} />
        </section>
    )
}