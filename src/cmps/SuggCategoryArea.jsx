const graphicSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg'
const digitalSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg'
const writingSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg'
const videoSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg'
const musicSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg'
const programmingSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg'
const businessSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg'
const lifestyleSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg'
const dataSvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg'
const photographySvg = 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg'

export function SuggCategoryArea() {
    const categoryIcons = [graphicSvg, digitalSvg, writingSvg, videoSvg, musicSvg, programmingSvg, businessSvg, lifestyleSvg, dataSvg, photographySvg]
    const categoryTexts = ["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle", "Data", "Photography"]

    return (
        <section className='categories-section'>
            <h2>You need it, we've got it</h2>
            <ul className='categories-list flex'>
                {categoryIcons.map((category, idx) => (
                    <li className="category" key={idx}>
                        <img src={category} alt={`Category icon ${idx}`} />
                        <p>{categoryTexts[idx]}</p>
                    </li>
                ))}
            </ul>
        </section>
    )

}