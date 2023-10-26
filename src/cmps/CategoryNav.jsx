import { useRef, useState } from "react"
import { Link } from "react-router-dom"

export function CategoryNav({ categories, setFilterBy, globalFilterBy, subHeaderPosition }) {
    const firstChild = useRef()
    const [marginLeft, setMarginLeft] = useState(0)

    if (firstChild.current) console.dir(firstChild.current.style)

    function onSetFilterBy(category) {
        setFilterBy({ ...globalFilterBy, tags: '', category })
    }

    function onSlideRight() {
        setMarginLeft(margin => margin - 25)
    }

    function onSlideLeft() {
        setMarginLeft(margin => margin + 25)
    }

    return (
        <div className={`${subHeaderPosition} sub-header-container main-layout full animate__animated animate__flipInX`}>
            <nav className="category-header">
                <button className="nav-btn left" onClick={onSlideLeft}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <ul className="categories-container">
                    {categories.map(c => {
                        const isFirstChild = c.category === categories[0].category
                        return <Link style={isFirstChild ? { 'marginLeft': `${marginLeft}%` } : {}} ref={isFirstChild ? firstChild : null} to={'/gig'} key={c.category} onClick={() => { onSetFilterBy(c.category) }} className={`category-link ${globalFilterBy.category === c.category ? 'selected' : ''}`}>{c.category}</Link>
                    })}
                </ul>
                <button className="nav-btn right" onClick={onSlideRight}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button >
            </nav>
        </div >

    )
}