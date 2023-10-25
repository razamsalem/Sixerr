import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Hero } from '../cmps/Hero'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'

import { setHeaderPosition, setSubHeaderPosition, } from '../store/actions/system.actions'

export function HomePage() {
    const revealHeaderRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.map(entry => {

                if (entry.intersectionRatio === 0) {
                    setHeaderPosition('visible')
                    setSubHeaderPosition('visible')
                }

                if (entry.intersectionRatio <= 0.5) {
                    setSubHeaderPosition('visible')

                } else if (entry.intersectionRatio <= 0.7) {
                    setHeaderPosition('visible')
                }
                else {
                    setHeaderPosition('transparent')
                    setSubHeaderPosition('transparent')
                }
            })
        }, { threshold: [0.5, 0.7, 1] })

        observer.observe(revealHeaderRef.current)

    }, [])


    return (
        <section className='home main-layout full'>
            <Hero revealHeaderRef={revealHeaderRef} />
            <TrustedBy />
            <h1 className='title-slide'>Popular services</h1>
            <SimpleSlider />
            <SellingArea />
        </section >
    )
}