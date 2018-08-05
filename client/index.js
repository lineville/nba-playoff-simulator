import React from 'react'
import ReactDOM from 'react-dom'
import Bracket from './components/Bracket'
import TeamStats from './components/TeamStats'
import Player from './components/Player'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Bracket} />
        <Route exact path="/teams/:teamId" component={TeamStats} />
        <Route path="/teams/:teamId/:playerId" component={Player} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
)
