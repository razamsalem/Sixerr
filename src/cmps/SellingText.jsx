export function SellingText({ budgetRef }) {

    const SellingText = [
        { title: 'Stick to your budget', content: 'Find the right service for every price point. No hourly rates, just project-based pricing.' },
        { title: 'Get quality work done quickly', content: 'Hand your project over to a talented freelancer in minutes, get long-lasting results.' },
        { title: 'Pay when you\'re happy', content: 'Upfront quotes mean no surprises. Payments only get released when you approve.' },
        { title: 'Count on 24/7 support', content: 'Our round-the-clock support team is available to help anytime, anywhere.' }
    ]

    const img = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696437334/Screenshot_2023-10-04_190214-removebg-preview_h6nudi.png'

    return (
        <ul ref={budgetRef} className="selling-text">
            {SellingText.map((text, idx) =>
                <li key={idx}>
                    <span>
                        <img src={img} alt="Check circle icon" />
                        <h6 className="budget">{text.title}</h6>
                    </span>
                    <div className="txt">
                        <p>{text.content}</p>
                    </div>
                </li>
            )}
        </ul>
    )
}