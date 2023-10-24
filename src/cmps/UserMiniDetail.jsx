export function UserMiniDetail({ gig }) {
    return (
        <section className="user-mini-detail">
            <div className="owner-img-wrapper flex">
                <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-large" />
                <div className="owner-details mini">
                    <h3 className="gig-title">{gig.owner.fullname}</h3>
                    <div className="star-wrapper">
                        <span className="star-svg">
                            <img src="/src/assets/img/star.svg" alt="star-svg" className="star" />
                        </span>
                        <span className="owner-rate">5</span>
                        <span className="owner-number-rates">(137)</span>
                    </div>
                </div>
            </div>

            <button className="contact-me">
                Contact me
            </button>

            <div className="owner-description">
                <ul>
                    <li>
                        <span>From</span>
                        <span>{gig.owner.location}</span>
                    </li>
                    <li>
                        <span>Member since</span>
                        <span>Oct 2012</span>
                    </li>
                    <li>
                        <span>Avg. response time</span>
                        <span>5 hours</span>
                    </li>
                    <li>
                        <span>Last delivery</span>
                        <span>about 1 hour</span>
                    </li>
                    <li>
                        <span>Languages</span>
                        <span>English</span>
                    </li>
                </ul>

                <article>{gig.owner.description}
                </article>
            </div>
        </section>
    )
}