import { useSelector } from "react-redux"
import cards from "../assets/img/credit-cards.svg"
import { RadioButton } from "../cmps/RadioButton"
import { useState } from "react"
export  function  UserPayment() {

    const user = useSelector((storeState) => storeState.userModule.loggedinUser)
    const username = user?.username || 'tzvia123'
    const [radioOptions,setRadioOptions] = useState({visa: false, paypal : false})

    function onChangeRadioButton(ev) {
        console.log(ev.target.name);
        if(ev.target.name == 'visa'){
            setRadioOptions({visa: true, paypal : false})
        }
        if(ev.target.name == 'paypal'){
            setRadioOptions({visa: false, paypal : true})
        }
    }
    return(
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
                    <RadioButton 
                        name="visa"
                        id="radio"
                        value="radio"
                        text="Credit & Debit Cards"
                        onChange={onChangeRadioButton}
                        checked={radioOptions.visa}/>
                    {/* <label htmlFor="">Credit & Debit Cards</label> */}
                    <div>
                        <img src={cards} alt="cards" />
                    </div>
                </section>

                <form className="credit-card-details-wrapper">
                        <article className="credit-card-details">
                                <div className="card card-number">
                                    <label htmlFor=""><h6>Card Number</h6></label>
                                    <div className="credit-card-input-wrapper">
                                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_png,q_auto/v1/attachments/generic_asset/asset/2496be9dfb5983d9de91630d83bb21e0-1682945799754/generic.svg" alt="credit-card-icon" className="card-logo"/>
                                        <input type="text" placeholder="0000 0000 0000 0000"/>
                                    </div>
                                </div>

                                <div className="card">
                                    <span className="expiration-date">
                                        <label htmlFor=""><h6>Expiration date</h6></label>
                                        <input type="text" name="" id="" className="input" placeholder="MM/YY"/>
                                    </span>
                                    <div className="security-code">
                                        <label htmlFor=""><h6>Security code</h6></label>
                                        <input type="text" name="" id="" className="input"/>
                                    </div>
                                </div>

                                {/* <span className="card">
                                    <label htmlFor="">
                                        <span>dfasd</span>
                                        <div style={{border: '1px solid #c5c6c9',
                                                borderRadius: '4px',
                                                marginTop: '10px',
                                                alignSelf: 'center',
                                                padding: '1px 0'}}>
                                            <input type="text" style={{
                                                    color: '#404145',
                                                    outline: 'none',
                                                    width: '100%',
                                                    paddingLeft: '16px',
                                                    boxSizing: 'borderBox',
                                                    border: 'none'
                                            }}/>
                                        </div>
                                    </label>

                                    <label htmlFor="">
                                        <span>dfasd</span>
                                        <div style={{border: '1px solid #c5c6c9',
                                                borderRadius: '4px',
                                                marginTop: '10px',
                                                alignSelf: 'center',
                                                padding: '1px 0'}}>
                                            <input type="text" style={{
                                                    color: '#404145',
                                                    outline: 'none',
                                                    width: '100%',
                                                    paddingLeft: '16px',
                                                    boxSizing: 'borderBox',
                                                    border: 'none'
                                            }}/>
                                        </div>
                                    </label>
                                </span> */}

                                <div className="card">
                                    <div className="first-name">
                                        <label htmlFor=""><h6>First name</h6></label>
                                        <input type="text" name="" id="" className="input"/>
                                    </div>
                                    <div className="last-name">
                                        <label htmlFor=""><h6>Last name</h6></label>
                                        <input type="text" name="" id="" className="input"/>
                                    </div>
                                </div>

                        </article>
                </form>
                
                <section className="paypal">
                    <RadioButton 
                            name="paypal"
                            id="radio1"
                            value="radio"
                            text=""
                            onChange={onChangeRadioButton}
                            checked={radioOptions.paypal}/>
                  <img src="https://finderr.onrender.com/static/media/paypal.2268abba910e45e692258282d2801b10.svg" alt="paypal" className="paypal-logo"/>
                </section>
            </section>
            
            

        </section>

    
    )
}