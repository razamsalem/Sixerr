import { useState, useEffect } from 'react'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { BigGigPreview } from '../cmps/BigGigPreview'

const categories = [
    "Graphics & Design",
    "Programming & Tech",
    "Digital Marketing",
    "Video & Animation",
    "Writing & Translation",
    "Music & Audio",
    "Business",
    "Data",
    "Photography"
]


export function AddGig() {
    const [gigToEdit, setGigToEdit] = useState(null)

    useEffect(() => {
        setGigToEdit(gigService.getEmptyGig())
    }, [])

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

    function onChooseTag(ev) {
        let { value } = ev.target
        setGigToEdit({ ...gigToEdit, tags: [...value] })
    }


    async function onSaveGig(ev) {
        ev.preventDefault()
        if (!gigToEdit.description || !gigToEdit.title) return showErrorMsg('All fields are required')
        try {
            const savedGig = await gigService.save(gigToEdit)
            showSuccessMsg(`Added a new gig! ${savedGig._id}`)
        } catch (err) {
            console.log(err)
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
                    Category tags
                    <MultiSelect tags={categories} onChooseTag={onChooseTag} chosenTags={gigToEdit.tags} />
                </label>
                <label className='form-label days-to-make'>
                    Est. Days to deliver
                    <input className='days-input' type="number" max={90} onChange={handleChange} name='daysToMake' value={gigToEdit.daysToMake} />
                </label>
                <label className='form-label price'>
                    Price in USD
                    <input className='price-input' type="number" max={999} maxLength={3} onChange={handleChange} name='price' value={gigToEdit.price} >
                    </input>
                </label>
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