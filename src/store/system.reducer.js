export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_HEADER_TRANSPARENT = 'SET_HEADER_TRANSPARENT'
export const SET_HEADER_VISIBLE = 'SET_HEADER_VISIBLE'

const initialState = {
  isLoading: false,
  isTransparentHeader: false,
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_HEADER_TRANSPARENT:
      return { ...state, isTransparentHeader: true }
    case SET_HEADER_VISIBLE:
      return { ...state, isTransparentHeader: false }
    default: return state
  }
}
