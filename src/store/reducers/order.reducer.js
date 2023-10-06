export const SET_ORDERS = 'SET_ORDERS'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const UNDO_REMOVE_ORDER = 'UNDO_REMOVE_ORDER'


const initialState = {
    orders: [],
    lastRemovedOrder: null,
    // filterBy: orderService.getDefaultFilter()
}

export function orderReducer(state = initialState, action) {
    var newState = state
    var orders
    switch (action.type) {
        case SET_ORDERS:
            newState = { ...state, orders: action.orders }
            break
        case REMOVE_ORDER:
            const lastRemovedOrder = state.orders.find(order => order._id === action.orderId)
            orders = state.orders.filter(order => order._id !== action.orderId)
            newState = { ...state, orders, lastRemovedOrder }
            break
        case ADD_ORDER:
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        case UPDATE_ORDER:
            orders = state.orders.map(order => (order._id === action.order._id) ? action.order : order)
            newState = { ...state, orders }
            break
        case UNDO_REMOVE_ORDER:
            if (state.lastRemovedOrder) {
                newState = { ...state, orders: [...state.orders, state.lastRemovedOrder], lastRemovedOrder: null }
            }
            break
    }
    return newState
}
