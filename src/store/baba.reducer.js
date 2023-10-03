export const SET_BABAS = 'SET_BABAS'
export const REMOVE_BABA = 'REMOVE_BABA'
export const ADD_BABA = 'ADD_BABA'
export const UPDATE_BABA = 'UPDATE_BABA'
export const UNDO_REMOVE_BABA = 'UNDO_REMOVE_BABA'


const initialState = {
    babas: [],
    lastRemovedBaba: null
}

export function babaReducer(state = initialState, action) {
    var newState = state
    var babas
    var babat
    switch (action.type) {
        case SET_BABAS:
            newState = { ...state, babas: action.babas }
            break
        case REMOVE_BABA:
            const lastRemovedBaba = state.babas.find(baba => baba._id === action.babaId)
            babas = state.babas.filter(baba => baba._id !== action.babaId)
            newState = { ...state, babas, lastRemovedBaba }
            break
        case ADD_BABA:
            newState = { ...state, babas: [...state.babas, action.baba] }
            break
        case UPDATE_BABA:
            babas = state.babas.map(baba => (baba._id === action.baba._id) ? action.baba : baba)
            newState = { ...state, babas }
            break
        case UNDO_REMOVE_BABA:
            if (state.lastRemovedBaba) {
                newState = { ...state, babas: [...state.babas, state.lastRemovedBaba], lastRemovedBaba: null }
            }
            break
        default:
    }
    return newState
}
