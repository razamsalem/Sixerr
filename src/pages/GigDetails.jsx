import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { gigService } from "../services/gig.service.local"
import priceUrl from "../assets/img/price.png"
import starUrl from "../assets/img/star.svg"

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
    // const images = [
    //     {
    //       original: gig.imgUrls[0],
    //       thumbnail: "https://fiverr-res.cloudinary.com/images/t_thumbnail3_3,q_auto,f_auto/gigs/292332178/original/18841f3470f65b26636437baa1fd560438fb1a51/do-modern-and-elegant-logo-design-for-your-business.jpeg",
    //     },
    //     {
    //       original: gig.imgUrls[1],
    //       thumbnail: "https://fiverr-res.cloudinary.com/images/t_thumbnail3_3,q_auto,f_auto/gigs2/292332178/original/748f0d7770acaa93f8e7734a78252dd0359ce24b/do-modern-and-elegant-logo-design-for-your-business.jpeg",
    //     },
    //   ];
    // const images = [
    //     {
    //       original: "https://picsum.photos/id/1018/1000/600/",
    //       thumbnail: "https://picsum.photos/id/1018/250/150/",
    //     },
    //     {
    //       original: "https://picsum.photos/id/1015/1000/600/",
    //       thumbnail: "https://picsum.photos/id/1015/250/150/",
    //     },
    //     {
    //       original: "https://picsum.photos/id/1019/1000/600/",
    //       thumbnail: "https://picsum.photos/id/1019/250/150/",
    //     },
    //   ];
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
            <Carousel>
                {gig.imgUrls.map(img=>{
                    console.log(img);
                    return <img src={img}/>
                })}
            </Carousel>

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