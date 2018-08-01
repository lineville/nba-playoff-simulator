import React, { Component } from 'react'
import Header from './Header'
import Round from './Round'
import Sliders from './Sliders'
import { connect } from 'react-redux'
import { fetchTeams } from '../reducer'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'
import FourthRound from './FourthRound'

class Bracket extends Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return (
      <div>
        <Header />
        <Sliders />
        {/* <Round /> */}
        <main id="tournament">
          <FirstRound teams={this.props.teams} />
          <SecondRound />
          <ThirdRound />
          <FourthRound />
        </main>
      </div>
    )
  }
}

const mapState = state => ({
  teams: state.teams,
})

const mapDispatch = dispatch => ({
  loadTeams: () => dispatch(fetchTeams()),
})

export default connect(
  mapState,
  mapDispatch
)(Bracket)
