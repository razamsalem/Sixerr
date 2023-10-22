import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { DropdownBtn } from "./DropdownBtn.jsx"

export function OrderPreview({ order, mode, onApproveOrder, onDeclineOrder, onFulfillOrder }) {
    const profile = mode === 'buyer' ? order.seller : order.buyer

    function checkStatus(status) {
        if (status === 'pending') return 'pending'
        if (status === 'approved') return 'approved'
        if (status === 'rejected') return 'rejected'
        if (status === 'fulfilled') return 'fulfilled'
    }

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
            <td className="status">
                {order && <span className={checkStatus(order.status)}> {utilService.capitalizeFirstLetter(order.status)} </span>}
                {mode === 'seller' &&
                    <DropdownBtn>
                        <span className="action approve-gig" onClick={(ev) => { onApproveOrder(ev, order) }}>Approve</span>
                        <span className="action decline-gig" onClick={(ev) => { onDeclineOrder(ev, order) }}>Decline</span>
                        <span className="action fulfilled-gig" onClick={(ev) => { onFulfillOrder(ev, order) }}>Mark as fulfilled</span>
                    </DropdownBtn>}

            </td>
        </tr>
    )
}