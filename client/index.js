import React from 'react'
import ReactDOM from 'react-dom'
import Bracket from './components/Bracket'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Bracket />
  </Router>,
  document.getElementById('app')
)
