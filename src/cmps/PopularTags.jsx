import { Link } from "react-router-dom"
import { gigService } from "../services/gig.service.local"

export function PopularTags({ globalFilterBy, setFilterBy }) {
    const tags = ['Website Design', 'Wordpress', 'Logo Design', 'AI Services']
    const categories = {'Website Design':'Graphics+%26+Design','Wordpress':'Programming+%26+Tech','Logo Design':'Graphics+%26+Design','AI Services':'Programming+%26+Tech'}
    return (
        <div className="popular">
            Popular:
            <ul>
                {tags.map(tag => <li key={tag}><Link to={`/gig?&category=${categories[tag]}`}  className="btn" onClick={()=>setFilterBy({...globalFilterBy,tags:[tag]})}>{tag}</Link></li>)}
            </ul>
        </div>
    )
}