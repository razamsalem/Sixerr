import { useSelector } from "react-redux"
import { OrderList } from "../cmps/OrderList"

export function OrderIndex() {
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const loggedUser = useSelector(storeState => storeState.userModule.user)

    return (
        <section className="orders-page main-layout full">
            {/* {console.log(orders)} */}
            {<OrderList orders={orders} loggedUser={loggedUser} mode={'buyer'} />}
        </section>
    )
}