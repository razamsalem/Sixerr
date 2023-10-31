import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { setIsStickyFilter } from "../store/actions/system.actions"

export function CategoryNav({ categories, setFilterBy, globalFilterBy, getClearFilter, subHeaderPosition }) {
    const firstChild = useRef()
    const lastChild = useRef()
    const categoriesRef = useRef()
    const [marginLeft, setMarginLeft] = useState(0)
    const [isPrev, setIsPrev] = useState(false)
    const [isNext, setIsNext] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.map(entry => {
                //Nav bar slider Intersection obs
                if (entry.target === firstChild.current) {
                    if (entry.isIntersecting) setIsPrev(false)
                    else setIsPrev(true)
                }
                if (entry.target === lastChild.current) {
                    if (entry.isIntersecting) setIsNext(false)
                    else setIsNext(true)
                }
            }
            )
        }, { threshold: [1, 0.2] })

        observer.observe(firstChild.current)
        observer.observe(lastChild.current)

        return () => {
            observer.disconnect()
        }
    }, [])


    useEffect(() => {
        //Sticky filter-btns Intersection obs
        const observer = new IntersectionObserver((entries) => {

            entries.map(entry => {
                setIsStickyFilter(!entry.isIntersecting)
            })
        }, {})

        observer.observe(categoriesRef.current)

        return () => {
            observer.disconnect()
        }

    }, [])


    useEffect(() => {
        window.addEventListener('resize', resetMargin)

        return () => {
            window.removeEventListener('resize', resetMargin);
        }
    }, [])

    function onSetFilterBy(category) {
        setFilterBy({ ...getClearFilter(), category })
    }

    function onSlideRight() {
        setMarginLeft(margin => margin - 25)
    }

    function onSlideLeft() {
        setMarginLeft(margin => margin + 25)
    }

    function resetMargin() {
        if (window.innerWidth > 1000) setMarginLeft(0)
    }

    return (
        <div ref={categoriesRef} className={`${subHeaderPosition} sub-header-container main-layout full animate__animated animate__flipInX`}>
            <nav className="category-header">

                <button className={`nav-btn left ${!isPrev ? 'hidden' : ''}`} onClick={onSlideLeft}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>


                <ul className="categories-container">
                    {categories.map(c => {
                        const isFirstChild = c.category === categories[0].category
                        return <Link
                            style={isFirstChild ? { 'marginLeft': `${marginLeft}vh` } : null}
                            ref={isFirstChild ? firstChild : lastChild} to={'/gig'} key={c.category}
                            onClick={() => { onSetFilterBy(c.category) }}
                            className={`category-link ${globalFilterBy.category === c.category ? 'selected' : ''}`}>
                            {c.category}</Link>
                    })}
                </ul>
                <button className={`nav-btn right ${!isNext ? 'hidden' : ''}`} onClick={onSlideRight}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button >
            </nav>
        </div >

    )
}