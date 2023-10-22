import { store } from '../../store/store.js'
import { SET_HEADER_POSITION, SET_SUB_HEADER_POSITION, } from '../system.reducer'


export function setHeaderPosition(position) {
    store.dispatch({
        type: SET_HEADER_POSITION,
        position
    })
}

export function setSubHeaderPosition(position) {
    store.dispatch({
        type: SET_SUB_HEADER_POSITION,
        position
    })
}