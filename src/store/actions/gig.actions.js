import { gigService } from "../../services/gig.service.local.js"
import { userService } from "../../services/user.service.js"
import { store } from '../../store/store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { ADD_GIG, ADD_TO_CART, CLEAR_CART, REMOVE_GIG, REMOVE_FROM_CART, SET_GIGS, UNDO_REMOVE_GIG, UPDATE_GIG, SET_FILTER_BY } from "../reducers/gig.reducer.js"
const defaultFilter = gigService.getDefaultFilter()

// Action Creators:
export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export function getClearFilter() {
    return defaultFilter
}

export function getActionRemoveGig(gigId) {
    return {
        type: REMOVE_GIG,
        gigId
    }
}

export function getActionAddGig(gig) {
    return {
        type: ADD_GIG,
        gig
    }
}
export function getActionUpdateGig(gig) {
    return {
        type: UPDATE_GIG,
        gig
    }
}

export async function loadGigs() {
    try {
        const { filterBy } = store.getState().gigModule
        console.log();
        const gigs = await gigService.query(filterBy)

        store.dispatch({
            type: SET_GIGS,
            gigs
        })
    } catch (err) {
        console.log('Cannot load gigs', err)
        throw err
    }
}

export async function removeGig(gigId) {
    try {
        await gigService.remove(gigId)
        store.dispatch(getActionRemoveGig(gigId))
    } catch (err) {
        console.log('Cannot remove gig', err)
        throw err
    }
}

export async function addGig(gig) {
    try {
        const savedGig = await gigService.save(gig)
        console.log('Added Gig', savedGig)
        store.dispatch(getActionAddGig(savedGig))
        return savedGig
    } catch (err) {
        console.log('Cannot add gig', err)
        throw err
    }
}

export function updateGig(gig) {
    return gigService.save(gig)
        .then(savedGig => {
            console.log('Updated Gig:', savedGig)
            store.dispatch(getActionUpdateGig(savedGig))
            return savedGig
        })
        .catch(err => {
            console.log('Cannot save gig', err)
            throw err
        })
}

export function addToCart(gig) {
    store.dispatch({
        type: ADD_TO_CART,
        gig
    })
}

export function removeFromCart(gigId) {
    store.dispatch({
        type: REMOVE_FROM_CART,
        gigId
    })
}

export function onRemoveGigOptimistic(gigId) {
    try {
        store.dispatch({
            type: REMOVE_GIG,
            gigId
        })
        showSuccessMsg('Gig removed')
        gigService.remove(gigId)
        console.log('Server Reported - Deleted Succesfully');
    } catch (err) {
        showErrorMsg('Cannot remove gig')
        console.log('Cannot load gigs', err)
        store.dispatch({
            type: UNDO_REMOVE_GIG,
        })
    }
}

// export async function checkout(total) {
//     try {
//         const score = await userService.changeScore(-total)
//         store.dispatch({ type: SET_SCORE, score })
//         store.dispatch({ type: CLEAR_CART })
//         return score
//     } catch (err) {
//         console.log('GigActions: err in checkout', err)
//         throw err
//     }
// }


// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
