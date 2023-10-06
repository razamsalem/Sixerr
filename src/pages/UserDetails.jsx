import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { utilService } from '../services/util.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
import { loadGigs } from '../store/actions/gig.actions.js'
import { loadUser } from '../store/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { GigList } from '../cmps/GigList'
import orders from '../../demoData/ordersDemoData'
import { LongTxt } from '../cmps/LongTxt'
import becomeSellerBanner from '../assets/img/become-seller.svg'

export function UserDetails() {

  const params = useParams()
  const user = useSelector(storeState => storeState.userModule.watchedUser)
  const gigs = useSelector(storeState => storeState.gigModule.gigs)
  const demoSubtitle = utilService.getSubtitle()
  const userGigs = []
  const userOrders = []

  useEffect(() => {
    loadUser(params.id)
    loadGigs()
    socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return () => {
      socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    }

  }, [params.id])


  function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch({ type: 'SET_WATCHED_USER', user })
  }
  // console.log(user)

  function onBecomeSeller(user) {
    const updatedUser = { ...user, isSeller: !user.isSeller }
    store.dispatch({ type: 'SET_WATCHED_USER', user: updatedUser })
  }

  return (
    <main className='user-details-container full'>
      <section className="user-details main-layout">
        {user && <div className='user-card'>
          <div className='user-profile-info'>
            <div className="flex justify-center">
              <div className="user-profile-img">
                {user.imgUrl && <img src={user.imgUrl} alt="user img" />}
              </div>
            </div>
            <div className="user-profile-label">
              <div className="username-line flex column align-center">
                <div className="username-info">
                  {user.fullname}
                </div>
                <div className="secondary-name">
                  @{user.username}
                </div>
              </div>
            </div>
            <div className="user-stats-desc">
              <ul className='user-stats with-border-top'>
                <li className="location flex">
                  <span><span className=' fa-solid fa-location-dot location-icon'></span>From</span>
                  <b>{user.location ? user.location : 'Israel'}</b>
                </li>
                <li className="member-since flex">
                  <span><span className='fa-solid fa-user user-icon'></span>Member since</span>
                  <b>Oct 2023</b>
                </li>
              </ul>
            </div>
          </div>
        </div>}

        {user && <div className='desc-card'>
          <div className='user-profile-desc'>
            <div className='user-stats'>
              <div className="user-data">
                <div className="header flex">
                  <h3 title='Tell us more about yourself. Buyers are also interested in learning about you as a person.'>Description</h3>
                  <button>Edit Description</button>
                </div>
                <p>{user.desc ? user.desc : <span className='empty'>Tell us more about yourself. Buyers are also interested in learning about you as a person.</span>}</p>
              </div>
              <div className="user-lang with-border-top">
                <div className="header flex">
                  <h3 title='You can make up to four selections.'>Languages</h3>
                  <button>Add new</button>
                </div>
                <ul>{user.lang ? user.lang.map((lang, idx) => (
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
            </div>
          </div>
        </div>}
      </section>

      <section className="gigs-column main-layout">
        {(user?.isSeller && <div className='manage-orders'>
          <h1>Manage Orders</h1>
          {orders.map(order => {
            if (order.seller._id === params.id) {
              userOrders.push(order)
            }
          })}
          {userOrders.length && <table>
            <thead>
              <tr>
                <td>Buyer</td>
                <td>Gig</td>
                <td>Due on</td>
                <td>Total</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              {console.log(userOrders)}
              {userOrders.map(order => (
                <tr key={order._id}>
                  <td>
                    <div className="user-with-img">
                      <img src={order.buyer.imgUrl} alt="Buyer img" />
                      {order.buyer.username}
                    </div>
                  </td>
                  <td className='order-title'><LongTxt txt={order.gig.title} length={40} showReadMore={false} /></td>
                  <td>Thu Aug 04 2022</td>
                  <td>${order.gig.price}</td>
                  <td>Completed</td>
                </tr>
              ))}
            </tbody>
          </table>}
          {!userOrders.length && <table>
            <thead>
              <tr>
                <td>Buyer</td>
                <td>Gig</td>
                <td>Due on</td>
                <td>Total</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="user-with-img">
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg" alt="" />
                    James_q23
                  </div>
                </td>
                <td>I will create an awesome logo for you</td>
                <td>Thu Aug 04 2022</td>
                <td>$360</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>
                  <div className="user-with-img">
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696177523/samples/man-portrait.jpg" alt="" />
                    john_doe
                  </div>
                </td>
                <td>I will design a stunning website for you</td>
                <td>Fri Oct 21 2022</td>
                <td>$500</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>
                  <div className="user-with-img">
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696177519/samples/two-ladies.jpg" alt="" />
                    mary_smith18
                  </div>
                </td>
                <td>I will write a compelling blog post</td>
                <td>Sat Nov 05 2022</td>
                <td>$150</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>
                  <div className="user-with-img">
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696177522/samples/look-up.jpg" alt="" />
                    carmelo_dwang1
                  </div>
                </td>
                <td>I will write a compelling blog post</td>
                <td>Sat Nov 05 2022</td>
                <td>$200</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>
                  <div className="user-with-img">
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696177496/samples/people/kitchen-bar.jpg" alt="" />
                    victor_jong_dwang
                  </div>
                </td>
                <td>I will write a compelling blog post</td>
                <td>Sat Nov 05 2022</td>
                <td>$500</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>}

          <div className="my-gigs">
            <h1>My Gigs</h1>
            {gigs.map(gig => {
              if (gig.owner._id === params.id) {
                userGigs.push(gig)
              }
            })}
            {userGigs &&
              <div>
                <GigList gigs={userGigs} />
              </div>
            }
            {!userGigs.length && <div> <p className='empty'>Surely someone needs your service...create your gig today!</p> </div>}
          </div>
        </div>)}
        {(!user?.isSeller && <div className="seller-gigs">
          <div className="become-seller">
           <img src={becomeSellerBanner} alt="becomeSellerBanner" className="become-seller-img"/>
            <h3>Ready to earn on your own terms?</h3>
            <button onClick={() => onBecomeSeller(user)}>Become a seller</button>

          </div>
        </div>)}
      </section>
    </main >
  )
}