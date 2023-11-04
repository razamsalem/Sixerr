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
import { hideBackdrop, setHeaderPosition, setSubHeaderPosition, showBackdrop } from '../store/actions/system.actions'
import { DropdownBtn } from './DropdownBtn'
import { gigService } from '../services/gig.service.local'
import { getClearFilter, setFilterBy } from "../store/actions/gig.actions"

const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699048789/user-1_conuzo.png'
const categories = gigService.getCategories()



export function AppHeader() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const headerPosition = useSelector(storeState => storeState.systemModule.headerPosition)
    const subHeaderPosition = useSelector(storeState => storeState.systemModule.subHeaderPosition)
    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(null)
    const [selectedDropDownBtn, setSelectedDropDownBtn] = useState(null)
    const currentPath = location.pathname

    useEffect(() => {
        loadOrders()
    }, [user])

    useEffect(() => {
        if (currentPath !== '/home') {
            setHeaderPosition('static')
            setSubHeaderPosition('static')
        }
    }, [currentPath])

    async function onLogin(credentials) {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
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

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }


    return (
        <>
            <section className={`${headerPosition} main-layout full header-container`}>
                <header className="app-header">
                    <div className="logo-container">
                        <i className="hamburger-icon btn fa-solid fa-bars" onClick={openModal} />
                        <Link to={'/home'} onClick={() => { setFilterBy(getClearFilter()) }} className='logo'>
                            sixerr<span className='dot'>.</span>
                        </Link>
                    </div>

                    <div className="searchbar-container" onFocus={showBackdrop} onBlur={hideBackdrop}>
                        <SearchBarFilter />
                    </div>
                    <section className={`menu-backdrop ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
                        <nav className={`links-container ${isModalOpen ? 'active' : ''}`}>
                            {routes.map(route => !route.shouldRender ? ''
                                :
                                <NavLink className='btn' key={route.path} to={route.path}>{route.label}</NavLink>)}

                            {user &&
                                <>
                                    <NavLink className='btn' key={'order'} to={'order'}>Orders</NavLink>
                                    <span className="user-info">
                                        <DropdownBtn selectedBtn={selectedDropDownBtn} setSelectedBtn={setSelectedDropDownBtn} icon={<img src={user.imgUrl} onError={e => e.currentTarget.src = defaultUserImg} />}>
                                            <NavLink to={`user/${user._id}`}>
                                                Profile
                                            </NavLink>

                                            {user.isSeller ?
                                                <NavLink to="/gig/add">
                                                    Add a gig
                                                </NavLink> : <NavLink to={`user/${user._id}`}>Become a seller</NavLink>}

                                            <span onClick={onLogout}>
                                                Logout
                                            </span>
                                        </DropdownBtn>
                                    </span>
                                </>

                            }
                            {!user &&
                                <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                            }
                        </nav>
                    </section>
                </header>
            </section >
            <CategoryNav categories={categories} globalFilterBy={globalFilterBy} setFilterBy={setFilterBy} getClearFilter={getClearFilter} subHeaderPosition={subHeaderPosition} />
        </>

    )
}