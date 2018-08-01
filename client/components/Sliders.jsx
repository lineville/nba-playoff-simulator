import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="slider1">Slider 1</label>
          <input type="range" className="form-control-range" id="slider1" />
        </div>
        <div className="form-group">
          <label htmlFor="slider2">Slider 2</label>
          <input type="range" className="form-control-range" id="slider2" />
        </div>
        <div className="form-group">
          <label htmlFor="slider3">Slider 3</label>
          <input type="range" className="form-control-range" id="slider3" />
        </div>
        <div className="form-group">
          <label htmlFor="slider4">Slider 4</label>
          <input type="range" className="form-control-range" id="slider4" />
        </div>
        <div className="form-group">
          <label htmlFor="slider5">Slider 5</label>
          <input type="range" className="form-control-range" id="slider5" />
        </div>
      </form>
    )
  }
}

export default Slider
