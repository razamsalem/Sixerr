import timeImg from '../assets/img/time.svg'
import checkImg from '../assets/img/check.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { utilService } from '../services/util.service'

export function CallToAction({ gig, isPurchase = false, onPurchaseOrder, selectedPack = 'basic' }) {
    const { price, daysToMake, packages, imgUrls } = gig
    const [selectedPackage, setSelectedPackage] = useState(selectedPack)
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
                <figure className='preview-container'>
                    {isPurchase && <img src={imgUrls[0]} alt="Selected gig image preview" />}
                    {isPurchase && <span className='package-desc'>{desc}</span>}
                </figure>
                <section className="package-heading">
                    <h2 className='price'><span className="price-font">$ {packPrice ? packPrice : price}</span></h2>
                </section>

                <h3 className='package-desc'><span className='package'>{title ? title : selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} </span>{!isPurchase && desc}</h3>

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
                        Continue
                        {/* <i class="fa-solid fa-arrow-right"></i> */}
                    </Link>
                }
                {!isPurchase && <div className='compare'>
                    <a className='compare-link'>Compare packages</a>
                </div>}
            </article>
        </section>
    )
}