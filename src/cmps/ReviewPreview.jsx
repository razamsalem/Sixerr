import starUrl from "../assets/img/star.svg"
import thumsUp from "../assets/img/thums-up.svg"
import thumsUpGreen from "../assets/img/thums-up-green.svg"
import thumsDown from "../assets/img/thums-down.svg"
import thumsDownRed from "../assets/img/thums-down-red.svg"
import emptyStar from "../assets/img/empty-star.svg"
import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { useEffect, useState } from "react"
import { ReviewStars } from "./ReviewStars"
const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699048789/user-1_conuzo.png'
import { useNavigate } from "react-router"
const defaultFlag = utilService.getFlag('un')

export function ReviewPreview({ review }) {
    const [isClickedTumsUp, setIsClickedTumsUp] = useState(false)
    const [isClickedTumsDown, setIsClickedTumsDown] = useState(false)
    const navigate = useNavigate()
    const [flag, setFlag] = useState(null)

    useEffect(() => {
        setFlag(utilService.getFlag(review.by.location))
    }, [])


    function navigateToUser() {
        navigate(`/user/${review.by._id}`)
    }


    return (
        <li className="review-preview">
            <img src={review.by.imgUrl} className="seller-img" onClick={navigateToUser} onError={e => e.currentTarget.src = defaultUserImg} />
            <div className="review-detail">
                <div className="seller-info">
                    <h4 className="seller-name" onClick={navigateToUser} >{review.by.fullname}</h4>
                    <div className="country">
                        <img className="flag" src={flag} alt="flag" onError={e => e.currentTarget.src = defaultFlag} />
                        <span>{review.by.location}</span>
                    </div>
                </div>
                <div className="rate-info">
                    <ReviewStars review={review} />
                    <span className="divider"></span>
                    <span>{utilService.timeAgo(review.createdAt)}</span>
                </div>
                <article className="long-txt">
                    <LongTxt txt={review.txt} length={200} showReadMore={true} />
                </article>

                <div className="helpful">
                    <span>Helpful?</span>


                    {!isClickedTumsUp && <div onClick={() => {
                        setIsClickedTumsDown(false)
                        setIsClickedTumsUp(true)
                    }} style={{ color: '#222325' }} className="thums">
                        <img src={thumsUp} alt="thumsUpGreen" id="yes" />
                        <span id="yes">Yes</span>
                    </div>}

                    {isClickedTumsUp && <div onClick={() => setIsClickedTumsUp(false)} style={{ color: 'rgb(29, 191, 115)' }} className="thums">
                        <img src={thumsUpGreen} alt="thumsUp" id="yes" />
                        <span id="yes">Yes</span>
                    </div>}

                    {!isClickedTumsDown && <div onClick={() => {
                        setIsClickedTumsUp(false)
                        setIsClickedTumsDown(true)
                    }} style={{ color: '#222325' }} className="thums">
                        <img src={thumsDown} alt="thumsDown" id="no" />
                        <span id="no">No</span>
                    </div>}

                    {isClickedTumsDown && <div onClick={() => setIsClickedTumsDown(false)} style={{ color: '#f74040' }} className="thums">
                        <img src={thumsDownRed} alt="thumsDownRed" id="no" />
                        <span id="no">No</span>
                    </div>}

                </div>

            </div>
        </li>
    )
}