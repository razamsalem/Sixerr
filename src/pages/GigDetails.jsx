import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { gigService } from "../services/gig.service.local"
import starUrl from "../assets/img/star.svg"
import { CallToAction } from "../cmps/CallToAction";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/reducers/gig.reducer";
import { ReviewList } from "../cmps/ReviewList";
import { UserMiniDetail } from "../cmps/UserMiniDetail";


export function GigDetails() {
    // const [reviews, setReviews] = useState(null) 
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const defaultImgUrl = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698161431/sixxer-logo_vseimk.png'

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
                <Carousel infiniteLoop={true} showIndicators={false} thumbWidth={'100px'} showStatus={false} renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <button className='next-btn arrow' onClick={clickHandler} >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        // <PrevBtn onClick={clickHandler} where={'detail'}/>
                    )
                }}
                    renderArrowPrev={(clickHandler, hasNext) => {
                        return (
                            <button className='prev-btn arrow' onClick={clickHandler} >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            // <NextBtn onClick={clickHandler} where={'detail'}/>

                        )
                    }}
                >
                    {!gig.imgUrls.length ? <img src={defaultImgUrl} /> : gig.imgUrls.map(img => <img key={img} src={img} />)}
                </Carousel>
            </div>


            <div className="about-gig">
                <h1 className="gig-about-title">About this gig</h1>
                <p className="gig-description">{gig.description}</p>
            </div>
            <h1 className="about-seller">About the seller</h1>
            <UserMiniDetail gig={gig} />
            <ReviewList gigOwnerId={gig.owner._id} />
        </section>
    )
}