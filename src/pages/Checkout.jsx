// import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { CallToAction } from "../cmps/CallToAction"
import { gigService } from "../services/gig.service.local"

export function Checkout() {
    const { gigId } = useParams()
    // console.log(gigId)
    async function onLoadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setGig(desiredGig)
        } catch (err) {
            console.log('Had issues in gig details ->', err)
            showErrorMsg('Oops cannot load gig')
            navigate('/')
        }
    }


    return (
        <section className="checkout">
            {/* {!cart && <h1>Oops, no chosen services..</h1>} */}
            {/* {cart && <CallToAction gig={cart} isPurchase={true} />} */}
        </section>
    )
}