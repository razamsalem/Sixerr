import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Hero } from '../cmps/Hero'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'

import { setHeaderPosition, setSubHeaderPosition, } from '../store/actions/system.actions'

export function HomePage() {
    const revealHeaderRef = useRef()
    const prevBtnRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.map(entry => {
                console.log(entry.boundingClientRect)

                if (entry.boundingClientRect.bottom < 0) {
                    setHeaderPosition('visible')
                    setSubHeaderPosition('visible')
                } else {
                    setHeaderPosition('transparent')
                    setSubHeaderPosition('transparent')
                }
            })
        })

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