// import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { CallToAction } from "../cmps/CallToAction"
import { gigService } from "../services/gig.service.local"
import { useEffect, useState } from "react"
import { UserPayment } from "./UserPaymant"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
import { addOrder } from "../store/actions/order.actions"

export function Checkout() {
    const navigate = useNavigate()
    const [currGig, setCurrGig] = useState(null)
    const { gigId } = useParams()
    const loggedUser = useSelector(storeState => storeState.userModule.user)

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
        }
    }

    async function onPurchaseOrder() {
        const gig = currGig
        const order = { buyer: loggedUser, seller: gig.owner, gig, status: 'pending' }
        try {
            const orderToSave = await addOrder({ ...order })
            navigate('/order')
            showSuccessMsg(`Purchased service successfully!`)
        } catch (err) {
            console.log('Cannot add order to storage', err)
            if (err.includes('logged')) {
                showErrorMsg('You must be logged in to purchase services..')

            }

        }
    }

    return (
        <section className="checkout">
            {currGig !== null && <CallToAction gig={currGig} isPurchase={true} onPurchaseOrder={onPurchaseOrder} />}
            <UserPayment user={loggedUser} />
        </section>
    )
}