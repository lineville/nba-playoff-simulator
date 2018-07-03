import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentRound: 1,
      // will need to store the data from the sliders
    }
  }

  //Component did mount should render the round 1 bracket

  render() {
    // Should render the full bracket and form component
    return (
      <Router>
        <h1>WELCOME TO NBA SIMULATOR!</h1>
      </Router>
    )
  }
}
