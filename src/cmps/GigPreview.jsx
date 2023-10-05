import { Link } from "react-router-dom"

export function GigPreview({ gig, onRemoveGig, onUpdateGig }) {
    const defaultImgUrl = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696229330/no-image-symbol-missing-available-icon-gallery-vector-47533708_yv5p2x.jpg'


    return (

        <li className="gig-preview" key={gig._id}>

            <div>
                <Link to={`/gig/${gig._id}`}>
                    <img className="gig-img" src={gig.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig-img" />
                </Link>
            </div>

            <div className="flex owner-details">
                {/* {console.log(gig)} */}
                <div className="flex owner-details-1">
                    <img src={gig.owner.imgUrl} alt="progile-img" className="owner-profile-img" />
                    <span className="owner-fullname">{gig.owner.fullname}</span>
                </div>

                <div className="rating-price ">
                    <Link to={`/gig/${gig._id}`}> <h3 className="owner-gig-title">{gig.title}</h3></Link>
                </div>

                <div className="flex rate-wrapper">
                    <span className="star-svg">
                        <img src="src/assets/img/star.svg" alt="star-svg" className="star" />
                    </span>
                    <span className="owner-rate">{gig.owner.rate}</span>
                    <span className="owner-number-rates">(137)</span>
                </div>

            </div>


            <span className="gig-price">From ${gig.price.toLocaleString()}</span>
        </li>

    )
}