import metaImg from '../assets/img/trusted-by/meta.png'
import googleImg from '../assets/img/trusted-by/google.png'
import netflixImg from '../assets/img/trusted-by/netflix.png'
import pgImg from '../assets/img/trusted-by/p-g.png'
import paypalImg from '../assets/img/trusted-by/paypal.png'

const imgUrls = [googleImg, metaImg, netflixImg, pgImg, paypalImg]

export function TrustedBy() {
    return (
        <section className='full main-layout trusted-by-container'>
            <div className="trusted-by">
                <span>Trusted by:</span>
                <ul className='trusted-by-companies'>
                    {imgUrls.map(url => <img key={url} className='company' src={url}></img>)}
                </ul>
            </div>
        </section>
    )
}