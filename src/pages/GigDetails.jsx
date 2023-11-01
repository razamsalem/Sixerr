import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import { gigService } from "../services/gig.service.local"
import { CallToAction } from "../cmps/CallToAction"
import { ADD_TO_CART } from "../store/reducers/gig.reducer"
import { ReviewList } from "../cmps/ReviewList"
import { UserMiniDetail } from "../cmps/UserMiniDetail"
import { userService } from "../services/user.service"
import { showErrorMsg } from "../services/event-bus.service"
import { BreadCrumbs } from "../cmps/BreadCrumbs"
import LoadingCircle from "../cmps/LoadingCircle"
import timeImg from '../assets/img/sixerr-x.svg'
import starGrey from "../assets/img/star-grey.svg"
import CtaModal from "../cmps/CtaModal"
const defaultGigImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'
const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663308/defaultUserImg_psy0oe.png'

export function GigDetails() {
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [seller, setSeller] = useState(null)
    const [isModalOpen, setModalOpen] = useState(false)
    const userInfoRef = useRef(null)
    const userReviewRef = useRef(null)
    const defaultImgUrl = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698161431/sixxer-logo_vseimk.png'

    useEffect(() => {
        loadGig()
        window.scrollTo(0, 0)
    }, [gigId])

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

    function openModal() {
        document.documentElement.classList.add('modal-open')
        setModalOpen(true)
    }

    function closeModal() {
        document.documentElement.classList.remove('modal-open')
        setModalOpen(false)
    }

    if (gig) loadUser()

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
        <>
            <CtaModal isOpen={isModalOpen} onClose={closeModal} >
                <section className="modal-content">
                    <div className="header flex">
                        <div className="header-content">Order options</div>
                        <button onClick={closeModal}><img src={timeImg} alt="" /></button>
                    </div>
                </section>
            </CtaModal>

            <section className="gig-details full main-layout">
                <BreadCrumbs category={gig.category} />
                <CallToAction gig={gig} addToCart={addToCart} openModal={openModal} />
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
                        <div className="carousel-container">
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
                                {!gig.imgUrls.length ? <img src={defaultImgUrl} onError={e => e.currentTarget.src = defaultGigImg} /> : gig.imgUrls.map(img => <img key={img} src={img} onError={e => e.currentTarget.src = defaultGigImg} />)}
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
                <div className="user-reviews" ref={userReviewRef}>
                    <ReviewList gigOwnerId={gig.owner._id} />
                </div>
            </section>
        </>
    )
}