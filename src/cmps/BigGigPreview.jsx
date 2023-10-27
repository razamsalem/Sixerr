export function BigGigPreview({ gig }) {
    const defaultImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698161431/sixxer-logo_vseimk.png'

    return (
        <article className="big-gig-preview">
            <h1 className="preview-heading">Create gig</h1>
            <img src={gig.imgUrls.length ? gig.imgUrls[0] : defaultImg} alt="gig-img" />
            <h2 className="gig-heading">{gig.title}</h2>
            <section className="gig-preview-details">
                <h3 className="description">
                    {gig.description}
                </h3>

                {gig.daysToMake && <span className="detail-container delivery">
                    <span className="title"> Estimated delivery </span>
                    <span className="estimated"> <i className="fa-solid fa-dolly"></i> {`${gig.packages['basic'].packDaysToMake} Day${gig.packages['basic'].packDaysToMake > 1 ? 's' : ''}`}</span>
                </span>}
                <span>
                    {gig.tags.join(', ')}
                </span>
                {gig.price > 0 && <h4 className="bigger">From <span className="approved">${`${gig.packages['basic'].packPrice}`}</span></h4>}
            </section>
        </article>
    )
}
