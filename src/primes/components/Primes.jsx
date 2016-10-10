import React, { PropTypes } from 'react'
import * as actions from '../actions'
import PrimesList from './PrimesList'

const primes = (props) => {
    if (props.state.primes.primes.length) {
        return (<div className="row">
            <div className="col-xs-12">
                <h3>Here is a list of the first 1000 Prime numbers</h3>
                <button
                    className="btn btn-danger"
                    onClick={ () => props.dispatch(actions.clearPrimes()) }
                    type="button"
                >
                    Clear List
                </button>
                <div className="well well-sm">
                    <PrimesList primes={ props.state.primes.primes } />
                </div>
            </div>
        </div>)
    }

    return (
        <div className="row">
            <div className="col-xs-12">
                <p>No Primes Currently</p>
                <button
                    className="btn btn-success"
                    onClick={ () => props.dispatch(actions.fetchPrimes()) }
                    type="button"
                >
                    Load Primes
                </button>
            </div>
        </div>
    )
}

primes.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.shape({
        primes: PropTypes.shape({
            primes: PropTypes.arrayOf(PropTypes.number),
        }),
    }).isRequired,
}

export default primes
