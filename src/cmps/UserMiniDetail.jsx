export function UserMiniDetail({ gig }) {
    return (
        <section className="user-mini-detail">
            <div className="owner-img-wrapper flex">
                <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-large" />
                <div className="owner-details mini">
                    <h3 className="gig-title">Taylor P</h3>
                    <div className="star-wrapper">
                        <span className="star-svg">
                            <img src="/src/assets/img/star.svg" alt="star-svg" className="star" />
                        </span>
                        <span className="owner-rate">5</span>
                        <span className="owner-number-rates">(137)</span>
                    </div>
                </div>
            </div>


            <div className="owner-description">
                <ul>
                    <li>
                        <span>From</span>
                        <span>Pakistan</span>
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

                <article>A young passionate with an incredible common sense and experience of designing the most fitting, branding, contemporary, opulence, unique, and minimal logo designs for any business. Due to designing being my passion, having you as a companion throughout the project, I am more than confident of my expertise, understanding, and communication skills, I am the best designer for you and I have successfully proved that in over 1000 professional projects. You are on the right page where Customer Satisfaction is the top priority and I starve for that! Sincerely, Zunairah!
                </article>
            </div>
        </section>
    )
}