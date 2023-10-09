import { Link, NavLink, createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { CategoryNav } from './CategoryNav'
import { useEffect, useState } from 'react'
import { SearchBarFilter } from './SearchBarFilter'
import { loadOrders } from '../store/actions/order.actions'


export function AppHeader() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        loadOrders()
    }, [user])

    async function onLogin(credentials) {
        try {
            navigate('/')
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
            navigate('/')
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }
    async function onLogout() {
        try {
            navigate('/')
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }


    return (
        <>
            <section className="main-layout full header-container">
                <header className="app-header">
                    <Link to={'/home'} className='logo'>
                        sixerr<span className='dot'>.</span>
                    </Link>

                    <div className="searchbar-container">
                        <SearchBarFilter />
                    </div>

                    <nav className='links-container'>
                        {routes.map(route => !route.shouldRender ? ''
                            :
                            <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}

                        {user &&
                            <span className="user-info">
                                <Link to={`user/${user._id}`}>
                                    {user.imgUrl && <img src={user.imgUrl} />}
                                </Link>
                                <button onClick={onLogout}>Logout</button>
                            </span>
                        }
                        {!user &&
                            <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                        }
                    </nav>
                </header>
            </section>
            <CategoryNav />
        </>

    )
}