import { combineReducers } from 'redux'
import greetings from './greetings'

const greetingApp = combineReducers({
  greetings
})

export default greetingApp
