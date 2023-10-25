import { Link } from "react-router-dom"

export function PopularTags({ globalFilterBy, setFilterBy }) {
    const tags = ['Website Design', 'Wordpress', 'Logo Design', 'AI Services']

    return (
        <div className="popular">
            Popular:
            <ul>
                {tags.map(tag => <li key={tag}><Link to={`/gig?tags=${tag}`}  className="btn">{tag}</Link></li>)}
            </ul>
        </div>
    )
}