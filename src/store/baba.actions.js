import { babaService } from "../services/baba.service.local.js";
import { store } from '../store/store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_BABA, REMOVE_BABA, SET_BABAS, UNDO_REMOVE_BABA, UPDATE_BABA } from "./baba.reducer.js";

// Action Creators:
export function getActionRemoveBaba(babaId) {
    return {
        type: REMOVE_BABA,
        babaId
    }
}
export function getActionAddBaba(baba) {
    return {
        type: ADD_BABA,
        baba
    }
}
export function getActionUpdateBaba(baba) {
    return {
        type: UPDATE_BABA,
        baba
    }
}

export async function loadBabas() {
    try {
        const babas = await babaService.query()
        console.log('Babas from DB:', babas)
        store.dispatch({
            type: SET_BABAS,
            babas
        })

    } catch (err) {
        console.log('Cannot load babas', err)
        throw err
    }

}

export async function removeBaba(babaId) {
    try {
        await babaService.remove(babaId)
        store.dispatch(getActionRemoveBaba(babaId))
    } catch (err) {
        console.log('Cannot remove baba', err)
        throw err
    }
}

export async function addBaba(baba) {
    try {
        const savedBaba = await babaService.save(baba)
        console.log('Added Baba', savedBaba)
        store.dispatch(getActionAddBaba(savedBaba))
        return savedBaba
    } catch (err) {
        console.log('Cannot add baba', err)
        throw err
    }
}

export function updateBaba(baba) {
    return babaService.save(baba)
        .then(savedBaba => {
            console.log('Updated Baba:', savedBaba)
            store.dispatch(getActionUpdateBaba(savedBaba))
            return savedBaba
        })
        .catch(err => {
            console.log('Cannot save baba', err)
            throw err
        })
}

// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveBabaOptimistic(babaId) {
    store.dispatch({
        type: REMOVE_BABA,
        babaId
    })
    showSuccessMsg('Baba removed')

    babaService.remove(babaId)
        .then(() => {
            console.log('Server Reported - Deleted Succesfully');
        })
        .catch(err => {
            showErrorMsg('Cannot remove baba')
            console.log('Cannot load babas', err)
            store.dispatch({
                type: UNDO_REMOVE_BABA
            })
        })
}
