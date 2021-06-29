import { connect } from 'react-redux'

import App from '../components/App'

function mapStateToProps ({counter}) {
  return {
    counter: counter.counter,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)