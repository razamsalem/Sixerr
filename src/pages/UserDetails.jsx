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
import { YesNoModal } from '../cmps/YesNoModal'
import { gigService } from '../services/gig.service.local'


export function UserDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const watchedUser = useSelector(storeState => storeState.userModule.watchedUser)
  const loggedUser = useSelector(storeState => storeState.userModule.user)
  const orders = useSelector(storeState => storeState.orderModule.orders)
  const [gigs, setGigs] = useState(null)
  const [isDashboardOpen, setDashboardOpen] = useState(null)
  const [isModalOpen, setModalOpen] = useState(null)
  const demoSubtitle = utilService.getSubtitle()

  useEffect(() => {
    loadUser(params.id)
    onSetGig()
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

  async function openModal() {
    setModalOpen(true)
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

  return (
    <>
      {/* {isModalOpen && (
        <YesNoModal txt={'Are you sure you want to delete this gig?'} handleBackgroundClick={handleBackgroundClick} onNoClick={closeModal} />
      )} */}
      {isDashboardOpen && (
        <DashboardModal watchedUser={watchedUser} closeDashboard={closeDashboard} handleBackgroundClick={handleBackgroundClick} orders={orders} loggedUser={loggedUser} />
      )}
      <main className='user-details-container main-layout full'>
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
                  </div>
                </div>
                <div className="user-stats-desc">
                  <ul className='user-stats with-border-top'>
                    <li className="location flex">
                      <span><span className=' fa-solid fa-location-dot location-icon'></span>From</span>
                      <b>{watchedUser.location ? watchedUser.location : 'Israel'}</b>
                    </li>
                    <li className="member-since flex">
                      <span><span className='fa-solid fa-user user-icon'></span>Member since</span>
                      <b>Oct 2023</b>
                    </li>
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
                  <div className="user-skills with-border-top">
                    <div className="header flex">
                      <h3 title='You can make up to four selections.'>Skills</h3>
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
                      <h3 title='You can make up to four selections.'>Education</h3>
                      {/* <button>Add new</button> */}
                    </div>
                    <ul>
                      <li><span className='title'>{utilService.getEducation()}</span></li>
                      <li><span className='empty'>{utilService.getEducationPlace()}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>}
          </section>

          <section className="gigs-column user-details-layout">
            {(watchedUser?.isSeller && <div className='manage-orders'>
              <div className="order-header flex">
                <h1>Manage Orders</h1>
                <button onClick={openDashboard} className='dash-btn'>Dashboard Overview</button>
              </div>
              <OrderList orders={orders} loggedUser={loggedUser} mode='seller' onApproveOrder={onApproveOrder} onDeclineOrder={onDeclineOrder} onFulfillOrder={onFulfillOrder} />
              <div className="my-gigs">

                {!gigs || !gigs.length && <>
                  <h1>My Gigs</h1>
                  <div>
                    <p className='empty'>
                      Surely someone needs your service...<Link className='link' to="/gig/add">create your first gig today!</Link>
                    </p>
                    <Link className='link' to="/gig/add"><AddGigCard txt={'Add a gig'} /></Link>
                  </div>
                </>}


                {gigs && gigs.length > 0 && <>
                  <div className='gigs-list flex column'>
                    <h1>Best seller gigs </h1>
                    <GigList gigs={gigs} onlyTwo={true} minimal={true} />
                  </div>
                  <section className='user-gigs'>
                    <h1>All gigs <i title='Add a new gig' className="fa-solid fa-circle-plus add-gig-btn" onClick={() => onClickAddGig()}></i></h1>
                    {<MyGigsTable gigs={gigs} openModal={openModal} />}
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
          </section>
        </section>
      </main >
    </>

  )
}