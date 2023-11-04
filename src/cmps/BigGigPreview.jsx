const defaultImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function BigGigPreview({ gig }) {

    return (
        <article className="big-gig-preview">
            <h1 className="preview-heading">
                <i className="fa-regular fa-eye eye-icon" />
            </h1>
            <img src={gig.imgUrls.length ? gig.imgUrls[0] : defaultImg} alt="gig-img" />

            <h2 className={`gig-heading ${!gig.title || gig.title === 'I will ' ? 'placeholder' : ''}`}>
                {!gig.title || gig.title === 'I will ' ? 'I will provide an exceptional service at the field of my expertise' : gig.title}
            </h2>


            <section className="gig-preview-details">
                <h3 className={`description ${!gig.description ? 'placeholder' : ''}`}>
                    {gig.description || 'Including support around the clock, and real-time updates about progress.'}
                </h3>
                <span className={`tags ${!gig.tags.length ? 'placeholder' : ''}`}>
                    {gig.tags.length ? gig.tags.join(', ') : 'Categories of the provided service will be shown here'}
                </span>
                {gig.daysToMake && <span className="detail-container delivery">
                    <span className="estimated"> <i className="fa-solid fa-dolly"></i> {`${gig.packages['basic'].packDaysToMake} Day${gig.packages['basic'].packDaysToMake > 1 ? 's' : ''}`}</span>
                    {`${gig.packages['basic'].packPrice}` > 0 && <h4 className="gig-price">From <span className="approved">${`${gig.packages['basic'].packPrice}`}</span></h4>}

                </span>}
            </section>
        </article>
    )
}
