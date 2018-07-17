import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="nba-logo.png"
            id="nba-logo"
            className="d-inline-block align-top"
            alt=""
          />
          <h3>2018 NBA Playoffs Simulator</h3>
        </a>
      </nav>
    </div>
  )
}

export default Header
