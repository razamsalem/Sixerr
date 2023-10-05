import timeImg from '../assets/img/time.svg';
import checkImg from '../assets/img/check.svg';

export function CallToAction({ gig }) {
    const { price, daysToMake, packages } = gig

    return (
        <article className="call-to-action">
            <section className="package-heading">
                <h1 className='package'>Basic</h1>
                <h2 className='price'>US $ {price}</h2>
            </section>

            <h3 className='package-desc'>{packages.basic.desc}</h3>

            <span className="days-container">
                <img className='icon time' src={timeImg} alt="time-icon" />
                <h3>{daysToMake} Days Delivery</h3>
            </span>

            <ul className="feature-list">
                {packages.basic.features.map(feature => {
                    return (
                        <span className='feature-container'>
                            <img className='icon check' src={checkImg} alt="time-icon" />
                            {feature}
                        </span>
                    )
                })}
            </ul>
            <button className='btn continue'>
                Continue
            </button>
            <div className='compare'>
                <a className='compare-link'>Compare packages</a>
            </div>
        </article>
    )
}