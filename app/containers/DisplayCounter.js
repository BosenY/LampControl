import DisplayCounter from '../components/DisplayCounter.js'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    counter: state.counter,
    message: state.message
  }
}

// Action Creator

export default connect(
  mapStateToProps,
)(DisplayCounter)
 

// export default App