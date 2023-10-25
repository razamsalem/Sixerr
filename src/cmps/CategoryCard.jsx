import { Link } from "react-router-dom";
import { setFilterBy } from "../store/actions/gig.actions"
import { useSelector } from "react-redux";

export function CategoryCard({ card }) {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    
  return (
    <Link to={`/gig?tags=${card.title}`} >
      <div className="catCard">
        <img src={card.img} alt={card.title} />
        <small className="desc">{card.desc}</small>
        <h4 className="title">{card.title}</h4>
      </div>
    </Link>
  );
}
