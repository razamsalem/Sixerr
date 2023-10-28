import { useEffect } from "react";
import { useState } from "react";
import { userService } from "../services/user.service";
import { display } from "@mui/system";
import LoadingCircle from "./LoadingCircle";

export function UserMiniDetail({ gig }) {
    const [seller,setSeller] = useState(null)

    useEffect(() => {
        loadUser()
    }, [gig.owner._id])

    async function loadUser() {
        try {
        const seller = await userService.getById(gig.owner._id)
        setSeller(seller)
        } catch (err) {
            console.log('Had issues in review list ->', err)
            showErrorMsg('Oops cannot load review')
            navigate('/')
        }
    }

    if (!seller) return <div className='loading'>{<LoadingCircle />}</div>

    return (
        <section className="user-mini-detail">
            <div className="owner-img-wrapper flex">
                <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-large" />
                <div className="owner-details mini">
                    <div>
                            <h3 className="gig-title">{gig.owner.fullname}</h3>
                            <span className="username">@{seller.username}</span>
                    </div>
                    <p className="user-desc-mini">Happy to work with you</p>
                    <div className="star-wrapper">
                        <span className="star-svg">
                            <img src="/src/assets/img/star-grey.svg" alt="star-svg" className="star" />
                        </span>
                        <span className="owner-rate">{gig.owner.rate}</span>
                        <span className="owner-number-rates">({seller.reviews.length})</span>
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
                        <span>{seller.location}</span>
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
                        <span>
                        {seller.lang.map((lan, idx )=><span key={idx} style={{display:'inline'}}>{lan} </span>)}
                        </span>
                    </li>
                </ul>

                <article>{seller.desc}</article>
            </div>
        </section>
    )
}