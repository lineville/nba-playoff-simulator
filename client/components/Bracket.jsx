import React, { Component } from 'react'
import Header from './Header'
import Round from './Round'
import Sliders from './Sliders'
import { connect } from 'react-redux'
import { fetchTeams } from '../reducer'

class Bracket extends Component {
  render() {
    console.log('tried to render bracket')
    return (
      <div>
        <Header />
        <Sliders />
        <Round />
      </div>
    )
  }
}

export default Bracket
