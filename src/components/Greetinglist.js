import React from 'react'
import PropTypes from 'prop-types'
import Greeting from './Greeting'

const Greetinglist = ({ greetings }) => (
  <ul>
    {greetings.map(greeting => (
      <Greeting {...greeting} />
    ))}
  </ul>
)

Greetinglist.propTypes = {
  greetings: PropTypes.arrayOf(
    PropTypes.shape({
      greeting: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}


export default Greetinglist
