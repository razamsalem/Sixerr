import home from '../assets/img/home.svg'
import { Link, useNavigate } from 'react-router-dom'
import { getClearFilter, setFilterBy } from "../store/actions/gig.actions"

export function BreadCrumbs({ category }) {
    const navigate = useNavigate()

    function goToCategory() {
        if (category) setFilterBy({ category })
        else setFilterBy(getClearFilter())
    }

    return (
        <article className='bread-crumbs'>
            <Link to={'/home'} className='home'>
                <img className='home-icon' src={home} onClick={() => { setFilterBy(getClearFilter()) }} alt="Home" title='Go to homepage' />
            </Link>
            <span className='divider'>/</span>
            <Link to={`/gig`} onClick={goToCategory} title={`${category || 'Explore page'} Category`}>
                {category || 'Explore page'}
            </Link>
        </article>
    )
}