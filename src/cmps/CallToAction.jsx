import timeImg from '../assets/img/time.svg';
import checkImg from '../assets/img/check.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function CallToAction({ gig, isPurchase = false, onPurchaseOrder }) {
    const { price, daysToMake, packages } = gig
    const [selectedPackage, setSelectedPackage] = useState('basic')
    const { desc, features } = packages[selectedPackage]
    const { pathname } = useLocation()

    function handlePackageChange(packageKey) {
        setSelectedPackage(packageKey)
    }

    return (
        <article className="call-to-action">

            <div className="package-options">
                {Object.keys(packages).map((packageKey) => (
                    <button
                        key={packageKey}
                        className={`package ${selectedPackage === packageKey ? 'selected' : ''}`}
                        onClick={() => handlePackageChange(packageKey)}
                    >
                        {packageKey}
                    </button>
                ))}
            </div>

            <section className="package-heading">
            <h1 className='package'>{selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)}</h1>
                <h2 className='price'>US $ {price}</h2>
            </section>

            <h3 className='package-desc'>{desc}</h3>

            <span className="days-container">
                <img className='icon time' src={timeImg} alt="time-icon" />
                <h3>{daysToMake} Days Delivery</h3>
            </span>
            
            <ul className="feature-list">
                {features.map((feature) => (
                    <span key={feature} className='feature-container'>
                        <img className='icon check' src={checkImg} alt="time-icon" />
                        {feature}
                    </span>
                ))}
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