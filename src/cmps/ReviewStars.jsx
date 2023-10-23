import starUrl from "../assets/img/star.svg"
import emptyStar from "../assets/img/empty-star.svg"
export function ReviewStars({review}) {
    return(
        <div className="stars">
            {Array(review.rate)
            .fill()
            .map((item, i) => (
                <img src={starUrl} alt="star" key={i} className="star"/>
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