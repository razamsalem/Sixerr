export function BigOrderPreview({ order }) {
    if (!order) return

    return (
        <article className="big-order-preview">
            <h1>Your order</h1>
            <img src={order.gig.imgUrls[0]} alt="gig-img" />
            <h2 className="gig-heading">{order.gig.title}</h2>
            <section className="order-details">
                <span className="seller">
                    <span>Seller</span>
                    <span className="name">{`${order.gig.owner.fullname}`}</span>
                </span>
                <span className="delivery">
                    <span>Estimated delivery</span>
                    <span className="estimated">{`${order.gig.daysToMake}`}</span>
                </span>
                <span className="price">
                    <span>Amount</span>
                    <span className="estimated">{`${order.gig.price}$`}</span>
                </span>
            </section>
        </article>
    )
}