// import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { CallToAction } from "../cmps/CallToAction"
import { gigService } from "../services/gig.service.local"
import { useEffect, useState } from "react"
import { UserPayment } from "./UserPaymant"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
import { addOrder } from "../store/actions/order.actions"

export function Checkout() {
    const [currGig, setCurrGig] = useState(null)
    const { gigId } = useParams()
    const loggedUser = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        onLoadGig()
        showSuccessMsg('hello')
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

    async function onPurchaseOrder() {
        const gig = currGig
        const order = { buyer: loggedUser, seller: gig.owner, gig }
        try {
            const orderToSave = await addOrder({ ...order })
            console.log('added order to storage!', orderToSave)
        } catch (err) {
            console.log('Cannot add order to storage', err)
        }
    }

    return (
        <section className="checkout">
            {currGig !== null && <CallToAction gig={currGig} isPurchase={true} onPurchaseOrder={onPurchaseOrder} />}
            <UserPayment user={loggedUser} />
        </section>
    )
}