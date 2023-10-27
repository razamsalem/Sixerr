import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { BigGigPreview } from '../cmps/BigGigPreview'
import { MUISelect } from '../cmps/MUISelect'

export function AddGig() {
    const [gigToEdit, setGigToEdit] = useState(null)
    const [currCategory, setCurrCategory] = useState({})
    const { gigId } = useParams()
    const navigate = useNavigate()

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

                <h2 className="sub-heading">Edit Your Packages</h2>
                {Object.keys(gigToEdit.packages).map((packageName) => (
                    <div key={packageName}>
                        <h3>{packageName} Package</h3>
                        <label>
                            Package Title
                            <input
                                type='text'
                                name={`packages.${packageName}.title`}
                                value={gigToEdit.packages[packageName].title}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Package Price
                            <input
                                type="number"
                                name={`packages.${packageName}.packPrice`}
                                value={gigToEdit.packages[packageName].packPrice}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Days to Make
                            <input
                                type="number"
                                name={`packages.${packageName}.packDaysToMake`}
                                value={gigToEdit.packages[packageName].packDaysToMake}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                ))}

                <span className='numbers'>
                    <label className='form-label days-to-make'>
                        Est. Days to deliver
                        <span className='days-input'>
                            <i className="fa-solid fa-dolly delivery-icon"></i>
                            <input type="number" max={90} onChange={handleChange} name='daysToMake' value={gigToEdit.daysToMake} />
                        </span>
                    </label>
                    <label className='form-label price'>
                        Price in USD
                        <span className='price-input'>
                            <input type="number" max={999} maxLength={3} onChange={handleChange} name='price' value={gigToEdit.price} />
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