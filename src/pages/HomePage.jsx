import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Hero } from '../cmps/Hero'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'
import { setHeaderTransparent, setHeaderVisible } from '../store/actions/system.actions'


export function HomePage() {
    const sellingRef = useRef()
    const [isRefVisible, setIsRefVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsRefVisible(entry.isIntersecting)
        })

        observer.observe(sellingRef.current)
    }, [])


    isRefVisible ? setHeaderVisible() : setHeaderTransparent()

    return (
        <section className='home main-layout full'>
            <Hero />
            <TrustedBy />
            <SellingArea sellingRef={sellingRef} />
            <SimpleSlider />
        </section >
    )
}