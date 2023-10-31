import timeImg from '../assets/img/time.svg'
import checkImg from '../assets/img/check.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { utilService } from '../services/util.service'
import { useSelector } from 'react-redux'
import { setUserModalOpen } from '../store/user.actions'
import { showErrorMsg } from '../services/event-bus.service'
const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'


export function CallToAction({ gig, isPurchase = false, onPurchaseOrder, selectedPack = 'basic' }) {
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const { price, daysToMake, packages, imgUrls } = gig
    const [selectedPackage, setSelectedPackage] = useState(selectedPack)
    const { title, packPrice, packDaysToMake, desc, features } = packages[selectedPackage]
    const { pathname } = useLocation()

    function handlePackageChange(packageKey) {
        setSelectedPackage(packageKey)
    }

    function goToCheckout() {
        if (loggedUser) navigate(`${pathname}/checkout`)
        else {
            showErrorMsg('You must be logged in to purchase services..')
            setUserModalOpen(true)
        }
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
                    {isPurchase && <img src={imgUrls[0] || imgNotFound} alt="Selected gig image preview" onError={e => e.currentTarget.src = imgNotFound} />}
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
                        <button onClick={() => { onPurchaseOrder(packages[selectedPackage]) }} className='btn continue'>Pay in USD</button>
                        <span>
                            <i className="fa-solid fa-lock"></i>  SSL Secure Payment
                        </span>
                    </div>
                    :
                    <a onClick={goToCheckout} className='btn continue'>
                        Continue
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                }
                {!isPurchase && <div className='compare'>
                    <a className='compare-link'>Compare packages</a>
                </div>}
            </article>
        </section>
    )
}