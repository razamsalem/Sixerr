import { store } from '../../store/store.js'
import { HIDE_BACKDROP, SET_HEADER_POSITION, SET_STICKY_FILTER, SET_SUB_HEADER_POSITION, SHOW_BACKDROP, } from '../system.reducer'

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

export function setIsStickyFilter(isSticky) {
    store.dispatch({
        type: SET_STICKY_FILTER,
        isSticky
    })
}

export function showBackdrop() {
    store.dispatch({
        type: SHOW_BACKDROP,
    })
}

export function hideBackdrop() {
    store.dispatch({
        type: HIDE_BACKDROP,
    })
}