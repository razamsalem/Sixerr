import { useSelector } from "react-redux"

export  function  UserPayment() {
    const user = useSelector((storeState) => storeState.userModule.loggedinUser)
    const username = user?.username || 'tzvia123'
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
               
                <form className="credit-card-details-wrapper">
                        <article className="credit-card-details">
                                <div className="card-number">
                                    <label htmlFor=""><h6>Card Number</h6></label>
                                    <div className="credit-card-input-wrapper">
                                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_png,q_auto/v1/attachments/generic_asset/asset/2496be9dfb5983d9de91630d83bb21e0-1682945799754/generic.svg" alt="credit-card-icon" className="card-logo"/>
                                        <input type="text" placeholder="0000 0000 0000 0000"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="expiration-date">
                                        <label htmlFor=""><h6>Expiration date</h6></label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className="security-code">
                                        <label htmlFor=""><h6>Security code</h6></label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>

                                <div>
                                    <div className="first-name">
                                        <label htmlFor=""><h6>First name</h6></label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className="last-name">
                                        <label htmlFor=""><h6>Last name</h6></label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>

                        </article>
                    </form>
                
            </section>
        </section>

    
    )
}