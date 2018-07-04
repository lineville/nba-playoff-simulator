#!/usr/bin/env node
const { db, Player, Team } = require('../server/db')
const { raptors, raptorsPlayers } = require('./teams/raptors')
const { celtics, celticsPlayers } = require('./teams/celtics')

const seed = async () => {
  await db.sync({ force: true })

  await Team.bulkCreate([raptors, celtics])

  await Player.bulkCreate(raptorsPlayers)
  await Player.bulkCreate(celticsPlayers)

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
