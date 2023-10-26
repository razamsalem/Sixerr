import { utilService } from "../services/util.service";
import { LongTxt } from "./LongTxt";

export function MyGigsTable({ gigs }) {

    return (
        <table className="gigs-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Impressions</th>
                    <th>Date Added</th>
                </tr>
            </thead>
            <tbody>
                {gigs.map((gig, idx) => (
                    <tr key={idx}>
                        <td><img src={gig.imgUrls[0]} alt="Gig Image" /></td>
                        <td><LongTxt txt={gig.title} length={40} showReadMore={false} /></td>
                        <td><LongTxt txt={gig.description} length={60} showReadMore={false} /></td>
                        <td>${gig.price}</td>
                        <td><i className="fa-regular fa-eye icon"></i>{utilService.getRandomIntInclusive(121, 7827).toLocaleString()}</td>
                        <td>{utilService.getRandomDate()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}