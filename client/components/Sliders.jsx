import React, { Component } from 'react'
import { sendUserData } from '../reducer'
import { connect } from 'react-redux'

class Sliders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regSeason: 50,
      points: 50,
      assists: 50,
      rebounds: 50,
      allstar: 50,
      history: 50,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.id]: Number(ev.target.value),
    })
  }

  render() {
    return (
      <div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="regSeason"
            id="regSeason"
            value={this.state.regSeason}
            onChange={this.handleChange}
          />
          <label htmlFor="regSeason">Regular Season Record</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="points"
            id="points"
            value={this.state.points}
            onChange={this.handleChange}
          />
          <label htmlFor="points">Points</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="assists"
            id="assists"
            value={this.state.assists}
            onChange={this.handleChange}
          />
          <label htmlFor="assists">Assists</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="rebounds"
            id="rebounds"
            value={this.state.rebounds}
            onChange={this.handleChange}
          />
          <label htmlFor="rebounds">Rebounds</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="allstar"
            id="allstar"
            value={this.state.allstar}
            onChange={this.handleChange}
          />
          <label htmlFor="allstar">All Star Power</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="history"
            id="history"
            value={this.state.history}
            onChange={this.handleChange}
          />
          <label htmlFor="history">Historical PLayoff Success</label>
        </div>
        <button
          className="btn btn-outline-success center"
          onClick={() => this.props.postUserData(this.state)}
        >
          Save Settings
        </button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  postUserData: data => dispatch(sendUserData(data)),
})

export default connect(
  null,
  mapDispatch
)(Sliders)
