import React  from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ greeting = 'hello' }) => (
  <h2>
    {greeting}
  </h2>
)

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default Greeting
