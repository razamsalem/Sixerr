export function OrderModal({ order, handleBackgroundClick }) {
    console.log(order)
    const { buyer, seller, gig, title, packPrice, daysToMake, status, createdAt, _id } = order

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
                                <img src={buyer.imgUrl} alt="Buyer picture" />
                                <h4>{buyer.username}</h4>
                                <p>ordered the {title} package from you</p>
                            </div>
                        </main>
                    </div>
                )}
            </div>
        </section>
    )
}
