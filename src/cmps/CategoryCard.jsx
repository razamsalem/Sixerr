import { Link } from "react-router-dom";
import { gigService } from "../services/gig.service";
const serviceCategories = gigService.getCategories()

export function CategoryCard({ card, globalFilterBy, setFilterBy }) {
// console.log(card);
  function replaceAmpersand(str) {
    if (str.includes('&')) {
      return str.replace(/&/g, '+%26+').replace(/\s/g, '')
    } else {
      return str
    }
  }
  
function getCategory(tag) {
    let category = serviceCategories.filter(cat => cat.tags.includes(tag))
    return replaceAmpersand(category[0].category);
}

  return (
    <Link to={`/gig?&category=${getCategory(card.title)}`} onClick={() => setFilterBy({ ...globalFilterBy, tags: [card.title] })} >
      <div className="catCard">
        <img src={card.img} alt={card.title} />
        <small className="desc">{card.desc}</small>
        <h4 className="title">{card.title}</h4>
      </div>
    </Link>
  );
}
