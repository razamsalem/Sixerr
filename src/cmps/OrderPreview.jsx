import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"

export function OrderPreview({ order, mode }) {
    const profile = mode === 'buyer' ? order.seller : order.buyer

    return (
        <tr key={order._id}>
            <td>

                <div className="user-with-img">
                    <img src={profile.imgUrl} alt="Buyer img" />
                    {profile.fullname}
                </div>

            </td>
            <td className='order-title'><LongTxt txt={order.gig.title} length={40} showReadMore={false} /></td>
            <td>Thu Aug 04 2022</td>
            <td>${order.gig.price}</td>
            <td>{order && utilService.capitalizeFirstLetter(order.status)}</td>
        </tr>
    )
}