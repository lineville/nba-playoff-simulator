import React from 'react'
import { RingLoader } from 'react-spinners'

const RunSimulation = ({ run, isLoading }) => {
  return (
    <button className="btn btn-outline-primary center" onClick={run}>
      Run Simulation{' '}
      <div className="sweet-loading">
        <RingLoader color="#123abc" loading={isLoading} />
      </div>
    </button>
  )
}

export default RunSimulation
