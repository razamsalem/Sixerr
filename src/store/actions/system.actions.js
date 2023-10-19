import { store } from '../../store/store.js'
import { SET_HEADER_TRANSPARENT, SET_HEADER_VISIBLE, SET_SUB_HEADER_TRANSPARENT, SET_SUB_HEADER_VISIBLE } from '../system.reducer'

export function setHeaderTransparent() {

    store.dispatch({
        type: SET_HEADER_TRANSPARENT
    })
}

export function setHeaderVisible() {

    store.dispatch({
        type: SET_HEADER_VISIBLE
    })
}

export function setSubHeaderTransparent() {

    store.dispatch({
        type: SET_SUB_HEADER_TRANSPARENT
    })
}

export function setSubHeaderVisible() {

    store.dispatch({
        type: SET_SUB_HEADER_VISIBLE
    })
}