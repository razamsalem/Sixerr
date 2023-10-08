import { useSelector } from "react-redux"
import { OrderList } from "../cmps/OrderList"

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const loggedUser = useSelector(storeState => storeState.userModule.user)

    return (
        <section className="orders-page main-layout full">
            {orders.length > 0 && <h1 className="orders-heading">{loggedUser ? 'Purchased services' : 'Log in to view your orders'}<span className="dot">.</span></h1>}
            {<OrderList orders={orders} loggedUser={loggedUser} mode={'buyer'} />}
        </section>
    )
}