import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { gigService } from "../services/gig.service.local"
import starUrl from "../assets/img/star.svg"
import nextUrl from "../assets/img/next.svg"
import { CallToAction } from "../cmps/CallToAction";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/reducers/gig.reducer";

export function GigDetails() {
    // const [reviews, setReviews] = useState(null)
    
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    function addToCart(gig) {
        dispatch({ type: ADD_TO_CART, gig })
    }

    if (!gig) return <div>Loading...</div>
    return (
        <section className="gig-details">
            <CallToAction gig={gig} addToCart={addToCart} />
            <div className="owner-details-container">
                <h1 className="gig-title">{gig.title}</h1>
                <div className="profile-container">

                    <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-meduim" />

                    <div className="owner-details">
                        <h3 className="gig-title">{gig.owner.fullname}</h3>
                        <div className="star-wrapper">
                            <span className="star-svg">
                                <img src={starUrl} alt="star-svg" className="star" />
                            </span>
                            <span className="owner-rate">{gig.owner.rate}</span>
                            <span className="owner-number-rates">(137)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-container" style={{ marginBottom: '1.875rem', position: 'relative' }}>
                <Carousel renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <button className='next-btn' onClick={clickHandler} >
                            <img src={nextUrl} alt="nextUrl" />
                        </button>
                    )
                }}
                    renderArrowPrev={(clickHandler, hasNext) => {
                        return (
                            <button className='prev-btn' onClick={clickHandler} >
                                <img src={nextUrl} alt="nextUrl" />
                            </button>
                        )
                    }}
                >
                    {gig.imgUrls.map(img => {
                        return <img key={img} src={img} />
                    })}
                </Carousel>
            </div>


            <div className="about-gig">
                <h1 className="gig-about-title">About this gig</h1>
                <p className="gig-description">{gig.description}</p>
                <Link to={`/gig/${gig._id}/payment`}>link to payment</Link>
               
            </div>

        </section>
    )
}