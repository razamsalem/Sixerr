import { useState } from 'react'
import { Hero } from '../cmps/Hero'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/img/logo.png'
import { CHANGE_COUNT } from '../store/user.reducer'
// import { Carousel } from 'react-responsive-carousel';
import { utilService } from '../services/util.service'
import { SellingArea } from './SellingArea'



export function HomePage() {



    return (
        <section className='home main-layout full'>
            <Hero />
            <SellingArea />
        </section >
    )
}