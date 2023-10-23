import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg, showUserMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
import { loadReviews, addReview, removeReview, getActionAddReview } from '../store/review.actions'
import { loadUsers } from '../store/user.actions'
import { reviewService } from '../services/review.service'

export function ReviewIndex() {
  const loggedInUser = useSelector(storeState => storeState.userModule.user)
  const [reviewToEdit, setReviewToEdit] = useState(reviewService.getEmptyReview())

  const dispatch = useDispatch()

  const handleChange = ev => {
    let { name, value } = ev.target
    if (name === 'rate') value = parseInt(value)
    setReviewToEdit({ ...reviewToEdit, [name]: value })
  }

  const onAddReview = async ev => {
    ev.preventDefault()
    if (!reviewToEdit.txt || !reviewToEdit.aboutUserId) return alert('All fields are required')
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
      <h1>Public review</h1>
      <h2>Share your experience with the community, to help them make better decisions.</h2>

      <form onChange={handleChange}>
        <label>
          Rate:
          <select name='rate'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label>
          What was it like working with this seller?
          <textarea className='review-txt' name='txt'></textarea>
        </label>
      </form>
    </section>
  )
}