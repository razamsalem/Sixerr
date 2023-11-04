import { useSelector } from "react-redux";
import { OrderCard } from "../cmps/OrderCard";

export function BuyerOrders() {
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    let orders = useSelector(storeState => storeState.orderModule.orders)
    orders = orders.filter(order => order.buyer._id === loggedUser._id)

    console.log(orders)
    return (
        <section className="buyer-orders-container full">
            <div className="buyer-orders main-layout">
                <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                <section className="orders-layout">
                {orders.map(order => (
                    <OrderCard order={order} loggedUser={loggedUser} />
                    ))}
                    </section>
            </div>
        </section>
    )
}