import { Link } from "react-router-dom"

export function GigPreview({ gig, onRemoveGig, onUpdateGig }) {
    const defaultImgUrl = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696229330/no-image-symbol-missing-available-icon-gallery-vector-47533708_yv5p2x.jpg'


    return (

        <li className="gig-preview" key={gig._id}>
            <h4>{gig?.title}</h4>
            <img className="toy-img" src={gig?.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig img" />  
            <p>Price: <span>${gig.price.toLocaleString()}</span></p>
            {/* <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p> */}
            {/* {shouldShowActionBtns(gig) && <div>
                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                <button onClick={() => { onUpdateGig(gig) }}>Edit</button> */}
            {/* </div>} */}
            <Link className="details-btn" to={`/gig/${gig._id}`}>See More</Link>
            <div>
                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                <button onClick={() => { onUpdateGig(gig) }}>Edit</button>
            </div>

            {/* <button onClick={() => { onAddGigMsg(gig) }}>Add gig msg</button> */}
        </li>

    )
}