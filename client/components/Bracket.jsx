import React, { Component } from 'react'
import Header from './Header'
import Sliders from './Sliders'
import { connect } from 'react-redux'
import { fetchTeams } from '../reducer'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'
import FourthRound from './FourthRound'
import Winner from './Winner'

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
          <SecondRound teams={this.props.teams} />
          <ThirdRound teams={this.props.teams} />
          <FourthRound teams={this.props.teams} />
          <Winner teams={this.props.teams} />
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
