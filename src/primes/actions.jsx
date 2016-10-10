import fetch from 'isomorphic-fetch'
import * as C from './constants'

export function requestPrimes() {
    return { type: C.FETCH_REQUEST }
}

export function receivePrimes(primes) {
    return {
        type: C.RECEIVE,
        primes,
    }
}

export function fetchPrimes() {
    return (dispatch) => {
        dispatch(requestPrimes())

        return fetch('/api/1/primenumbers')
            .then(response => response.json())
            .then(json => dispatch(receivePrimes(json.primes)))
    }
}
