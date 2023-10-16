import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from './ImgUploader'
import { Modal } from './Modal'

export function LoginSignup(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])
    const [isModalOpen, setModalIsOpen] = useState(false)

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
        setModalIsOpen((prevState) => !prevState)
    }

    function onCloseModal(ev) {
        ev.stopPropagation()
        setModalIsOpen((prevState) => false)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }
    return (
        <>
            <a className="btn login" onClick={onSetSignIn}>Login</a>
            <a className="btn join" onClick={onSetSignup}>Join</a>

            <Modal open={isModalOpen} onClose={onCloseModal}>
                <>
                    <img className='cover-img' src="https://res.cloudinary.com/dgsfbxsed/image/upload/v1697448779/login-img_t6g2jm.png" alt="Success starts here" />
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
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                            >
                                <option value="">Select User</option>
                                {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                            </select>
                            <button>Continue</button>
                        </form>}

                        <div className="signup-section">
                            {isSignup && <form className="signup-form" onSubmit={onSignup}>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={credentials.fullname}
                                    placeholder="Fullname"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                                <ImgUploader onUploaded={onUploaded} />
                                <button >Continue</button>
                            </form>}
                        </div>
                        <small className='terms'>
                            By joining, you agree to the
                            Sixerr <a href="">Terms of Service</a> and to occasionally receive emails from us.
                            Please read our <a href=""> Privacy Policy </a>to learn how we use your personal data.
                        </small>
                    </section>
                </>
            </Modal>
        </>
    )
}