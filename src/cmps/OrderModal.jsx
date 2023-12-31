import { useNavigate } from "react-router"
import { utilService } from "../services/util.service"

export function OrderModal({ order, userSeller, closeModal, handleBackgroundClick }) {
    const { buyer, seller, gig, title, packPrice, daysToMake, status, createdAt, _id } = order
    const navigate = useNavigate()

    function navigateToBuyer() {
        navigate(`/user/${buyer._id}`)
        closeModal()
    }

    function navigateToSeller() {
        navigate(`/user/${seller._id}`)
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
                                {userSeller ? <>
                                    <img src={buyer.imgUrl} alt="Buyer picture" onClick={navigateToBuyer} />
                                    <h4 onClick={navigateToBuyer} className="underline" >{buyer.username}</h4>
                                    <p>ordered the <span className="bold">{title}</span> package from you for <span className="bold">${packPrice}</span></p>
                                </>
                                    :
                                    <>
                                        <img src={seller.imgUrl} alt="Seller picture" onClick={navigateToSeller} />
                                        <p className="msg">You ordered the <span className="bold">{title}</span> package from <span className="underline bold" onClick={navigateToSeller}>{seller.fullname}</span> for <span className="bold">${packPrice}</span></p>
                                    </>

                                }
                            </div>
                            <div className="contact-buyer flex">
                                {userSeller ?
                                    <button onClick={navigateToBuyer}>Contact {buyer.username}</button>
                                    : <button onClick={navigateToSeller}>Contact {seller.fullname}</button>
                                }
                            </div>

                            <div className="order info with-border-top" >
                                <h4 className="top">Order Information</h4>
                                <ul>
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
                                    <li>
                                        <span>Order ID</span>
                                        <span>#{_id}</span>
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
