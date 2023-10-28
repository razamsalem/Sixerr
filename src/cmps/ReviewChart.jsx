import starGrey from "../assets/img/star-grey.svg"
import { ReviewStars } from "./ReviewStars";
export function ReviewChart({reviews}) {

    function lengthOfreviews() {
        let revs = [0,0,0,0,0];
        for (let i = 0; i < reviews.length; i++) {
            revs[reviews[i].rate-1]++
        }
        return revs
    }

    function avgReviews() {
        let sum = 0
        for (let i = 0; i < reviews.length; i++) {
           sum+=reviews[i].rate
            
        }
        return sum/reviews.length
    }

    if(!reviews.length) return 

    return(
        <section className="review-chart">
            <div className="review-header stars">
                <h4>{reviews.length} reviews for this Gig</h4>
                <ReviewStars review={{rate: Math.ceil(avgReviews())}}/>
            </div>
            {Array(5)
            .fill()
            .map((_, i) => (
                <div className="review-bars-container" key={i}>
                    { (5-i===1) ? <div>1 Star</div> : <div>{5-i} Stars</div>}
                    <progress value={lengthOfreviews()[4-i]/reviews.length*100} max="100" ></progress>
                    <span>({lengthOfreviews()[4-i]})</span>
                </div>
            ))}
        </section>
    )
}