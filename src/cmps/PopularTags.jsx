import { Link } from "react-router-dom"
import { gigService } from "../services/gig.service"
const serviceCategories = gigService.getCategories()

export function PopularTags({ globalFilterBy, setFilterBy }) {
    const tags = ['Website Design', 'Wordpress', 'Logo Design', 'AI Services']

    function replaceAmpersand(str) {
        if (typeof str === 'string') {
          return str.replace(/&/g, '+%26+').replace(/\s/g, '');
        } else {
          // Handle non-string input (optional)
          console.error('Input is not a string.');
          return str;
        }
      }
      
    function getCategory(tag) {
        let category = serviceCategories.filter(cat => cat.tags.includes(tag))
        return replaceAmpersand(category[0].category);
    }

    return (
        <div className="popular">
            Popular:
            <ul>
                {tags.map(tag => <li key={tag}><Link to={`/gig?&category=${getCategory(tag)}`} className="btn" onClick={() => setFilterBy({ ...globalFilterBy, tags: [tag] })}>{tag}</Link></li>)}
            </ul>
        </div>
    )
}