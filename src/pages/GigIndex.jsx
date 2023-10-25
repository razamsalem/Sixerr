import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, setFilterBy } from '../store/actions/gig.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.local.js'
import { GigList } from '../cmps/GigList.jsx'
import { DynamicBtn } from '../cmps/DynamicBtn.jsx'
import { useSearchParams } from "react-router-dom"


export function GigIndex() {
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    let [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setFilterBy(Object.fromEntries([...searchParams]))
    }, [searchParams])


    useEffect(() => {
        loadGigs()
        setSearchParams(filterBy)
    }, [filterBy])


    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        try {
            const savedGig = await updateGig(gigToSave)
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }
    }

    return (
        <div>
            <DynamicBtn />
            <main>
                <GigList gigs={gigs} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} />
            </main>
        </div>
    )
}