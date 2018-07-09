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
          2018 NBA Playoffs Simulator
        </a>
      </nav>
    </div>
  )
}

export default Header
