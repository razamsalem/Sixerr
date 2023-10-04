import { Link } from "react-router-dom"

export function GigPreview({ gig, onRemoveGig, onUpdateGig }) {
    const defaultImgUrl = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696229330/no-image-symbol-missing-available-icon-gallery-vector-47533708_yv5p2x.jpg'


    return (

        <li className="gig-preview" key={gig._id}>
            
            <div>
            <img className="gig-img" src={gig.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig-img" />

            {/* <a href={gig.imgUrls ? gig.imgUrls[0] : defaultImgUrl} />  */}
            </div>
        
            <div className="flex owner-details">
            <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3e69825348268689975368374cd57bbb-1611383243667/c28fdd4b-d5c7-4035-8379-862ac10d67fd.png" alt="progile-img" className="owner-profile-img"/>
            <span className="owner-fullname">{gig.owner.fullname}</span>
            </div>

            <Link className="details-btn" to={`/gig/${gig._id}`}> <h3 className="owner-gig-title">{gig.title}</h3></Link>

            <div className="rating-price flex">
                <span className="star-svg">
                <img src="src/assets/img/star.svg" alt="star-svg"/>
                </span>
                <span className="owner-rate">{gig.owner.rate}</span>
                <span className="owner-number-rates">(137)</span>
            </div>
            <span className="gig-price">From ${gig.price.toLocaleString()}</span>
            {/* <p>Price: <span>${gig.price.toLocaleString()}</span></p> */}
            {/* <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p> */}
            {/* {shouldShowActionBtns(gig) && <div>
                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                <button onClick={() => { onUpdateGig(gig) }}>Edit</button> */}
            {/* </div>} */}
           
            {/* <div>
                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                <button onClick={() => { onUpdateGig(gig) }}>Edit</button>
            </div> */}

            {/* <button onClick={() => { onAddGigMsg(gig) }}>Add gig msg</button> */}
        </li>

    )
}