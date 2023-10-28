import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { BigGigPreview } from '../cmps/BigGigPreview'
import { MUISelect } from '../cmps/MUISelect'
import { utilService } from '../services/util.service'

export function AddGig() {
    const [gigToEdit, setGigToEdit] = useState(null)
    const [currCategory, setCurrCategory] = useState({})
    const [selectedPackage, setSelectedPackage] = useState('basic')
    const { gigId } = useParams()
    const navigate = useNavigate()
    window.scrollTo(0, 0)
    
    useEffect(() => {
        setGigToEdit(gigService.getEmptyGig())
        onLoadGig()
    }, [gigId])

    useEffect(() => {
        if (gigToEdit && gigToEdit.category) setCurrCategory(gigService.categories.find(c => c.category === gigToEdit.category))
    }, [gigToEdit])

    async function onLoadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setGigToEdit(desiredGig)
        } catch (err) {
            console.log('Had issues in addGig ->', err)
            showErrorMsg('Oops cannot load gig')
            navigate('/')
        }
    }

    function handleChange(ev) {
        const { name, value } = ev.target

        if (name.startsWith('packages.')) {
            const [packageName, property] = name.split('.').slice(1)
            setGigToEdit(prevState => {
                const updatedPackages = {
                    ...prevState.packages,
                    [packageName]: {
                        ...prevState.packages[packageName],
                        [property]: value
                    }
                }

                console.log('Package Name:', name)
                console.log('New Value:', value)

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
            alert('You can only add up to 3 packages.')
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
            showSuccessMsg(`Added a new gig! ${savedGig._id}`)
            navigate(`/gig/${savedGig._id}`)
        } catch (err) {
            showErrorMsg('Cannot add gig at this time..')
        }

    }

    if (!gigToEdit) return null
    return (
        <section className="add-gig">
            <form className='create-gig' onSubmit={onSaveGig}>
                <h1 className="heading">{gigId ? 'Edit a gig' : 'Add a gig'}</h1>
                <h2 className="sub-heading">Fill the required information and share your details about your new gig</h2>

                <label className='form-label gig-title'>
                    Enter the title of your new gig
                    <input onChange={handleChange} name='title' value={gigToEdit.title} type="text" placeholder='I will...' maxLength={100} />
                </label>
                <label className='form-label gig-desc'>
                    Enter a description for your new gig
                    <input type="text" onChange={handleChange} name='description' value={gigToEdit.description} maxLength={140} placeholder='Provided service will include...' />
                </label>
                <label className='form-label tags'>
                    Select Category
                    <MUISelect categories={gigService.categories} selectCategory={onSelectCategory} selectedCategory={gigToEdit.category}></MUISelect>
                </label>
                <label className='form-label tags'>
                    Category tags
                    <MultiSelect tags={currCategory.tags || []} onChooseTag={onSelectTag} chosenTags={gigToEdit.tags} />
                </label>

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

                <label className='form-label gig-title'>
                    Enter a title on your package
                    <input onChange={handleChange} name={`packages.${selectedPackage}.title`} value={gigToEdit.packages[selectedPackage].title} type="text" maxLength={20} />
                </label>

                <span className='numbers flex'>
                    <label className='form-label days-to-make'>
                        <p className='est'> Est. Days to deliver </p>
                        <span className='days-input'>
                            <i className="fa-solid fa-dolly delivery-icon"></i>
                            <input type="number" min={1} max={90} onChange={handleChange} name={`packages.${selectedPackage}.packDaysToMake`} value={gigToEdit.packages[selectedPackage].packDaysToMake} />
                        </span>
                    </label>

                    <label className='form-label price'>
                        <p> Price in USD </p>
                        <span className='price-input'>
                            <input type="number" min={1} max={999} maxLength={3} onChange={handleChange} name={`packages.${selectedPackage}.packPrice`} value={gigToEdit.packages[selectedPackage].packPrice} />
                        </span>
                    </label>
                </span>

                <label className='form-label imgs'>
                    Add images of the provided service
                    <ImgUploader onUploaded={onUploadedImgs} />
                </label>
                <button className='send'>Continue</button>
            </form>
            <BigGigPreview gig={gigToEdit} />
        </section>
    )
}