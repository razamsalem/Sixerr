import timeImg from '../assets/img/time.svg'
import closeImg from '../assets/img/sixerr-x.svg'
import checkImg from '../assets/img/check.svg'
import packImg from '../assets/img/package.svg'
import revisionImg from '../assets/img/revisions.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { utilService } from '../services/util.service'
import { useSelector } from 'react-redux'
import { setUserModalOpen } from '../store/user.actions'
import { showErrorMsg } from '../services/event-bus.service'
import CtaModal from './CtaModal'
const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'


export function CallToAction({ gig, isPurchase = false, onPurchaseOrder, openModal, selectedPack = 'basic', setPackage }) {
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const { title, price, daysToMake, packages, imgUrls } = gig
    const [selectedPackage, setSelectedPackage] = useState(selectedPack)
    const { title: packTitle, packPrice, packDaysToMake, desc, features } = packages[selectedPackage]
    const [isModalOpen, setModalOpen] = useState(false)
    const { pathname } = useLocation()

    function handlePackageChange(packageKey) {
        setSelectedPackage(packageKey)
    }

    function goToCheckout() {
        if (loggedUser) navigate(`${pathname}/checkout/${selectedPackage}`)
        else {
            showErrorMsg('You must be logged in to purchase services..')
            setUserModalOpen(true)
        }
    }

    function openModal() {
        document.documentElement.classList.add('modal-open')
        setModalOpen(true)
    }

    function closeModal() {
        document.documentElement.classList.remove('modal-open')
        setModalOpen(false)
    }

    return (
        <section className="cta-container">
            <CtaModal isOpen={isModalOpen} onClose={closeModal} >
                <section className="modal-content flex">
                    <div className="header flex">
                        <div className="header-content">Order options</div>
                        <button onClick={closeModal}><img src={closeImg} alt="close modal" /></button>
                    </div>
                    <div className="modal-main">
                        <div className="selected-order">
                            <div className="pack flex">
                                <span className="bold">{utilService.capitalizeFirstLetter(selectedPackage)}</span>
                                <span>${packPrice}</span>
                            </div>
                            <div className="desc">
                                <span className='bold'>{packTitle}</span>{title}
                            </div>
                        </div>
                        <div className="order-info">
                            <span className='bold'>Know your order</span>
                            <div className="order">
                                <div className="subtitle flex">
                                    <span className='bolder'>${packPrice}</span>
                                    <span className='small'>Single order</span>
                                </div>

                                <div className="info border-top flex">
                                    <span className='icon'> <img src={packImg} alt="package icon" /> </span> <span className='level'>{`${utilService.capitalizeFirstLetter(selectedPackage)} package`} </span>
                                </div>

                                <div className="features">
                                    <ul>
                                        {features.map(feature => (
                                            <li>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info flex">
                                    <span className='icon'> <img src={timeImg} alt="clock-icon" /> </span> <span className='level'>{packDaysToMake}-{packDaysToMake === 1 ? 'day' : 'days'} delivery</span>
                                </div>

                                <div className="info flex">
                                    <span className='icon'> <img src={revisionImg} alt="revision-icon" /> </span> <span className='level'>Unlimited revisions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className='footer'>
                        <div className="purchase-btn">
                            <button onClick={goToCheckout}>Continue (${packPrice})</button>
                            <span className='footer-msg flex'>You won’t be charged yet</span>
                        </div>
                    </footer>
                </section>
            </CtaModal>
            {!isPurchase &&
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
                </div>}
            <article className="call-to-action">
                <figure className='preview-container'>
                    {isPurchase && <img src={imgUrls[0] || imgNotFound} alt="Selected gig image preview" onError={e => e.currentTarget.src = imgNotFound} />}
                    {isPurchase && <span className='package-desc'>{desc}</span>}
                </figure>
                <section className="package-heading">
                    <h2 className='price'><span className="price-font">$ {packPrice ? packPrice : price}</span></h2>
                </section>

                <h3 className='package-desc'><span className='package'>{packTitle ? packTitle : selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} </span>{!isPurchase && desc}</h3>

                <span className="days-container">
                    <img className='icon clock' src={timeImg} alt="clock-icon" />
                    <h3>{packDaysToMake ? packDaysToMake : daysToMake} {packDaysToMake === 1 ? 'Day' : 'Days'} Delivery</h3>
                </span>

                <ul className="feature-list">
                    {features.map((feature) => (
                        <span key={feature} className='feature-container'>
                            <img className='icon check' src={checkImg} alt="check-icon" />
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
                    <a onClick={openModal} className='btn continue'>
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