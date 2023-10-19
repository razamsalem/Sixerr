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

export function CategoryNav({ isTransparentSubHeader }) {

    return (
        <div className={`${isTransparentSubHeader ? 'transparent' : 'visisble'} sub-header-container main-layout full`}>
            <nav className="category-header">
                <ul className="categories-container">
                    {categories.map(c => <Link key={c} className="category-link">{c}</Link>)}
                </ul>
            </nav>
        </div>

    )
}