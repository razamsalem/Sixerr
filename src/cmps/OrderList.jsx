import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"

export function OrderList({ orders }) {
    console.log(orders, 'Order list')

    return (
        <>
            {orders.length && <table>
                <thead>
                    <tr>
                        <td>Buyer</td>
                        <td>Gig</td>
                        <td>Due on</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                </thead>

                {
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>
                                    <div className="user-with-img">
                                        <img src={order.buyer.imgUrl} alt="Buyer img" />
                                        {order.buyer.fullname}
                                    </div>
                                </td>
                                <td className='order-title'><LongTxt txt={order.gig.title} length={40} showReadMore={false} /></td>
                                <td>Thu Aug 04 2022</td>
                                <td>${order.gig.price}</td>
                                <td>{utilService.capitalizeFirstLetter(order.status)}</td>
                            </tr>
                        ))}
                    </tbody>}

            </table>}
        </>

    )
}