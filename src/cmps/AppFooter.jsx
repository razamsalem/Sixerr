
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { removeFromCart, checkout } from '../store/car.actions'
import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {
    // const [isCartShown, setIsCartShown] = useState(false)
    // const cart = useSelector(storeState => storeState.carModule.cart)
    // const count = useSelector(storeState => storeState.userModule.count)
    // const cartTotal = cart.reduce((acc, car) => acc + car.price, 0)

    // async function onCheckout() {
    //     try {
    //         const score = await checkout(cartTotal)
    //         showSuccessMsg(`Charged, your new score: ${score.toLocaleString()}`)
    //     } catch(err) {
    //         showErrorMsg('Cannot checkout')
    //     }

    return (
        <footer className="app-footer main-layout flex">
            <div className="left flex with-border-top">
                <span className="sixerr-logo">sixerr<span className='dot'>.</span></span>
                <p className='empty'>© Fiverr International Ltd. 2023</p>
            </div>
            <div className="right"></div>
        </footer>
            // <UserMsg /> 
    )
}