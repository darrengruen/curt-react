import React, { PropTypes } from 'react'
import { Primes } from '../../primes'

const home = props => <div className="row">
    <div className="col-xs-12">
        <h3>Prime Numbers</h3>
        <p>
            A prime number is a number that is divisible by itself and 1.
            For a very in depth explantion see &nbsp;
            <a href="https://en.wikipedia.org/wiki/Prime_number">this wikipedia article</a>
        </p>
        <Primes { ...props } />
    </div>
</div>

home.propTypes = { children: PropTypes.shape({}).isRequired }

export default home
