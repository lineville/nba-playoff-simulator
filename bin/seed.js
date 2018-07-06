#!/usr/bin/env node
const { db, Player, Team } = require('../server/db')
const { teams, allPlayers } = require('./teams/index')

const seed = async () => {
  await db.sync({ force: true })

  await Team.bulkCreate(teams) //create all the teams
  await Player.bulkCreate(allPlayers) //create all the players

  //Close the db and log successful seed
  db.close()
  console.log(`
  ~~~~~~~~~~~~~~~~

  Seed successful!

  ~~~~~~~~~~~~~~~~
  `)
}

seed().catch(err => {
  db.close()
  console.log(`Error seeding:

    ${err.message}

    ${err.stack}

    `)
})
