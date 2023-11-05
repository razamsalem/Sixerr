import { useSelector } from "react-redux"
import { OrderList } from "../cmps/OrderList"
import { useEffect, useState } from "react"
import { OrderModal } from "../cmps/OrderModal"

export function OrderIndex() {
    const [isModalOpen, setModalOpen] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const loggedUser = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    async function openOrderModal(order) {
        setModalOpen(true)
        setSelectedOrder(order)
    }

    async function closeModal() {
        setModalOpen(false)
    }

    function handleBackgroundClick(ev) {
        if (ev.target.classList.contains("modal-background")) {
            setModalOpen(false)
        }
    }



    return (
        <>
            {isModalOpen && (
                <OrderModal order={selectedOrder} userSeller={false} closeModal={closeModal} handleBackgroundClick={handleBackgroundClick} />
            )}
            <section className="orders-page main-layout full">
                {/* {console.log(orders)} */}
                {<OrderList orders={orders} openModal={openOrderModal} loggedUser={loggedUser} mode={'buyer'} />}
            </section>
        </>
    )
}