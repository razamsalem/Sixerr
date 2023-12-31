const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function BigOrderPreview({ order }) {
    if (!order) return

    return (
        <article className="big-order-preview">
            <h2 className="preview-heading">Your order</h2>
            <img src={order.gig.imgUrls && order.gig.imgUrls[0] || imgNotFound} alt="gig-img" onError={e => e.currentTarget.src = imgNotFound} />

            <h2 className="gig-heading">{order.gig.title}</h2>
            <section className="order-details">
                <span className="detail-container seller">
                    <span className="title">Seller</span>
                    <span className="name">{`${order.seller.fullname}`}</span>
                </span>
                <span className="detail-container delivery">
                    <span className="title">Estimated delivery</span>
                    <span className="estimated">{`${order.daysToMake} Days`}</span>
                </span>
                <span className="detail-container price">
                    <span className="title">Amount</span>
                    <span className="estimated">{`${order.packPrice}$`}</span>
                </span>
            </section>
        </article>
    )
}