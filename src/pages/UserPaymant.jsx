import { useSelector } from "react-redux"
import cards from "../assets/img/credit-cards.svg"
import { useState } from "react"
import { useParams } from "react-router"

export function UserPayment({ user }) {
    const [radioOptions, setRadioOptions] = useState({ visa: true, paypal: false })

    const username = user?.username

    function onChangeRadioButton(ev) {
        if (ev.target.name == 'visa') {
            setRadioOptions({ visa: true, paypal: false })
        }
        if (ev.target.name == 'paypal') {
            setRadioOptions({ visa: false, paypal: true })
        }
    }

    return (
        <section className="payment-container">

            <section className="billing-info-wrapper">
                <header className="billing-info-header"><h6>Billing information</h6></header>
                <div className="user-details-wrapper">
                    <p>Your invoice will be issued according to the details listed here.</p>
                    <div className="user-details">
                        <p className="username">{username}</p>
                        <p>Israel</p>
                    </div>
                </div>
            </section>


            <section className="billing-info-wrapper payment-methods-wrapper">
                <header className="billing-info-header payment-methods-header"><h6>Payment Options</h6></header>

                <section className="payments-option">
                    <label>
                        <input className="form-check-input radio" type="radio" name="visa" id="flexRadioDefault1" onChange={onChangeRadioButton} checked={radioOptions.visa} />
                        <img src={cards} alt="cards" />
                    </label>
                </section>

                <form className="credit-card-details-wrapper">
                    <article className="credit-card-details">
                        <div className="card card-number">
                            <label htmlFor=""><h6>Card Number</h6></label>
                            <label className="credit-card-input-wrapper">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_png,q_auto/v1/attachments/generic_asset/asset/2496be9dfb5983d9de91630d83bb21e0-1682945799754/generic.svg" alt="credit-card-icon" className="card-logo" />
                                <input type="text" placeholder="0000 0000 0000 0000" defaultValue='5326-1000-0000-0000' />
                            </label>
                        </div>

                        <div className="card">
                            <span className="expiration-date">
                                <label htmlFor=""><h6>Expiration date</h6></label>
                                <input type="text" name="" id="" className="input" placeholder="MM/YY" defaultValue='03/28' />
                            </span>
                            <div className="security-code">
                                <label htmlFor=""><h6>Security code</h6></label>
                                <input type="text" name="" id="" className="input" placeholder="NNN" defaultValue='345' />
                            </div>
                        </div>

                        <div className="card">
                            <div className="first-name">
                                <label htmlFor=""><h6>First name</h6></label>
                                <input type="text" name="" id="" className="input" placeholder="Insert first name" defaultValue={user && user.fullname || ''} />
                            </div>
                            <div className="last-name">
                                <label htmlFor=""><h6>Last name</h6></label>
                                <input type="text" name="" id="" className="input" placeholder="Insert last name" />
                            </div>
                        </div>

                    </article>
                </form>

                <section className="payments-option">
                    <label>
                        <input className="form-check-input radio" type="radio" name="paypal" id="flexRadioDefault1" onChange={onChangeRadioButton} checked={radioOptions.paypal} />
                        <img src="https://finderr.onrender.com/static/media/paypal.2268abba910e45e692258282d2801b10.svg" alt="paypal" className="paypal-logo" />
                    </label>
                </section>
            </section>
        </section>


    )
}