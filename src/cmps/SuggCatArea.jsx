import graphicSvg from '../assets/img/category-icons/graphic.svg'
import digitalSvg from '../assets/img/category-icons/digital.svg'
import writingSvg from '../assets/img/category-icons/writing.svg'
import videoSvg from '../assets/img/category-icons/video.svg'
import musicSvg from '../assets/img/category-icons/music.svg'
import programmingSvg from '../assets/img/category-icons/programming.svg'
import businessSvg from '../assets/img/category-icons/business.svg'
import lifestyleSvg from '../assets/img/category-icons/lifestyle.svg'
import dataSvg from '../assets/img/category-icons/data.svg'
import photographySvg from '../assets/img/category-icons/photography.svg'

export function SuggCatArea() {
    const categoryIcons = [graphicSvg, digitalSvg, writingSvg, videoSvg, musicSvg, programmingSvg, businessSvg, lifestyleSvg, dataSvg, photographySvg]
    const categoryTexts = ["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle", "Data", "Photography"]

    return (
        <section className='categories-section'>
            <h2>You need it, we've got it</h2>
            <div className='categories'>
                {categoryIcons.map((category, idx) => (
                    <div key={idx}>
                        <img src={category} alt={`Category icon ${idx}`} />
                        <p>{categoryTexts[idx]}</p>
                    </div>
                ))}
            </div>
        </section>
    )

}