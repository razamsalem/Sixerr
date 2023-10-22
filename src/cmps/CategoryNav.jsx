import { Link } from "react-router-dom"

const categories = [
    "Graphics & Design",
    "Programming & Tech",
    "Digital Marketing",
    "Video & Animation",
    "Writing & Translation",
    "Music & Audio",
    "Business",
    "Data",
    "Photography"
]

export function CategoryNav({ isTransparentSubHeader, isStatic }) {

    return (
        <div className={`${isTransparentSubHeader ? 'transparent' : 'visisble'} ${isStatic ? 'static' : ''} sub-header-container main-layout full animate__animated animate__flipInX`}>
            <nav className="category-header">
                <ul className="categories-container">
                    {categories.map(c => <Link key={c} className="category-link">{c}</Link>)}
                </ul>
            </nav>
        </div>

    )
}