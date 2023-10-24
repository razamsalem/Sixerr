import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from './ImgUploader'
import { Modal } from './Modal'
import { useSelector } from 'react-redux'
import { setUserModalOpen } from '../store/user.actions'

export function LoginSignup(props) {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])
    const isUserModalOpen = useSelector(storeState => storeState.userModule.isUserModalOpen)

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        props.onLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        props.onSignup(credentials)
        clearState()
    }

    function onSetSignIn() {
        setIsSignup(false)
        onToggleModal()
    }

    function onSetSignup() {
        setIsSignup(true)
        onToggleModal()
    }

    function onToggleModal() {
        setUserModalOpen(!isUserModalOpen)
    }

    function onCloseModal(ev) {
        ev.stopPropagation()
        setUserModalOpen(false)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }
    return (
        <>
            <a className="btn login" onClick={onSetSignIn}>Login</a>
            <a className="btn join" onClick={onSetSignup}>Join</a>

            <Modal open={isUserModalOpen} onClose={onCloseModal}>
                <>
                    <img className='cover-img' src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1697448779/login-img_t6g2jm.png" alt="Success starts here" />
                    <ul className='benefits-container'>
                        <h2>Success starts here</h2>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Over 600 categories
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Pay per project, not per hour
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Access to talent and businesses across the globe
                        </li>
                    </ul>
                    <section className='user-actions'>
                        <h4 className='login-signup-heading'>
                            {isSignup ? 'Create a new account' : 'Sign in to your account'}
                        </h4>
                        <span className='change-action-heading'>
                            {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
                            <span className='change-action' onClick={() => {
                                setIsSignup(prevState => !prevState)
                            }}>
                                {isSignup ? 'Sign in' : 'Join here'}
                            </span>
                        </span>
                        {!isSignup && <form className="login-form" onSubmit={onLogin}>
                            <select
                                className='sign-in-select'
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                            >
                                <option value="">Select User</option>
                                {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                            </select>
                            <button className={`${!credentials.username ? 'disabled' : ''} btn continue`}>Continue</button>
                        </form>}

                        <div className="signup-section">
                            {isSignup && <form className="signup-form" onSubmit={onSignup}>
                                <label className='user-info-label'>
                                    Full name
                                    <input
                                        className='user-info-input'
                                        type="text"
                                        name="fullname"
                                        value={credentials.fullname}
                                        placeholder="Your name"
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label className='user-info-label'>
                                    Username
                                    <input
                                        className='user-info-input'
                                        type="text"
                                        name="username"
                                        value={credentials.username}
                                        placeholder="Username"
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label className='user-info-label'>
                                    Password
                                    <input
                                        className='user-info-input'
                                        type="password"
                                        name="password"
                                        value={credentials.password}
                                        placeholder="Choose a password"
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <ImgUploader onUploaded={onUploaded} />
                                <button className={`${!credentials.username ? 'disabled' : ''} btn continue`}>Continue</button>
                            </form>}
                        </div>
                        <small className='terms'>
                            By joining, you agree to the
                            Sixerr <a className='link' href="">Terms of Service</a> and to occasionally receive emails from us.
                            Please read our <a className='link' href=""> Privacy Policy </a>to learn how we use your personal data.
                        </small>
                    </section>
                </>
            </Modal>
        </>
    )
}