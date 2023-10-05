import { Link, NavLink, createSearchParams, useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './LoginSignup.jsx'
import { CategoryNav } from './CategoryNav'
import { useEffect, useState } from 'react'

export function AppHeader() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)
    const filterBy = useSelector(storeState=> storeState.gigModule.filterBy);

    const [txt, setTxt] = useState('');
    const [params, setParams] = useState(filterBy);


    useEffect(() => {
        setParams(prevParam=> ({...prevParam,txt}) )
      }, [txt]);

    
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
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }


    function searchFilter(ev){
        ev.preventDefault()
        navigate(`/gig?${createSearchParams(params)}`)
    }

    function clearInputAndParams() {
        setTxt('');
        navigate('/')
    }
    return (
        <>
            <section className="main-layout full header-container">
                <header className="app-header">
                    <h1 className='logo' onClick={clearInputAndParams}>
                        Sixerr<span className='dot'>.</span>
                    </h1>

                    <form onSubmit={searchFilter}>
                        <div className="searchbar-container">
                            <input type="text" className="search-bar" placeholder='What service are you looking for today?' onChange={(e) => {
                                setTxt(e.target.value)
                            }} value={txt}/>
                            <button className='btn fa-solid search-icon size=lg'></button>
                        </div>
                    </form>

                    <nav className='links-container'>
                        {routes.map(route => !route.shouldRender ? ''
                            :
                            <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}

                        {user &&
                            <span className="user-info">
                                <Link to={`user/${user._id}`}>
                                    {user.imgUrl && <img src={user.imgUrl} />}
                                </Link>
                                <span className="score">{user.score?.toLocaleString()}</span>
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