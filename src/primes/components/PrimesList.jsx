import map from 'lodash/map'
import React, { PropTypes } from 'react'

const primes = props => <div className="row">
    <div className="col-xs-12">
        { map(props.primes, (p, ind) => <span key={ ind } className="badge">{ p }</span>) }
    </div>
</div>

primes.propTypes = { primes: PropTypes.arrayOf(PropTypes.number).isRequired }

export default primes
