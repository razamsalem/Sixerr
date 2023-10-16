import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hero } from '../cmps/Hero'
import logo from '../assets/img/logo.png'
import { CHANGE_COUNT } from '../store/user.reducer'
import { utilService } from '../services/util.service'
import { SellingArea } from './SellingArea'
import { TrustedBy } from '../cmps/TrustedBy'
import { SimpleSlider } from '../cmps/SimpleSlider'


export function HomePage() {

    return (
        <section className='home main-layout full'>
            <Hero />
            <TrustedBy />
            <SellingArea />
            <SimpleSlider/>
        </section >
    )
}