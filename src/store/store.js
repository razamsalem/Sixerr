import { createStore, combineReducers } from 'redux'

import { carReducer } from './car.reducer.js'
import { gigReducer } from './reducers/gig.reducer.js'
import { babaReducer } from './baba.reducer.js'
import { userReducer } from './user.reducer.js'
import { reviewReducer } from './review.reducer'
import { systemReducer } from './system.reducer'

const rootReducer = combineReducers({
    carModule: carReducer,
    babaModule: babaReducer,
    userModule: userReducer,
    systemModule: systemReducer,
    reviewModule: reviewReducer,
    gigModule: gigReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


store.subscribe(() => {
    console.log('storeState:\n', store.getState())
})



