import { Link } from "react-router-dom"

export function CategoryNav({ categories, setFilterBy, globalFilterBy, subHeaderPosition }) {

    function onSetFilterBy(category) {
        setFilterBy({ ...globalFilterBy, tags: '', category })
    }

    return (
        <div className={`${subHeaderPosition} sub-header-container main-layout full animate__animated animate__flipInX`}>
            <nav className="category-header">
                <ul className="categories-container">
                    {categories.map(c => <Link to={'/gig'} key={c.category} onClick={() => { onSetFilterBy(c.category) }} className="category-link">{c.category}</Link>)}
                </ul>
            </nav>
        </div>

    )
}