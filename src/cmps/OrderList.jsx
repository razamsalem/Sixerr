import { useSelector } from "react-redux"
import { OrderPreview } from "./OrderPreview"
import { Link } from "react-router-dom"

export function OrderList({ orders, loggedUser, mode }) {

    if (!orders.length || !loggedUser) return (
        <Link to={'/gig'} className="logo">
            No orders yet <span className="dot">{', '}</span> <br /> click to start exploring sixerr<span className="dot">.</span>
        </Link>
    )

    if (mode === 'buyer') {
        orders = orders.filter(order => order.buyer._id === loggedUser._id)
    } else {
        orders = orders.filter(order => order.seller._id === loggedUser._id)
    }

    return (
        <>
            {orders.length && <table className="order-list">
                <thead>
                    <tr>
                        {mode === 'buyer' ? <td>Seller</td> : <td>Buyer</td>}
                        <td>Gig</td>
                        <td>Due on</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                </thead>

                {
                    <tbody>
                        {orders.map(order => (
                            <OrderPreview key={order._id} order={order} mode={mode} />
                        ))}
                    </tbody>}

            </table>}
        </>

    )
}