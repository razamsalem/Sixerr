import { Link, NavLink, createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { CategoryNav } from './CategoryNav'
import { useEffect, useState } from 'react'
import { SearchBarFilter } from './SearchBarFilter'
import { getActionUpdateOrder, loadOrders } from '../store/actions/order.actions'
import { hideBackdrop, setHeaderPosition, setSubHeaderPosition, showBackdrop } from '../store/actions/system.actions'
import { DropdownBtn } from './DropdownBtn'
import { gigService } from '../services/gig.service'
import { getClearFilter, setFilterBy } from "../store/actions/gig.actions"
import { Modal } from './Modal'
import { MobileAside } from './MobileAside'
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
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) loadOrders()
    }, [user])

    useEffect(() => {
        if (currentPath !== '/home') {
            setHeaderPosition('static')
            setSubHeaderPosition('static')
        }
    }, [currentPath])

    useEffect(() => {
        socketService.on('order-updated', order => {
            dispatch(getActionUpdateOrder(order))
            switch (order.status) {
                case 'approved':
                    showSuccessMsg(`${order.seller.fullname} approved your order!`)
                    break;
                case 'rejected':
                    showErrorMsg(`${order.seller.fullname} has rejected your order.`)
                    break;
                case 'fulfilled':
                    showSuccessMsg(`${order.seller.fullname} has delivered your order!`)
                    break;
                default:
                    break;
            }
        })
        return () => {
            socketService.off('order-updated')
        }
    }, [])

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

    function onToggleModal() {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <section className={`${headerPosition} main-layout full header-container`}>
                <Modal open={isModalOpen} onClose={onToggleModal} isAside={true}>
                    <MobileAside loggedUser={user} defaultUserImg={defaultUserImg} categories={categories} />
                </Modal>
                <header className="app-header">
                    <div className="logo-container">
                        <i className="hamburger-icon btn fa-solid fa-bars" onClick={onToggleModal} />
                        <Link to={'/home'} onClick={() => { setFilterBy(getClearFilter()) }} className='logo'>
                            sixerr<span className='dot'>.</span>
                        </Link>
                    </div>

                    <div className="searchbar-container" onFocus={showBackdrop} onBlur={hideBackdrop}>
                        <SearchBarFilter />
                    </div>

                    <nav className={`links-container }`}>
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
                </header>
            </section >
            <CategoryNav categories={categories} globalFilterBy={globalFilterBy} setFilterBy={setFilterBy} getClearFilter={getClearFilter} subHeaderPosition={subHeaderPosition} />
        </>

    )
}