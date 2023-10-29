import home from '../assets/img/home.svg'
import { Link, useNavigate } from 'react-router-dom'
import { setFilterBy } from "../store/actions/gig.actions"

export function BreadCrumbs({ category }) {
    const navigate = useNavigate()

    function goToCategory() {
        setFilterBy({ category })
        // navigate('/gig')
    }

    return (
        <article className='bread-crumbs'>
            <Link to={'/home'} className='home'>
                <img className='home-icon' src={home} alt="Home" title='Go to homepage' />
            </Link>
            <span className='divider'>/</span>
            <Link to={`/gig`} onClick={goToCategory} title={`${category} Category`}>
                {category}
            </Link>
        </article>
    )
}