import React, { Component } from 'react'

class Sliders extends Component {
  constructor() {
    super()
    this.state = {
      val1: 50,
      val2: 50,
      val3: 50,
      val4: 50,
      val5: 50,
    }
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
            id="myRange1"
          />
          <label htmlFor="myRange1">Regular Season Record</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange2"
          />
          <label htmlFor="myRange2">Playoff Experience</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange3"
          />
          <label htmlFor="myRange3">All Star Power</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange4"
          />
          <label htmlFor="myRange4">Individual Stats</label>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange5"
          />
          <label htmlFor="myRange5">History</label>
        </div>
      </div>
    )
  }
}

export default Sliders
