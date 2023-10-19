import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { DropdownBtn } from "./DropdownBtn.jsx"

export function OrderPreview({ order, mode, onApproveOrder, onDeclineOrder, onFulfillOrder }) {
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
            <td>
                {order && utilService.capitalizeFirstLetter(order.status)}
                {mode === 'seller' &&
                    <DropdownBtn icon={'V'}>
                        <span onClick={(ev) => { onApproveOrder(ev, order) }}>Approve</span>
                        <span onClick={(ev) => { onDeclineOrder(ev, order) }}>Decline</span>
                        <span onClick={(ev) => { onFulfillOrder(ev, order) }}>Mark as fulfilled</span>
                    </DropdownBtn>}

            </td>
        </tr>
    )
}