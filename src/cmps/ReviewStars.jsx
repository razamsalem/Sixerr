import starGrey from "../assets/img/star-grey.svg"
import emptyStar from "../assets/img/empty-star.svg"
export function ReviewStars({review}) {
    return(
        <div className="stars">
            {Array(Math.round(review.rate))
            .fill()
            .map((item, i) => (
                <img src={starGrey} alt="star" key={i} className="star"/>
            ))}
            {Array(Math.round(5-review.rate))
            .fill()
            .map((_, i) => (
                <img src={emptyStar} alt="empty-star" key={i} className="star"/>
            ))}
            <span className="rate padding">{review.rate.toFixed(1).replace(/\.0+$/, '')}</span>
        </div>
    )
}