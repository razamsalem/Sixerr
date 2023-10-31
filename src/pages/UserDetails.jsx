import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom'
import { utilService } from '../services/util.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
import { storageService } from '../services/async-storage.service'
import { loadUser } from '../store/user.actions'
import { store } from '../store/store'
import { GigList } from '../cmps/GigList'
import { OrderList } from '../cmps/OrderList'
import { approveOrder, declineOrder, fulfillOrder, } from '../store/actions/order.actions'
import { DashboardModal } from '../cmps/DashboardModal'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import becomeSellerBanner from '../assets/img/become-seller.svg'
import LoadingCircle from '../cmps/LoadingCircle'
import { AddGigCard } from '../cmps/AddGigCard'
import { MyGigsTable } from '../cmps/MyGigsTable'
import { OrderModal } from '../cmps/OrderModal'
import { gigService } from '../services/gig.service.local'
import { ReviewList } from '../cmps/ReviewList'
import { userService } from '../services/user.service'

export function UserDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const demoSubtitle = utilService.getSubtitle()
  const watchedUser = useSelector(storeState => storeState.userModule.watchedUser)
  const loggedUser = useSelector(storeState => storeState.userModule.user)
  const orders = useSelector(storeState => storeState.orderModule.orders)
  const [gigs, setGigs] = useState(null)
  const [isDashboardOpen, setDashboardOpen] = useState(null)
  const [isModalOpen, setModalOpen] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {
    loadUser(params.id)
    onSetGig()
    window.scrollTo(0, 0)
    socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return () => {
      socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    }
  }, [params.id])


  async function onSetGig() {
    try {
      const gigs = await gigService.query({ userId: params.id })
      setGigs(gigs)
    } catch (err) {
      showErrorMsg('Could not load user gigs')
    }
  }


  function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch({ type: 'SET_WATCHED_USER', user })
  }

  async function onBecomeSeller(userId) {
    const user = await storageService.get('user', userId)
    user.isSeller = true
    await storageService.put('user', user)
    await userService.saveLocalUser(user)
    location.reload()
    return user
  }

  async function onApproveOrder(ev, order) {
    approveOrder(order)
  }

  async function onDeclineOrder(ev, order) {
    declineOrder(order)
  }

  async function onFulfillOrder(ev, order) {
    fulfillOrder(order)
  }

  async function openDashboard() {
    setDashboardOpen(true)
  }

  async function openOrderModal(order) {
    setModalOpen(true)
    setSelectedOrder(order)
  }

  async function closeDashboard() {
    setDashboardOpen(false)
  }

  async function closeModal() {
    setModalOpen(false)
  }

  function handleBackgroundClick(ev) {
    if (ev.target.classList.contains("modal-background")) {
      setDashboardOpen(false)
      setModalOpen(false)
    }
  }

  function onClickAddGig() {
    navigate('/gig/add')
  }

  if (!watchedUser) return <div className='loading'>{<LoadingCircle />}</div>
  if (!loggedUser) {
    navigate('/')
    showErrorMsg('You must be logged in to continue')
    return
  }
  return (
    <>
      {isModalOpen && (
        <OrderModal order={selectedOrder} userSeller={true} closeModal={closeModal} handleBackgroundClick={handleBackgroundClick} />
      )}
      {isDashboardOpen && (
        <DashboardModal watchedUser={watchedUser} closeDashboard={closeDashboard} handleBackgroundClick={handleBackgroundClick} orders={orders} loggedUser={loggedUser} />
      )}
      <main className={`user-details-container main-layout full ${watchedUser._id === loggedUser._id ? 'bg' : ''}`}>
        <section className='details-container'>
          <section className="user-details ">
            {watchedUser && <div className='user-card'>
              <div className='user-profile-info'>
                <div className="flex justify-center">
                  <div className="user-profile-img">
                    {watchedUser.imgUrl && <img src={watchedUser.imgUrl} alt="user img" />}
                  </div>
                </div>
                <div className="user-profile-label">
                  <div className="username-line flex column align-center">
                    <div className="username-info">
                      {watchedUser.fullname}
                    </div>
                    <div className="secondary-name">
                      @{watchedUser.username}
                    </div>
                    {watchedUser._id !== loggedUser._id &&
                      <button className='contact'>Contact me</button>
                    }
                  </div>
                </div>
                <div className="user-stats-desc">
                  <ul className='user-stats with-border-top'>
                    <li className="location info-card-style flex">
                      <span><span className='fa-solid fa-location-dot icon'></span>From</span>
                      <b>{watchedUser.location ? watchedUser.location : 'Israel'}</b>
                    </li>
                    <li className="member-since info-card-style flex">
                      <span><span className='fa-solid fa-user icon'></span>Member since</span>
                      <b>Oct 2023</b>
                    </li>
                    {watchedUser.isSeller && <>
                      <li className="member-res-time info-card-style flex">
                        <span><span className='fa-regular fa-clock icon'></span>Avg. Response Time</span>
                        <b>1 hour</b>
                      </li>
                      <li className="member-res-time info-card-style flex">
                        <span><span className='fa-solid fa-paper-plane icon'></span>Last Delivery</span>
                        <b>4 hours</b>
                      </li> </>}
                  </ul>
                </div>
              </div>
            </div>}

            {watchedUser && <div className='desc-card'>
              <div className='user-profile-desc'>
                <div className='user-stats'>
                  <div className="user-data">
                    <div className="header flex">
                      <h3 title='Tell us more about yourself. Buyers are also interested in learning about you as a person.'>Description</h3>
                      {/* <button>Edit Description</button> */}
                    </div>
                    <p>{watchedUser.desc ? watchedUser.desc : <span className='empty'>Tell us more about yourself. Buyers are also interested in learning about you as a person.</span>}</p>
                  </div>
                  <div className="user-lang with-border-top">
                    <div className="header flex">
                      <h3 title='You can make up to four selections.'>Languages</h3>
                      {/* <button>Add new</button> */}
                    </div>
                    <ul>{watchedUser.lang ? watchedUser.lang.map((lang, idx) => (
                      <li key={idx}><span className='title'>{lang}</span> - <span className='sub-title'>{demoSubtitle[utilService.getRandomIntInclusive(0, 1)]}</span></li>
                    )) :
                      <>
                        <li><span className='title'>English</span> - <span className='sub-title'>{demoSubtitle[0]}</span></li>
                        <li><span className='title'>Hebrew <strong>(עברית)</strong></span> - <span className='sub-title'>{demoSubtitle[1]}</span></li>
                        <li><span className='title'>Spanish <strong>(español)</strong></span> - <span className='sub-title'>{demoSubtitle[2]}</span></li>
                      </>
                    }
                    </ul>
                  </div>
                  {watchedUser.isSeller && <>
                    <div className="user-linked with-border-top">
                      <div className="header flex">
                        <h3>Linked Accounts</h3>
                        {/* <button>Add new</button> */}
                      </div>
                      <ul>
                        <li><span className='title'><span className='fa-brands fa-facebook logo'></span>Facebook</span></li>
                        <li><span className='title'><span className='fa-brands fa-google logo'></span>Google</span></li>
                        <li><span className='title'><span className='fa-brands fa-twitter logo'></span>Twitter</span></li>
                        <li><span className='title'><span className='fa-brands fa-dribbble logo'></span>Dribbble</span></li>
                      </ul>
                    </div>
                    <div className="user-skills with-border-top">
                      <div className="header flex">
                        <h3 title='Let your buyers know your skills. Skills gained through your previous jobs, hobbies or even everyday life.'>Skills</h3>
                        {/* <button>Add new</button> */}
                      </div>
                      <ul>
                        <li><span className='pill'>Website design</span></li>
                        <li><span className='pill'>Shopify marketing</span></li>
                        <li><span className='pill'>Python</span></li>
                        <li><span className='pill'>JavaScript</span></li>
                        <li><span className='pill'>Sales</span></li>
                      </ul>
                    </div>
                    <div className="user-education with-border-top">
                      <div className="header flex">
                        <h3 title='Describe your educational background. It will help buyers get to know you!'>Education</h3>
                        {/* <button>Add new</button> */}
                      </div>
                      <ul>
                        <li><span className='title'>{utilService.getEducation()}</span></li>
                        <li><span className='empty'>{utilService.getEducationPlace()}</span></li>
                      </ul>
                    </div>
                  </>}
                </div>
              </div>
            </div>}
          </section>

          {watchedUser._id !== loggedUser._id && !watchedUser.isSeller &&
            <section className="no-data-found">
              <div className="help-us">
                <h1>Unfortunately we do not have enough information about this user</h1>
                <img className='help-us-img' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/empty-search-results.aabcd99.png" />
                <h1>Do you know this user? Help us increase user data</h1>
                <button>Help us</button>
              </div>
            </section>
          }

          {watchedUser._id !== loggedUser._id && watchedUser.isSeller &&
            <section className="gigs-column user-details-layout">
              <div className='manage-orders'>
                <div className="order-header flex">
                  <h1 className='user-gigs-preview'>{watchedUser.username}'s Gigs</h1>
                </div>
                {gigs ? <GigList gigs={gigs} onUserProfile={true} /> : <h1>no gigs available</h1>}
                <section className='user-reviews'>
                  <ReviewList gigOwnerId={params.id} isUserProfile={true} />
                </section>
              </div>
            </section>
          }

          {watchedUser._id === loggedUser._id &&

            <section className="gigs-column user-details-layout">
              {(watchedUser?.isSeller && <div className='manage-orders'>
                {gigs && gigs.length > 0 && <> <div className="order-header flex">
                  <h1>Manage Orders</h1>
                  <button onClick={openDashboard} className='dash-btn'>Dashboard Overview</button>
                </div>
                  <OrderList orders={orders} loggedUser={loggedUser} mode='seller' openModal={openOrderModal} onApproveOrder={onApproveOrder} onDeclineOrder={onDeclineOrder} onFulfillOrder={onFulfillOrder} /> </>}
                <div className="my-gigs">

                  {!gigs || !gigs.length && <>
                    <h1 className='no-gigs-header'>My Gigs</h1>
                    <div className='no-gigs-content'>
                      <p className='empty'>
                        Surely someone needs your service...<Link className='link' to="/gig/add">create your first gig today!</Link>
                      </p>
                      <Link className='link' to="/gig/add"><AddGigCard txt={'Add a gig'} /></Link>
                    </div>
                  </>}


                  {gigs && gigs.length > 0 && <>
                    <div className='gigs-list flex column'>
                      <h1>Best seller gigs </h1>
                      <GigList gigs={gigs} onUserProfile={true} bestSellerGigs={true} minimal={true} />
                    </div>
                    <section className='user-gigs'>
                      <h1>All gigs <i title='Add a new gig' className="fa-solid fa-circle-plus add-gig-btn" onClick={() => onClickAddGig()}></i></h1>
                      {<MyGigsTable gigs={gigs} />}
                    </section>
                    <section className='user-reviews'>
                      <ReviewList gigOwnerId={params.id} isUserProfile={true} />
                    </section>
                  </>}
                </div>
              </div>)}

              {(!watchedUser?.isSeller && <div className="seller-gigs">
                <div className="become-seller">
                  <img src={becomeSellerBanner} alt="becomeSellerBanner" className="become-seller-img" />
                  <h3>Ready to earn on your own terms?</h3>
                  <button onClick={() => onBecomeSeller(params.id)}>Become a seller</button>
                </div>
              </div>)}
            </section>}
        </section>
      </main >
    </>
  )
}