import timeImg from '../assets/img/time.svg';
import checkImg from '../assets/img/check.svg';
import { Link, useLocation } from 'react-router-dom';

export function CallToAction({ gig, isPurchase = false, onPurchaseOrder }) {
    const { price, daysToMake, packages } = gig
    const { pathname } = useLocation()


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
                        <span key={feature} className='feature-container'>
                            <img className='icon check' src={checkImg} alt="time-icon" />
                            {feature}
                        </span>
                    )
                })}
            </ul>

            {isPurchase ?
                <div className='purchase-btn-container'>
                    <button onClick={onPurchaseOrder} className='btn continue'>Pay in USD</button>
                    <span>
                        <i className="fa-solid fa-lock"></i>  SSL Secure Payment
                    </span>
                </div>
                :
                <Link to={`${pathname}/checkout`} className='btn continue'>
                    Continue
                </Link>
            }
            {!isPurchase && <div className='compare'>
                <a className='compare-link'>Compare packages</a>
            </div>}
        </article>
    )
}