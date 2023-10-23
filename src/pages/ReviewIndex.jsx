import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg, showUserMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
import { loadReviews, addReview, removeReview, getActionAddReview } from '../store/review.actions'
import { loadUsers } from '../store/user.actions'
import { reviewService } from '../services/review.service'
import { BigOrderPreview } from '../cmps/BigOrderPreview'

export function ReviewIndex() {
  const orders = useSelector(storeState => storeState.orderModule.orders)
  const [searchParams, setSearchParams] = useSearchParams()
  const [reviewToEdit, setReviewToEdit] = useState(reviewService.getEmptyReview())
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    loadOrder(params.orderId)
  }, [searchParams, orders])


  useEffect(() => {
    if (!order || !orders.length) return
    setReviewToEdit((prevState) => ({ ...prevState, by: order.buyer, gig: order.gig }))
  }, [order])


  function loadOrder(orderId) {
    setOrder(orders.filter(order => order._id === orderId)[0])
  }

  const handleChange = ev => {
    let { name, value } = ev.target
    if (name === 'rate') value = parseInt(value)
    setReviewToEdit({ ...reviewToEdit, [name]: value })
  }

  async function onAddReview(ev) {
    ev.preventDefault()
    if (!reviewToEdit.txt || !reviewToEdit.rate) return showErrorMsg('All fields are required')
    try {
      await addReview(reviewToEdit)
      showSuccessMsg('Review added')
      setReviewToEdit({ txt: '', aboutUserId: '' })
    } catch (err) {
      showErrorMsg('Cannot add review')
    }
  }


  return (
    <section className="review-index">
      <form className='add-review' onChange={handleChange} onSubmit={onAddReview}>
        <h1 className='heading'>Public review</h1>
        <h2 className='sub-heading'>Share your experience with the community, to help them make better decisions.</h2>
        <label className='rate-label'>
          Rate
          <select name='rate'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label className='txt-label'>
          What was it like working with this seller?
          <textarea className='review-txt' maxLength="700" name='txt'>
          </textarea>
          <span className='letter-count'>{`${reviewToEdit.txt.length} / 700 `}</span>
        </label>
        <button className='send'>Send feedback</button>
      </form>
      <BigOrderPreview order={order} />
    </section>
  )
}