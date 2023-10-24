import { useState, useEffect } from 'react'
import { gigService } from '../services/gig.service.local'
import { ImgUploader } from '../cmps/ImgUploader'
import { MultiSelect } from '../cmps/MultiSelect'

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

    console.log(gigToEdit)


    function handleChange(ev) {
        let { name, value } = ev.target
        if (ev.target.dataset.name) {
            name = ev.target.dataset.name
            value = ev.target.dataset.value
        }
        if (name === 'rate') value = parseInt(value)

        setGigToEdit({ ...gigToEdit, [name]: value })
    }

    function onUploadedImgs(imgUrl) {
        console.log(imgUrl)
    }

    return (
        <section className="add-gig">
            <form className='create-gig' onChange={handleChange}>
                <h1 className="heading">Add a gig</h1>
                <h2 className="sub-heading">Fill the required information and share your details about your new gig</h2>

                <label className='gig-title'>
                    Enter the title of your new gig
                    <input name='title' type="text" placeholder='I will...' />
                </label>
                <label className='gig-desc'>
                    Enter a short description for your new gig
                    <input type="text" />
                </label>
                <label className='days-to-make'>
                    Number of Days estimated to provide the required service
                    <input type="number" max={9} />
                </label>
                <label className='imgs'>
                    Add images of the provided service
                    <ImgUploader onUploaded={onUploadedImgs} />
                </label>
                <label className='tags'>
                    Select category tags related to the provided service
                    <MultiSelect tags={categories} />
                </label>
            </form>

        </section>
    )
}






// import { useDispatch, useSelector } from 'react-redux'
// import { useSearchParams } from 'react-router-dom'
// import { showErrorMsg, showSuccessMsg, showUserMsg } from '../services/event-bus.service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
// import { loadReviews, addReview, removeReview, getActionAddReview } from '../store/review.actions'
// import { loadUsers } from '../store/user.actions'
// import { reviewService } from '../services/review.service'
// import { BigOrderPreview } from '../cmps/BigOrderPreview'
// import { RatingStars } from '../cmps/RatingStars'

// export function ReviewIndex() {
//     const orders = useSelector(storeState => storeState.orderModule.orders)
//     const [searchParams, setSearchParams] = useSearchParams()
//     const [reviewToEdit, setReviewToEdit] = useState(reviewService.getEmptyReview())
//     const [order, setOrder] = useState(null)

//     useEffect(() => {
//         const params = Object.fromEntries([...searchParams])
//         loadOrder(params.orderId)
//     }, [searchParams, orders])


//     useEffect(() => {
//         if (!order || !orders.length) return
//         setReviewToEdit((prevState) => ({ ...prevState, by: order.buyer, gig: order.gig }))
//     }, [order])


//     function loadOrder(orderId) {
//         setOrder(orders.filter(order => order._id === orderId)[0])
//     }

//     const handleChange = ev => {
//         let { name, value } = ev.target
//         if (ev.target.dataset.name) {
//             name = ev.target.dataset.name
//             value = ev.target.dataset.value
//         }
//         if (name === 'rate') value = parseInt(value)

//         setReviewToEdit({ ...reviewToEdit, [name]: value })
//     }

//     async function onAddReview(ev) {
//         ev.preventDefault()
//         if (!reviewToEdit.txt || !reviewToEdit.rate) return showErrorMsg('All fields are required')
//         try {
//             await addReview(reviewToEdit)
//             showSuccessMsg('Review added')
//         } catch (err) {
//             showErrorMsg('Cannot add review')
//         }
//     }
//     return (
//         <section className="review-index">
//                   <form className='add-review' onChange={handleChange} onSubmit={onAddReview}>
//         <h1 className='heading'>Public review</h1>
//         <h2 className='sub-heading'>Share your experience with the community, to help them make better decisions.</h2>
//         <label className='rate-label'>
//           Rate your overall satisfaction of the provided service
//           <RatingStars handleChange={handleChange} rate={reviewToEdit.rate} />
//         </label>
//         <label className='txt-label'>
//           What was it like working with this seller?
//           <textarea className='review-txt' maxLength="700" name='txt' placeholder='My experience working with this seller was...'>
//           </textarea>
//           <span className='letter-count'>{`${reviewToEdit.txt.length} / 700 `}</span>
//         </label>
//         <button className='send' title='Send your review'>Send feedback</button>
//       </form>
//             <BigOrderPreview order={order} />
//         </section>
//     )
// }