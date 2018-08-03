import React from 'react'
import { RingLoader } from 'react-spinners'
const RunSimulation = ({ run, loading }) => {
  return (
    <button className="btn btn-outline-primary center" onClick={run}>
      <div className="sweet-loading">
        Run Simulation
        <RingLoader color="#123abc" loading={loading} />
      </div>
    </button>
  )
}

export default RunSimulation
