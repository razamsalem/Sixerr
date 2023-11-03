import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import { gigService } from "../services/gig.service"
import { CallToAction } from "../cmps/CallToAction"
import { ADD_TO_CART } from "../store/reducers/gig.reducer"
import { ReviewList } from "../cmps/ReviewList"
import { UserMiniDetail } from "../cmps/UserMiniDetail"
import { userService } from "../services/user.service.http"
import { showErrorMsg } from "../services/event-bus.service"
import { BreadCrumbs } from "../cmps/BreadCrumbs"
import LoadingCircle from "../cmps/LoadingCircle"
import starGrey from "../assets/img/star-grey.svg"
const defaultGigImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'
const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699048789/user-1_conuzo.png'

export function GigDetails() {
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [seller, setSeller] = useState(null)
    const [isModalOpen, setModalOpen] = useState(false)
    const userInfoRef = useRef(null)
    const userReviewRef = useRef(null)
    const defaultImgUrls = [
        'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp',
        'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698914668/default-img-3_afl2mb.webp',
        'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698914668/default-img-1_qhfps6.webp',
    ]

    useEffect(() => {
        loadGig()
        window.scrollTo(0, 0)
    }, [gigId])

    useEffect(() => {
        if (gig && !seller) loadUser()
    }, [gig])

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


    async function loadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setGig(desiredGig)
        } catch (err) {
            console.log('Had issues in gig details ->', err)
            showErrorMsg('Oops cannot load gig')
            navigate('/')
        }
    }

    function ShowCarousel() {
        setModalOpen(false)
    }

    function hideCarousel() {
        setModalOpen(true)
    }

    const scrollToUserInfo = () => {
        userInfoRef.current.scrollIntoView()
    }

    const scrollToReview = () => {
        userReviewRef.current.scrollIntoView()
    }

    function addToCart(gig) {
        dispatch({ type: ADD_TO_CART, gig })
    }

    if (!gig || !seller) return <div className='loading'>{<LoadingCircle />}</div>
    return (
        <section className="gig-details full main-layout">
            <BreadCrumbs category={gig.category} />
            <CallToAction gig={gig} addToCart={addToCart} ShowCarousel={ShowCarousel} hideCarousel={hideCarousel} />
            <section className="top-details container full main-layout">
                <div className="owner-details-container">
                    <h1 className="gig-title">{gig.title}</h1>
                    <div className="profile-container">
                        <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-meduim" onClick={scrollToUserInfo} onError={e => e.currentTarget.src = defaultUserImg} />
                        <div className="owner-details">
                            <div className="user-container" onClick={scrollToUserInfo}>
                                <h3 className="user-title">{gig.owner.fullname}</h3>
                                <span className="username">@{seller.username}</span>
                            </div>
                            <div className="star-wrapper" onClick={scrollToReview}>
                                <span className="star-svg">
                                    <img src={starGrey} alt="star-svg" className="star" />
                                </span>
                                <span className="owner-rate">{gig.owner.rate}</span>
                                <span className="owner-number-rates">({seller.reviews.length * 11 + 103})</span>
                                <span className="divider">|</span>
                                <span className="queue">10 Orders in Queue</span>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-container ${isModalOpen ? 'hide' : ''}`}>
                        <Carousel infiniteLoop={true} showIndicators={false} thumbWidth={'100px'} showStatus={false} renderArrowNext={(clickHandler, hasNext) => {
                            return (
                                <button className='next-btn arrow' onClick={clickHandler} >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            )
                        }}
                            renderArrowPrev={(clickHandler, hasNext) => {
                                return (
                                    <button className='prev-btn arrow' onClick={clickHandler} >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                )
                            }}
                        >
                            {!gig.imgUrls.length ? defaultImgUrls.map(img => <img src={img} />) : gig.imgUrls.map(img => <img key={img} src={img} onError={e => e.currentTarget.src = defaultGigImg} />)}
                        </Carousel>
                    </div>
                </div>
            </section>

            <div className="about-gig">
                <h1 className="gig-about-title">About this gig</h1>
                <p className="gig-description">{gig.description}</p>
            </div>
            <div className="user-info" ref={userInfoRef}>
                <h1 className="about-seller">About the seller</h1>
                <UserMiniDetail gig={gig} />
            </div>
            <div className={`user-reviews ${isModalOpen ? 'hide' : ''}`} ref={userReviewRef}>
                <ReviewList gigOwnerId={gig.owner._id} />
            </div>
        </section>
    )
}