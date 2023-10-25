import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { BigGigPreview } from '../cmps/BigGigPreview'
import { MUISelect } from '../cmps/MUISelect'

export function AddGig() {
    const [gigToEdit, setGigToEdit] = useState(null)
    const [currCategory, setCurrCategory] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        setGigToEdit(gigService.getEmptyGig())
    }, [])

    useEffect(() => {
        if (gigToEdit && gigToEdit.category) setCurrCategory(gigService.categories.find(c => c.category === gigToEdit.category))
    }, [gigToEdit])


    function handleChange(ev) {
        let { name, value } = ev.target
        if (ev.target.dataset.name) {
            name = ev.target.dataset.name
            value = ev.target.dataset.value
        }
        if (name === 'price') value = parseInt(value)

        setGigToEdit({ ...gigToEdit, [name]: value })
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
        if (!gigToEdit.description || !gigToEdit.title) return showErrorMsg('All fields are required')
        try {
            const savedGig = await gigService.save(gigToEdit)
            showSuccessMsg(`Added a new gig! ${savedGig._id}`)
            navigate(`/gig/${savedGig._id}`)
        } catch (err) {
            showErrorMsg('Cannot add gig at this time..')
        }

    }

    if (!gigToEdit) return
    return (
        <section className="add-gig">
            <form className='create-gig' onSubmit={onSaveGig}>
                <h1 className="heading">Add a gig</h1>
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