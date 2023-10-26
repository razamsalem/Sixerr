import { useNavigate } from "react-router";
import { utilService } from "../services/util.service";
import { LongTxt } from "./LongTxt";
import { gigService } from "../services/gig.service.local";
import { onRemoveGigOptimistic } from '../store/actions/gig.actions'

export function MyGigsTable({ gigs }) {
    const navigate = useNavigate()

    function onClickGig(gigId) {
        navigate(`/gig/${gigId}`)
    }

    function handleActionClick(event) {
        event.stopPropagation()
    }

    return (
        <table className="gigs-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Added</th>
                    <th>Price</th>
                    <th>Impressions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {gigs.map((gig, idx) => (
                    <tr key={idx} onClick={() => onClickGig(gig._id)} >
                        <td><img src={gig.imgUrls[0]} alt="Gig Image" /></td>
                        <td><LongTxt txt={gig.title} length={40} showReadMore={false} /></td>
                        <td><LongTxt txt={gig.description} length={55} showReadMore={false} /></td>
                        <td>{utilService.getRandomDate()}</td>
                        <td><i className="fa-solid fa-dollar-sign"></i>{gig.price}</td>
                        <td><i className="fa-regular fa-eye icon"></i>{utilService.getRandomIntInclusive(121, 7827).toLocaleString()}</td>
                        <td  onClick={handleActionClick}><i class="fa-solid fa-pen-to-square action"></i> <i class="fa-solid fa-trash action" onClick={() => onRemoveGigOptimistic(gig._id)}></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}