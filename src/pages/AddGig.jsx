import { useState, useEffect } from 'react'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

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

                <label className='gig-title'>
                    Enter the title of your new gig
                    <input onChange={handleChange} name='title' value={gigToEdit.title} type="text" placeholder='I will...' />
                </label>
                <label className='gig-desc'>
                    Enter a short description for your new gig
                    <input type="text" onChange={handleChange} name='description' value={gigToEdit.description} />
                </label>
                <label className='days-to-make'>
                    Number of Days estimated to provide the required service
                    <input type="number" max={90} onChange={handleChange} name='daysToMake' value={gigToEdit.daysToMake} />
                </label>
                <label className='imgs'>
                    Add images of the provided service
                    <ImgUploader onUploaded={onUploadedImgs} />
                </label>
                <label className='price'>
                    Enter Price in USD for this gig
                    <input type="number" max={10000} onChange={handleChange} name='price' value={gigToEdit.price} />
                </label>
                <label className='tags'>
                    Select category tags related to the provided service
                    <MultiSelect tags={categories} onChooseTag={onChooseTag} chosenTags={gigToEdit.tags} />
                </label>
                <button>Continue</button>
            </form>

        </section>
    )
}