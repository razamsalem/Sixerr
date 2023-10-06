// import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { CallToAction } from "../cmps/CallToAction"
import { gigService } from "../services/gig.service.local"
import { useEffect, useState } from "react"

export function Checkout() {
    const [currGig, setCurrGig] = useState(null)
    const { gigId } = useParams()

    useEffect(() => {
        onLoadGig()
    }, [])

    async function onLoadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setCurrGig(desiredGig)
        } catch (err) {
            console.log('Had issues in gig details ->', err)
            showErrorMsg('Oops cannot load gig')
            // navigate('/')
        }
    }

    return (
        <section className="checkout">
            {currGig !== null && <CallToAction gig={currGigע} />}
            {/* {!cart && <h1>Oops, no chosen services..</h1>} */}
            {/* {cart && <CallToAction gig={cart} isPurchase={true} />} */}
        </section>
    )
}