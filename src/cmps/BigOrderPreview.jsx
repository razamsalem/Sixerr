export function BigOrderPreview({ order }) {
    if (!order) return

    return (
        <article className="big-order-preview">
            <h1 className="preview-heading">Your order</h1>
            <img src={order.gig.imgUrls[0]} alt="gig-img" />
            <h2 className="gig-heading">{order.gig.title}</h2>
            <section className="order-details">
                <span className="detail-container seller">
                    <span className="title">Seller</span>
                    <span className="name">{`${order.gig.owner.fullname}`}</span>
                </span>
                <span className="detail-container delivery">
                    <span className="title">Estimated delivery</span>
                    <span className="estimated">{`${order.gig.daysToMake} Days`}</span>
                </span>
                <span className="detail-container price">
                    <span className="title">Amount</span>
                    <span className="estimated">{`${order.gig.price}$`}</span>
                </span>
            </section>
        </article>
    )
}