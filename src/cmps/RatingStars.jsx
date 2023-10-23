const rating = [1, 2, 3, 4, 5]

export function RatingStars({ handleChange, rate }) {

    function RatingStar(value) {
        return (
            <i className={`${value <= rate ? 'fa-solid' : 'fa-regular'} fa-star`} onClick={handleChange} key={value} data-name="rate" data-value={value}></i>
        )
    }

    return (
        <section className="stars">
            {rating.map(r => RatingStar(r))}
        </section>
    )
}