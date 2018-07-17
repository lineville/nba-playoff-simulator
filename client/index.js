import React from 'react'
import ReactDOM from 'react-dom'
import Bracket from './components/Bracket'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Bracket />
    </Router>
  </Provider>,
  document.getElementById('app')
)
