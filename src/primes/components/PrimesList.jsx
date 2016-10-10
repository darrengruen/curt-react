import map from 'lodash/map'
import React, { PropTypes } from 'react'

const primes = props => <div className="row">
    <div className="col-xs-12">
        <ul className="list-inline">
            { map(props.primes, (p, ind) => <li key={ ind }>{ p }</li>) }
        </ul>
    </div>
</div>

primes.propTypes = { primes: PropTypes.arrayOf(PropTypes.number).isRequired }

export default primes
