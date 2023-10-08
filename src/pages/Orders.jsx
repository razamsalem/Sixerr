import { useSelector } from "react-redux"

export function Orders() {
    const orders = useSelector(storeState => storeState.orderModule.orders)

    return (
        <section className="orders-page">
            <h1>My orders</h1>
        </section>
    )
}