import { useNavigate } from "react-router";
import { utilService } from "../services/util.service";
import { LongTxt } from "./LongTxt";
import { gigService } from "../services/gig.service.local";
import { onRemoveGigOptimistic } from '../store/actions/gig.actions'
const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function MyGigsTable({ gigs }) {
    const defaultImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698161431/sixxer-logo_vseimk.png'
    const navigate = useNavigate()

    function onClickGig(gigId) {
        navigate(`/gig/${gigId}`)
    }

    function onEditGig(gigId) {
        navigate(`/gig/add/${gigId}`)
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
                        <td><img src={gig.imgUrls[0] || defaultImg} alt="Gig Image" onError={e => e.currentTarget.src = imgNotFound} /></td>
                        <td><LongTxt txt={gig.title} length={35} showReadMore={false} /></td>
                        <td><LongTxt txt={gig.description} length={45} showReadMore={false} /></td>
                        <td>{utilService.getRandomDate()}</td>
                        <td><i className="fa-solid fa-dollar-sign"></i>{(`${gig.packages['basic'].packPrice}` > 1) ? `${gig.packages['basic'].packPrice}` : gig.price}</td>
                        <td><i className="fa-regular fa-eye icon"></i>{utilService.getRandomIntInclusive(121, 7827).toLocaleString()}</td>
                        <td onClick={handleActionClick}><i className="fa-solid fa-pen-to-square action" onClick={() => onEditGig(gig._id)}></i> <i className="fa-solid fa-trash action" onClick={() => onRemoveGigOptimistic(gig._id)}></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}