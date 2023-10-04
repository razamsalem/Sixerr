import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/img/logo.png'
import { CHANGE_COUNT } from '../store/user.reducer'

import { utilService } from '../services/util.service'
import { Hero } from '../cmps/Hero'


export function HomePage() {
    const dispatch = useDispatch()



    return (
        <section>
            <Hero />
        </section >
    )
}