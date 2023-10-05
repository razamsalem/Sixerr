import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadUser } from '../store/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'

export function UserDetails() {

  const params = useParams()
  const user = useSelector(storeState => storeState.userModule.watchedUser)

  useEffect(() => {
    loadUser(params.id)

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

  return (
    <section className="user-details">
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

        </div>
        <h3>
          {user.fullname}
        </h3>
        {/* Demo for dynamic images: */}
        <div className="user-img" style={{ backgroundImage: `url('/img/u${0}.png')` }}>
        </div>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>}
    </section>
  )
}