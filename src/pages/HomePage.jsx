import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Hero } from '../cmps/Hero'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'

import { setHeaderPosition, setSubHeaderPosition, } from '../store/actions/system.actions'

export function HomePage() {
    const popularRef = useRef()
    const prevBtnRef = useRef()

    const [isRefVisible, setIsRefVisible] = useState(false)
    const [isSecondRefVisible, setIsSecondRefVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.map(entry => {
                if (Array.from(entry.target.classList).includes("title-slide")) setIsRefVisible(entry.isIntersecting)
                if (Array.from(entry.target.classList).includes("gallry-btn-prev")) setIsSecondRefVisible(entry.isIntersecting)
            })
        })

        if (window.scrollY < 1000) {
            observer.observe(popularRef.current)
            observer.observe(prevBtnRef.current)
        }

        console.log(window.scrollY)

        isRefVisible ? setHeaderPosition('visible') : setHeaderPosition('transparent')
        isSecondRefVisible ? setSubHeaderPosition('visible') : setSubHeaderPosition('transparent')

    }, [isRefVisible, isSecondRefVisible, window.scrollY])


    return (
        <section className='home main-layout full'>
            <Hero />
            <TrustedBy />
            <h1 ref={popularRef} className='title-slide'>Popular services</h1>
            <SimpleSlider prevBtnRef={prevBtnRef} />
            <SellingArea />
        </section >
    )
}