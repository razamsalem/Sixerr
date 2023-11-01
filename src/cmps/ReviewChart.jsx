import starGrey from "../assets/img/star-grey.svg"
import { ReviewStars } from "./ReviewStars";
export function ReviewChart({ reviews, isUserProfile }) {

    function lengthOfreviews() {
        let revs = [0, 0, 0, 0, 0];
        for (let i = 0; i < reviews.length; i++) {
            revs[reviews[i].rate - 1]++
        }
        return revs
    }

    function avgReviews() {
        let sum = 0
        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].rate

        }
        return sum / reviews.length
    }

    if (!reviews.length) return

    return (
        <section className="review-chart">
            <div className="review-header stars">
                <h4>{reviews.length} {isUserProfile ? 'reviews for this seller' : 'reviews for this Gig'}</h4>
                <ReviewStars review={{ rate: avgReviews()}} />
            </div>
            {Array(5)
                .fill()
                .map((_, i) => (
                    <div className="review-bars-container" key={i} style={lengthOfreviews()[4 - i] === 0 ? { color: '#e4e5e7' } : {}}>
                        {(5 - i === 1) ? <div className="star-number">1 Star</div> : <div className="star-number">{5 - i} Stars</div>}
                        <div className="review-rate-bar">
                            <span className="percent" style={{ width: `${(lengthOfreviews()[4 - i] / reviews.length * 100)}%`}}></span>
                        </div>
                        <span>({lengthOfreviews()[4 - i]})</span>
                    </div>
                ))}
        </section>
    )
}