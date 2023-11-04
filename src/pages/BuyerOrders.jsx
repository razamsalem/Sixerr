import { useSelector } from "react-redux";
import { OrderCard } from "../cmps/OrderCard";
import { OrderModal } from "../cmps/OrderModal";
import { useState } from "react";

export function BuyerOrders() {
    const [isModalOpen, setModalOpen] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    let orders = useSelector(storeState => storeState.orderModule.orders)
    orders = orders.filter(order => order.buyer._id === loggedUser._id)

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

            <section className="buyer-orders-container full">
                <div className="buyer-orders main-layout">
                    <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                    <section className="orders-layout">
                        {orders.map(order => (
                            <OrderCard order={order} loggedUser={loggedUser} openModal={openOrderModal} />
                        ))}
                    </section>
                </div>
            </section>
        </>
    )
}