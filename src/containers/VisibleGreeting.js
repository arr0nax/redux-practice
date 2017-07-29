import { connect } from 'react-redux'
import Greetinglist from '../components/Greetinglist'

const getVisibleGreetings = (greetings) => {
  return greetings
}

const mapStateToProps = state => {
  return {
    greetings: getVisibleGreetings(state.greetings)
  }
}

const VisibleGreeting = connect(
  mapStateToProps
)(Greetinglist)

export default VisibleGreeting
