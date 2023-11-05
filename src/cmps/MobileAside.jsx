import { Link } from "react-router-dom"

export function MobileAside({ loggedUser, defaultUserImg, categories }) {
    console.log(loggedUser)
    return (
        <aside className="links-container">
            <div className="user-container">
                {loggedUser && <Link className="user" to={`/user/${loggedUser._id}`}>
                    <img src={loggedUser.imgUrl} onError={e => e.currentTarget.src = defaultUserImg} />
                    {loggedUser.fullname}
                </Link>}
                {!loggedUser &&
                    <div className="login-container">
                        <Link className="join">Join Sixerr</Link>
                    </div>
                }
            </div>
            {!loggedUser && <Link className="login link">Sign in</Link>}
            <h6 className="divider">My Profile</h6>
            <Link className="link" to={'/home'}>Home</Link>
            <Link className="link" to={'/order'}>Manage Orders</Link>
            <Link className="link" to={'/gig'}>Explore</Link>
            <Link className="link" to={'/gig'}>Log out</Link>
            <h6 className="divider">Browse categories</h6>
            {categories.map(c => <Link className="link mini">{c.category}</Link>)}
        </aside>
    )
}