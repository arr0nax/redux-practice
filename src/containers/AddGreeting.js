import React from 'react'
import { connect } from 'react-redux'
import { addGreeting } from '../actions'

let AddGreeting = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addGreeting(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Greeting
        </button>
      </form>
    </div>
  )
}

AddGreeting = connect()(AddGreeting)

export default AddGreeting
