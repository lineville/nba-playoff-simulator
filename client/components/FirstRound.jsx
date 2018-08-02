import React from 'react'
import Team from './Team'

const FirstRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-1">
      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[0]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[1]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[6]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[7]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[4]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[5]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[2]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[3]} />
      </li>
      <li className="spacer">&nbsp;</li>
      <br />
      <li className="spacer">&nbsp;</li>
      <li className="game game-top">
        <Team team={teams[8]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[9]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[14]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[15]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[12]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[13]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[10]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[11]} />
      </li>
      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default FirstRound

/* <ul className="round round-1">
      <Matchup topTeam={teams[0]} bottomTeam={teams[1]} />
      <Matchup topTeam={teams[6]} bottomTeam={teams[7]} />
      <Matchup topTeam={teams[4]} bottomTeam={teams[5]} />
      <Matchup topTeam={teams[2]} bottomTeam={teams[3]} />
      <Matchup topTeam={teams[8]} bottomTeam={teams[9]} />
      <Matchup topTeam={teams[14]} bottomTeam={teams[15]} />
      <Matchup topTeam={teams[12]} bottomTeam={teams[13]} />
      <Matchup topTeam={teams[10]} bottomTeam={teams[11]} />
      <li className="spacer">&nbsp;</li>
    </ul> */
