const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function BigOrderPreview({ order }) {
    if (!order) return
    console.log(order, "order")
    return (
        <article className="big-order-preview">
            <h1 className="preview-heading">Your order</h1>
            <img src={order.gig.imgUrls[0]} alt="gig-img" onError={e => e.currentTarget.src = imgNotFound} />
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