import * as C from './constants'

const primes = (state = { primes: [], isFetching: false }, action) => {
    switch (action.type) {
    case C.FETCH_REQUEST:
        return Object.assign({}, state, { isFetching: true })
    case C.RECEIVE:
        return Object.assign({}, state, {
            isFetching: false,
            primes: action.primes,
        })
    default:
        return state
    }
}

export default primes
