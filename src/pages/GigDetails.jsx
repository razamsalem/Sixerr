import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { gigService } from "../services/gig.service.local"

export function GigDetails() {
    const user = useSelector((storeState) => storeState.userModule.loggedinUser)
    // const [reviews, setReviews] = useState(null)
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const navigate = useNavigate()
    const defaultImgUrl = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696229330/no-image-symbol-missing-available-icon-gallery-vector-47533708_yv5p2x.jpg'
    
    useEffect(() => {
        onLoadGig()
        // onLoadReviews()

    }, [gigId])

    async function onLoadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setGig(desiredGig)
        } catch (err) {
            console.log('Had issues in gig details ->', err)
            showErrorMsg('Oops cannot load gig')
            navigate('/')
        }
    }

    if (!gig) return <div>Loading...</div>
    return (
        <section className="gig-details">
            <h1>{gig.title}</h1>

            <div className="owner-details-container">
                <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-meduim"/>

                <div className="owner-details">
                    <h3 className="gig-title">{gig.owner.fullname}</h3>
                    <span className="star-svg">
                        <img src="src/assets/img/star.svg" alt="star-svg" className="star"/>
                    </span>
                    <span className="owner-rate">{gig.owner.rate}</span>
                    <span className="owner-number-rates">(137)</span>
                </div>
                
            </div>

            <img className="gig-img" src={gig.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig img" /> 

             <div>
                <h1>About this gig</h1>
                <p>{gig.description}</p>
             </div>

            <div className="call-to-action">
                <img src="src/assets/img/price.png" alt="price" />
            </div>

        </section>
    )
}