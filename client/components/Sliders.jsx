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
      seed: 50,
      playerEfficiency: 50,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.clear = this.clear.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.id]: Number(ev.target.value),
    })
  }

  handleSave(ev) {
    this.props.postUserData(this.state)
  }

  async clear() {
    await this.setState({
      regSeason: 50,
      points: 50,
      assists: 50,
      rebounds: 50,
      seed: 50,
      allstar: 50,
      history: 50,
      playerEfficiency: 50,
    })
    this.handleSave()
  }

  render() {
    return (
      <div>
        <label htmlFor="regSeason">Regular Season Record</label>
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
        </div>
        <label htmlFor="points">Points</label>
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
        </div>
        <label htmlFor="assists">Assists</label>
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
        </div>
        <label htmlFor="rebounds">Rebounds</label>
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
        </div>
        <label htmlFor="playerEfficiency">Player Efficiency</label>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="playerEfficiency"
            id="playerEfficiency"
            value={this.state.playerEfficiency}
            onChange={this.handleChange}
          />
        </div>
        <label htmlFor="seed">Seed</label>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            name="seed"
            id="seed"
            value={this.state.seed}
            onChange={this.handleChange}
          />
        </div>
        <label htmlFor="allstar">All Star Power</label>
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
        </div>
        <label htmlFor="history">Historical Playoff Success</label>
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
        </div>
        <button
          className="btn btn-outline-success center"
          onClick={this.handleSave}
        >
          Save Settings
        </button>
        <button className="btn btn-outline-info center" onClick={this.clear}>
          Clear Settings
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
