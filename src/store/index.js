import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import carrossel from './reducers/carrossel'

const store = createStore(combineReducers({
    carrossel
}), composeWithDevTools())

export default store