export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_HEADER_POSITION = 'SET_HEADER_POSITION'
export const SET_SUB_HEADER_POSITION = 'SET_SUB_HEADER_POSITION'
export const SET_STICKY_FILTER = 'SET_STICKY_FILTER'
export const SHOW_BACKDROP = 'SHOW_BACKDROP'
export const HIDE_BACKDROP = 'HIDE_BACKDROP'

const initialState = {
  isLoading: false,
  headerPosition: 'static',
  subHeaderPosition: 'static',
  stickyFilter: false,
  backdropShown: false
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_HEADER_POSITION:
      return { ...state, headerPosition: action.position }
    case SET_SUB_HEADER_POSITION:
      return { ...state, subHeaderPosition: action.position }
    case SET_STICKY_FILTER: {
      return { ...state, stickyFilter: action.isSticky }
    }
    case SHOW_BACKDROP:
      return { ...state, backdropShown: true }
    case HIDE_BACKDROP:
      return { ...state, backdropShown: false }
    default: return state
  }
}
