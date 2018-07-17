import React, { Component } from 'react'
import Header from './Header'
import Round from './Round'
import { connect } from 'react-redux'
import { fetchTeams } from '../reducer'

class Bracket extends Component {
  render() {
    console.log('tried to render bracket')
    return (
      <div>
        <Header />
        <Round />
      </div>
    )
  }
}

export default Bracket
