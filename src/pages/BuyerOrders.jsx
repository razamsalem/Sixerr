import { useSelector } from "react-redux";
import emptyTray from "../assets/img/empty-tray.svg"
import { OrderCard } from "../cmps/OrderCard";
import { OrderModal } from "../cmps/OrderModal";
import { useState } from "react";
import { OrderList } from "../cmps/OrderList";
import LoadingCircle from "../cmps/LoadingCircle";
import { useNavigate } from "react-router";
import { DropdownBtn } from "../cmps/DropdownBtn";

export function BuyerOrders() {
    const [isModalOpen, setModalOpen] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [isTableDisplay, setTableDisplay] = useState(false)
    const [selectedBtn, setSelectedBtn] = useState(null)
    const [selectedSort, setSelectedSort] = useState(true)
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    let orders = useSelector(storeState => storeState.orderModule.orders)
    orders = orders.filter(order => order.buyer._id === loggedUser._id)
    const sortNew = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const sortOld = [...orders].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    const sortedOrders = selectedSort ? sortNew : sortOld

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

    function navigateToExplore() {
        navigate('/gig')
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
                            <div className="btns-container">
                                <label className='sort-container'>
                                    <DropdownBtn icon={<i class="sort-btn fa-solid fa-filter"></i>} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}>
                                        <span data-value={'newest'} onClick={() => setSelectedSort(true)}>Newest</span>
                                        <span data-value={'oldest'} onClick={() => setSelectedSort(false)}>Oldest</span>
                                    </DropdownBtn>
                                </label>
                                <button className={`${!isTableDisplay ? 'active' : ''}`} onClick={hideTable}><i className="fa-solid fa-grip"></i></button>
                                <button onClick={showTable}><i className="fa-solid fa-table"></i></button>
                            </div>
                        </div>
                        {!orders.length && <div className="no-orders-msg">
                            <img src={emptyTray} alt="No order icon" /> <br />
                            No orders yet <span className="dot">{','}</span> <br /> <span className="click" onClick={navigateToExplore}>Click to find services on sixerr</span><span className="dot">.</span>
                        </div>}

                        <section className="orders-layout">
                            {sortedOrders.map((order, idx) => (
                                <OrderCard key={idx} order={order} loggedUser={loggedUser} openModal={openOrderModal} />
                            ))}
                        </section>
                    </div>}

                {isTableDisplay &&
                    <>
                        <div className="main-layout">
                            <div className="user-orders ">
                                <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                                <div className="btns-container">
                                    <label className='sort-container'>
                                        <DropdownBtn icon={<i class="sort-btn fa-solid fa-filter"></i>} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}>
                                            <span data-value={'newest'} onClick={() => setSelectedSort(true)}>Newest</span>
                                            <span data-value={'oldest'} onClick={() => setSelectedSort(false)}>Oldest</span>
                                        </DropdownBtn>
                                    </label>
                                    <button onClick={hideTable}><i className="fa-solid fa-grip"></i></button>
                                    <button className={`${isTableDisplay ? 'active' : ''}`} onClick={showTable}><i className="fa-solid fa-table"></i></button>
                                </div>
                            </div>
                            <OrderList orders={sortedOrders} openModal={openOrderModal} loggedUser={loggedUser} mode={'buyer'} />
                        </div>
                    </>
                }
            </section>
        </>
    )
}