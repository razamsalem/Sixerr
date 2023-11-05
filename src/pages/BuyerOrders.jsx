import { useDispatch, useSelector } from "react-redux";
import { OrderCard } from "../cmps/OrderCard";
import { OrderModal } from "../cmps/OrderModal";
import { useEffect, useState } from "react";
import { OrderList } from "../cmps/OrderList";
import { socketService } from "../services/socket.service";
import { getActionUpdateOrder } from "../store/actions/order.actions";
import { showSuccessMsg } from "../services/event-bus.service";
import LoadingCircle from "../cmps/LoadingCircle";

export function BuyerOrders() {
    const [isModalOpen, setModalOpen] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [isTableDisplay, setTableDisplay] = useState(false)
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    let orders = useSelector(storeState => storeState.orderModule.orders)
    orders = orders.filter(order => order.buyer._id === loggedUser._id)

    async function showTable() {
        setTableDisplay(true)
    }

    async function hideTable() {
        setTableDisplay(false)
    }

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
    if (!orders) return <div className='loading'>{<LoadingCircle />}</div>
    return (
        <>
            <section className="buyer-orders-container full">
                {isModalOpen && (
                    <OrderModal order={selectedOrder} userSeller={false} closeModal={closeModal} handleBackgroundClick={handleBackgroundClick} />
                )}
                {!isTableDisplay &&
                    <div className="buyer-orders main-layout">
                        <div className="user-orders ">
                            <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                            <div>
                                <button className={`${!isTableDisplay ? 'active' : ''}`} onClick={hideTable}><i className="fa-solid fa-grip"></i></button>
                                <button onClick={showTable}><i className="fa-solid fa-table"></i></button>
                            </div>
                        </div>
                        {!orders.length && <span>
                            No orders yet <span className="dot">{','}</span> <br /> Click to find services on sixerr<span className="dot">.</span>
                        </span>}

                        <section className="orders-layout">
                            {orders.map(order => (
                                <OrderCard order={order} loggedUser={loggedUser} openModal={openOrderModal} />
                            ))}
                        </section>
                    </div>}

                {isTableDisplay &&
                    <>
                        <div className="main-layout">
                            <div className="user-orders ">
                                <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                                <div>
                                    <button onClick={hideTable}><i className="fa-solid fa-grip"></i></button>
                                    <button className={`${isTableDisplay ? 'active' : ''}`} onClick={showTable}><i className="fa-solid fa-table"></i></button>
                                </div>
                            </div>
                            <OrderList orders={orders} openModal={openOrderModal} loggedUser={loggedUser} mode={'buyer'} />
                        </div>
                    </>
                }
            </section>
        </>
    )
}