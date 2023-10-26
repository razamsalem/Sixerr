import starGrey from "../assets/img/star-grey.svg"
import emptyStar from "../assets/img/empty-star.svg"
export function ReviewStars({review}) {
    return(
        <div className="stars">
            {Array(review.rate)
            .fill()
            .map((item, i) => (
                <img src={starGrey} alt="star" key={i} className="star"/>
            ))}
            {Array(5-review.rate)
            .fill()
            .map((_, i) => (
                <img src={emptyStar} alt="empty-star" key={i} className="star"/>
            ))}
            <span className="rate padding">{review.rate}</span>
        </div>
    )
}