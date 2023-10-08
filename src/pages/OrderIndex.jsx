import { useSelector } from "react-redux"
import { OrderList } from "../cmps/OrderList"

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)
    return (
        <section className="orders-page main-layout full">
            <h1 className="orders-heading">Purchased orders<span className="dot">.</span></h1>
            {orders.length && <OrderList orders={orders} mode={'buyer'} />}
        </section>
    )
}