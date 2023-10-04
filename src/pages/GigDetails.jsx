import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { gigService } from "../services/gig.service.local"
import priceUrl from "../assets/img/price.png"
import starUrl from "../assets/img/star.svg"
import nextUrl from "../assets/img/next.svg"

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

            <div className="owner-details-container">
                <h1 className="gig-title">{gig.title}</h1>
                <div className="owner-details-container-1">

                    <img src={gig.owner.imgUrl} alt="owner-img" className="owner-profile-img-meduim"/>

                    <div className="owner-details">
                        <h3 className="gig-title">{gig.owner.fullname}</h3>
                        <div className="star-wrapper">
                            <span className="star-svg">
                                <img src={starUrl} alt="star-svg" className="star"/>
                            </span>
                            <span className="owner-rate">{gig.owner.rate}</span>
                            <span className="owner-number-rates">(137)</span>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* <img className="gig-img" src={gig.imgUrls ? gig.imgUrls[0] : defaultImgUrl} alt="gig img" />  */}
            
            <div style={{gridColumn:2, marginBottom: '30px',position:'relative'}}>
            <Carousel renderArrowNext={(clickHandler, hasNext) => {
                return (
                    // <div
                    //     className={`${
                    //     hasNext ? "absolute" : "hidden"
                    //     } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                    //     onClick={clickHandler}
                    // >
                    //     <RightIcon className="w-9 h-9 text-white" />
                    // </div>
                    <button className= 'next-btn' onClick={clickHandler} >
                        <img src={nextUrl} alt="nextUrl" />
                    </button>
                    );
            }}
            renderArrowPrev={(clickHandler, hasNext)=>{
                return(
                    <button className= 'prev-btn' onClick={clickHandler} >
                        <img src={nextUrl} alt="nextUrl" />
                    </button>
                )
            }}
            >
                {gig.imgUrls.map(img=>{
                    return <img src={img}/>
                })}
            </Carousel>
            </div>
            

             <div className="about-gig">
                <h1 className="gig-about-title">About this gig</h1>
                <p className="gig-description">{gig.description}</p>
             </div>

            {/* <aside className="call-to-action">
                <img src={priceUrl} alt="price" style={{height:'540px'}}/>
            </aside> */}

        </section>
    )
}