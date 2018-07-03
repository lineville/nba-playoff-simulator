#!/usr/bin/env node

const hipsum = require('lorem-hipsum')
const { db, Player, Team } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })

  //Create a bunch of players and teams
  const celtics = await Team.create({
    name: 'Celtics',
    city: 'Boston',
    conference: 'east',
    seed: '2',
  })

  const rondo = await Player.create({
    name: 'Rajon Rondo',
    pointsPerGame: 15,
    assistsPerGame: 12,
    reboundsPerGame: 8,
    playoffExperience: 5,
    teamId: celtics.id,
  })
  db.close()
  console.log(`Seed successful!`)
}

seed().catch(err => {
  db.close()
  console.log(`Error seeding:

    ${err.message}

    ${err.stack}

    `)
})
