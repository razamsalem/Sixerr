import starUrl from "../assets/img/star.svg"
import thumsUp from "../assets/img/thums-up.svg"
import thumsUpGreen from "../assets/img/thums-up-green.svg"
import thumsDown from "../assets/img/thums-down.svg"
import thumsDownRed from "../assets/img/thums-down-red.svg"
import emptyStar from "../assets/img/empty-star.svg"
import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { useState } from "react"
export function ReviewPreview ({review}) {
    const [isClickedTumsUp, setIsClickedTumsUp] = useState(false);
    const [isClickedTumsDown, setIsClickedTumsDown] = useState(false);

    return(
        <li className="review-preview">
            <img src={review.by.imgUrl} alt="" className="seller-img" />
            <div className="review-detail">
                <div className="seller-info">
                    <h4 className="seller-name">{review.by.fullname}</h4>
                    <div className="country">
                        <img className="flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt=""/>
                        <span>{review.by.location}</span>
                    </div>
                </div>
                <div className="rate-info">
                    <div className="stars">
                            {Array(review.rate)
                            .fill()
                            .map((item, i) => (
                                <img src={starUrl} alt="star" key={i} />
                            ))}
                            {Array(5-review.rate)
                            .fill()
                            .map((item, i) => (
                                <img src={emptyStar} alt="empty-star" key={i} />
                            ))}
                        <span className="rate padding">{review.rate}</span>
                    </div>
                    <span className="divider"></span>
                    <span>{utilService.timeAgo(review.createdAt)}</span>
                </div>
                    <article className="long-txt">
                    <LongTxt txt={review.txt} length={200} showReadMore={true} />
                    </article>

                    <div className="helpful">
                        <span>Helpful?</span>
                       
                             
                            {!isClickedTumsUp && <div onClick={()=>{
                                 setIsClickedTumsDown(false)
                                setIsClickedTumsUp(true)}} style={{color:'#222325'}} className="thums">
                                <img src={thumsUp} alt="thumsUpGreen" id="yes"/>
                                <label id="yes">Yes</label>
                            </div>}
                             
                            {isClickedTumsUp && <div onClick={()=>setIsClickedTumsUp(false)} style={{color: 'rgb(29, 191, 115)'}} className="thums">
                                <img src={thumsUpGreen} alt="thumsUp" id="yes"/>
                                <label id="yes">Yes</label>
                            </div>}
                        
                         {!isClickedTumsDown && <div onClick={()=>{
                             setIsClickedTumsUp(false)
                            setIsClickedTumsDown(true)}} style={{color:'#222325'}} className="thums">
                                <img src={thumsDown} alt="thumsDown" id="no"/>
                                <label id="no">No</label>
                            </div>}
                             
                            {isClickedTumsDown && <div onClick={()=>setIsClickedTumsDown(false)} style={{color:'#f74040'}} className="thums">
                                <img src={thumsDownRed} alt="thumsDownRed" id="no"/>
                                <label id="no">No</label>
                            </div>}
                       
                    </div>
                    
                </div>
        </li>
    )
}