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


    return (
        <section className="gig-details">
            {console.log(gig)}
            <h1>{gig?.title}</h1>
            <h3>{gig?.owner?.fullname}</h3>
            <img className="toy-img" src={gig?.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig img" />  
            <p>{gig?.desc}</p>
        </section>
    )
}