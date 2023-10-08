import { useSelector } from "react-redux"
import { OrderList } from "../cmps/OrderList"

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)
    return (
        <section className="orders-page">
            <h1>My orders</h1>
            {orders.length && <OrderList orders={orders} mode={'buyer'} />}
        </section>
    )
}