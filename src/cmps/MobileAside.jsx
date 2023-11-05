import { Link } from "react-router-dom"
import { setUserModalOpen } from "../store/user.actions"
import { useSelector } from "react-redux"
import { getClearFilter } from "../store/actions/gig.actions"

export function MobileAside({ onToggleModal, loggedUser, onLogout, setFilterBy, defaultUserImg, categories }) {
    const isUserModalOpen = useSelector(storeState => storeState.userModule.isUserModalOpen)

    function toggleLoginModal() {
        setUserModalOpen(!isUserModalOpen)
    }

    function onSetFilterBy(category) {
        setFilterBy({ ...getClearFilter(), category })
    }

    return (
        <aside className="links-container">
            <div className="user-container">
                {loggedUser && <Link className="user" to={`/user/${loggedUser._id}`}>
                    <img src={loggedUser.imgUrl} onError={e => e.currentTarget.src = defaultUserImg} />
                    {loggedUser.fullname}
                </Link>}
                {!loggedUser &&
                    <div className="login-container">
                        <Link className="join" onClick={toggleLoginModal}>Join Sixerr</Link>
                    </div>
                }
            </div>
            {!loggedUser && <Link className="login link" onClick={toggleLoginModal}>Sign in</Link>}
            <h6 className="divider">My Profile</h6>
            <Link className="link" to={'/home'} onClick={onToggleModal}>Home</Link>
            <Link className="link" to={'/order'} onClick={onToggleModal}>Manage Orders</Link>
            <Link className="link" to={'/gig'} onClick={onToggleModal}>Explore</Link>
            {loggedUser && <Link className="link" onClick={() => {
                onLogout()
                onToggleModal()
            }} >Log out</Link>}
            <h6 className="divider">Browse categories</h6>
            {categories.map(c => <Link to={`/gig`} onClick={() => {
                onSetFilterBy(c.category)
                onToggleModal()
            }} className="link mini">{c.category}</Link>)}
        </aside>
    )
}