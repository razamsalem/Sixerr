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
                    <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696440866/selling-proposition-still-1400-x1_f6wzho.webp" alt="Video teaser image" />
                </div>
            </div>
        </section>
    )
}