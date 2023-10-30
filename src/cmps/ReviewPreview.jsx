import starUrl from "../assets/img/star.svg"
import thumsUp from "../assets/img/thums-up.svg"
import thumsUpGreen from "../assets/img/thums-up-green.svg"
import thumsDown from "../assets/img/thums-down.svg"
import thumsDownRed from "../assets/img/thums-down-red.svg"
import emptyStar from "../assets/img/empty-star.svg"
import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { useState } from "react"
import { ReviewStars } from "./ReviewStars"
import { useNavigate } from "react-router"

export function ReviewPreview({ review }) {
    const [isClickedTumsUp, setIsClickedTumsUp] = useState(false)
    const [isClickedTumsDown, setIsClickedTumsDown] = useState(false)
    const navigate = useNavigate()

    function navigateToUser() {
        navigate(`/user/${review.by._id}`)
    }


    return (
        <li className="review-preview">
            <img src={review.by.imgUrl} alt="seller img" className="seller-img" onClick={navigateToUser} />
            <div className="review-detail">
                <div className="seller-info">
                    <h4 className="seller-name" onClick={navigateToUser} >{review.by.fullname}</h4>
                    <div className="country">
                        <img className="flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
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