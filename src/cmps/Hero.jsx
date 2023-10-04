import { useEffect, useState } from "react"

export function Hero() {
    const presenters =
        [{ name: 'colin', bgColor: '#A7445A', imgUrl: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1696433830/colin-2x_fzr7g0.jpg' },
        { name: 'jordan', bgColor: '#0F4926', imgUrl: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1696433829/jordan-2x_vk2hcs.webp' },
        { name: 'jenny', bgColor: '#0A4226', imgUrl: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1696433829/jenny-2x_y42jui.jpg' },
        { name: 'scarllet', bgColor: '#5F1628', imgUrl: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1696433829/scarlett-2x_vjuuid.jpg' },
        { name: 'christina', bgColor: '#AD3906', imgUrl: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1696433829/christina-2x_d5co59.webp' }]
    const [currPresenter, setCurrPresenter] = useState(presenters[0])

    useEffect(() => {
        const interval = setInterval(() => {
            getNextPresenter()
        }, 4500);
        return () => clearInterval(interval);
    }, [])

    function getNextPresenter() {
        setCurrPresenter(prevPresenter => {
            let presenterIdx = (presenters.findIndex(p => p === prevPresenter))
            const nextPresenterIdx = (presenterIdx + 1) % presenters.length
            const nextPresenter = presenters[nextPresenterIdx]
            return nextPresenter
        });
    }

    return (
        <section className="hero full">
            {presenters.map(presenter => {
                return (
                    <article className="hero-img-container" style={{ backgroundColor: `${presenter.bgColor}` }}>
                        <div className={`cover-img ${presenter.name === currPresenter.name ? 'visible' : ''}`} style={
                            { background: `url(${presenter.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                        } />
                    </article>
                )

            })}
        </section>
    )
}

