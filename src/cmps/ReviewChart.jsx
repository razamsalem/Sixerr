import starGrey from "../assets/img/star-grey.svg"
export function ReviewChart({reviews}) {
    function lengthOfreviews() {
        let revs = [0,0,0,0,0];
        for (let i = 0; i < reviews.length; i++) {
            revs[reviews[i].rate-1]++
        }
        return revs
    }
    if(!reviews.length) return 
    return(
        <section className="review-chart">
            <div className="review-header stars">
                <h4>{reviews.length} reviews for this Gig</h4>
                {Array(5)
                .fill()
                .map((item, i) => (
                <img src={starGrey} alt="star" key={i} className="star"/>
                 ))}
                <span className="rate padding">4.9</span>
            </div>
            {Array(5)
            .fill()
            .map((_, i) => (
                <div className="review-bars-container" key={i}>
                    <div>{5-i} Stars</div>
                    <progress value={lengthOfreviews()[4-i]/reviews.length*100} max="100" ></progress>
                    <span>({lengthOfreviews()[4-i]})</span>
                </div>
            ))}
        </section>
    )
}