import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'
import people from './ducks/people'

// Combine all reducer into a rootReducer
const rootReducer = combineReducers({
    people
})

// create redux-logger
const logger = createLogger({
    // ...options
});

// create (apply necessary middleware etc.) and export default store
export default function configureStore() {
    let store = createStore(
        rootReducer,
        applyMiddleware(thunk, logger),
        //applyMiddleware(thunk)
    )
    return store
}
