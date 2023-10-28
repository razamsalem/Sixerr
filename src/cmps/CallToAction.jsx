import timeImg from '../assets/img/time.svg';
import checkImg from '../assets/img/check.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { utilService } from '../services/util.service';

export function CallToAction({ gig, isPurchase = false, onPurchaseOrder }) {
    const { price, daysToMake, packages } = gig
    const [selectedPackage, setSelectedPackage] = useState('basic')
    const { title, packPrice, packDaysToMake, desc, features } = packages[selectedPackage]
    const { pathname } = useLocation()

    function handlePackageChange(packageKey) {
        setSelectedPackage(packageKey)
    }

    return (
        <section className="cta-container">
            <div className="package-options flex">
                {Object.keys(packages).map((packageKey) => (
                    <button
                        key={packageKey}
                        className={`package ${selectedPackage === packageKey ? 'selected' : ''}`}
                        onClick={() => handlePackageChange(packageKey)}
                    >
                        {utilService.capitalizeFirstLetter(packageKey)}
                    </button>
                ))}
            </div>
            <article className="call-to-action">
                <section className="package-heading">
                    <h2 className='price'><span className="price-font">$ {packPrice ? packPrice : price}</span></h2>
                </section>

                <h3 className='package-desc'><span className='package'>{title ? title : selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} </span>{desc}</h3>

                <span className="days-container">
                    <img className='icon time' src={timeImg} alt="time-icon" />
                    <h3>{packDaysToMake ? packDaysToMake : daysToMake} Days Delivery</h3>
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
                        {/* <i class="fa-solid fa-arrow-right"></i> */}
                        Continue
                    </Link>
                }
                {!isPurchase && <div className='compare'>
                    <a className='compare-link'>Compare packages</a>
                </div>}
            </article>
        </section>
    )
}