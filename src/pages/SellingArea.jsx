import { SellingText } from "../cmps/SellingText";

export function SellingArea() {

    return (
        <section className="selling-container full">
                <div className="selling">
                    <div className="left-info">
                        <h2>The best part? Everything.</h2>
                        <SellingText txt={'Stick to your budget'} />
                    </div>

                    <div className="right-info">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="Video teaser image" />
                    </div>
                </div>

        </section>
    )
}