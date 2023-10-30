import { useNavigate } from "react-router"
import { utilService } from "../services/util.service"

export function OrderModal({ order, closeModal, handleBackgroundClick }) {
    const { buyer, seller, gig, title, packPrice, daysToMake, status, createdAt, _id } = order
    const navigate = useNavigate()

    function navigateToUser() {
        navigate(`/user/${buyer._id}`)
        closeModal()
    }

    return (
        <section className="modal-background" onClick={handleBackgroundClick}>
            <div>
                {(
                    <div className="order-modal">
                        <div className="header flex">
                            <h3>Order Details</h3>
                        </div>

                        <main className="content">
                            <div className="mini-user flex">
                                <img src={buyer.imgUrl} alt="Buyer picture" onClick={navigateToUser} />
                                <h4 onClick={navigateToUser} >{buyer.username}</h4>
                                <p>ordered the <span className="bold">{title}</span> package from you for <span className="bold">${packPrice}</span></p>
                            </div>
                            <div className="contact-buyer flex">
                                <button onClick={navigateToUser}>Contact {buyer.username}</button>
                            </div>

                            <div className="order info with-border-top" >
                                <h4 className="top">Order Information</h4>
                                <ul>
                                    <li>
                                        <span>Order ID</span>
                                        <span>#{_id}</span>
                                    </li>
                                    <li>
                                        <span>Due on</span>
                                        <span>{utilService.calculateDaysFromTimestamp(createdAt, daysToMake)}</span>
                                    </li>
                                    <li>
                                        <span>Delivery Time</span>
                                        <span>{daysToMake} days</span>
                                    </li>
                                    <li>
                                        <span>Status</span>
                                        <span>{status}</span>
                                    </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                )}
            </div>
        </section>
    )
}
