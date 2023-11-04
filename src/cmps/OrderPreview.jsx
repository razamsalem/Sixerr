import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { DropdownBtn } from "./DropdownBtn.jsx"
import { Link } from "react-router-dom"
const defaultGigImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'
const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699048789/user-1_conuzo.png'

export function OrderPreview({ order, mode, openModal, onApproveOrder, onDeclineOrder, onFulfillOrder, selectedBtn, setSelectedBtn }) {
    const profile = mode === 'buyer' ? order.seller : order.buyer
    console.log(order);
    function checkStatus(status) {
        if (status === 'pending') return 'pending-label'
        if (status === 'approved') return 'approved-label'
        if (status === 'rejected') return 'rejected-label'
        if (status === 'fulfilled') return 'fulfilled-label'
    }

    function handleActionClick(event) {
        event.stopPropagation()
    }

    return (
        <tr key={order._id} onClick={() => openModal(order)}>
            <td>
                <div className="user-with-img">
                    <img src={profile.imgUrl} alt="Buyer img" onError={e => e.currentTarget.src = defaultUserImg} />
                    {profile.fullname}
                </div>
            </td>

            <td className='order-title'>
                <div className="gig-img flex">
                    {mode === 'buyer' && <img src={order.gig.imgUrls[0]} alt="gig image" onError={e => e.currentTarget.src = defaultGigImg} />}
                    <LongTxt txt={order.gig.title} length={29} showReadMore={false} />
                </div>
            </td>

            <td>{utilService.calculateDaysFromTimestamp(order.createdAt, order.daysToMake)}</td>
            <td>${order.packPrice}</td>
            <td onClick={handleActionClick} className="status">
                {order && <span className={`${checkStatus(order.status)} label `}> {order.status === 'approved' ? 'In progress' : utilService.capitalizeFirstLetter(order.status)} </span>}
                {mode === 'seller' && order.status !== 'fulfilled' && order.status !== 'rejected' &&
                    <DropdownBtn selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}>
                        <span className="action approve-gig" onClick={(ev) => { onApproveOrder(ev, order) }}>Approve order</span>
                        <span className="action decline-gig" onClick={(ev) => { onDeclineOrder(ev, order) }}>Decline order</span>
                        <span className="action fulfilled-gig" onClick={(ev) => { onFulfillOrder(ev, order) }}>Mark as fulfilled</span>
                    </DropdownBtn >}

                {mode === 'buyer' && order.status === 'fulfilled' &&
                    <DropdownBtn selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}>
                        <span> <Link to={`/order/review?orderId=${order._id}`}>Review</Link> </span>
                        <span>  </span>
                    </DropdownBtn>
                }

            </td>
        </tr>
    )
}