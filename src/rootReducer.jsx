import { combineReducers } from 'redux'
import { reducers as primes } from './primes'

const rootReducer =  combineReducers({ primes })

export default rootReducer
