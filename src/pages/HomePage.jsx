import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Hero } from '../cmps/Hero'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'

import { setHeaderPosition, setSubHeaderPosition, } from '../store/actions/system.actions'

export function HomePage() {
    const sellingRef = useRef()
    const budgetRef = useRef()

    const [isRefVisible, setIsRefVisible] = useState(false)
    const [isSecondRefVisible, setIsSecondRefVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.map(entry => {
                if (Array.from(entry.target.classList).includes("selling-container")) setIsRefVisible(entry.isIntersecting)
                if (Array.from(entry.target.classList).includes("selling-text")) setIsSecondRefVisible(entry.isIntersecting)
            })
        })

        observer.observe(sellingRef.current)
        observer.observe(budgetRef.current)

        isRefVisible ? setHeaderPosition('visible') : setHeaderPosition('transparent')
        isSecondRefVisible ? setSubHeaderPosition('visible') : setSubHeaderPosition('transparent')

    }, [isRefVisible, isSecondRefVisible])

    return (
        <section className='home main-layout full'>
            <Hero />
            <TrustedBy />
            <SellingArea sellingRef={sellingRef} budgetRef={budgetRef} />
            <h1 className='title-slide'>Popular services</h1>
            <SimpleSlider />
        </section >
    )
}