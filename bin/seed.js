#!/usr/bin/env node

const hipsum = require('lorem-hipsum')
const { db, Player, Team } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })

  //Create Teams for 2018 Playoffs
  const raptors = await Team.create({
    name: 'Raptors',
    city: 'Toronto',
    conference: 'east',
    seed: 1,
  })

  const celtics = await Team.create({
    name: 'Celtics',
    city: 'Boston',
    conference: 'east',
    seed: 2,
  })

  const sixers = await Team.create({
    name: '76ers',
    city: 'Philadelphia',
    conference: 'east',
    seed: 3,
  })

  const cavaliers = await Team.create({
    name: 'Cavaliers',
    city: 'Cleveland',
    conference: 'east',
    seed: 4,
  })

  const pacers = await Team.create({
    name: 'Pacers',
    city: 'Indiana',
    conference: 'east',
    seed: 5,
  })

  const heat = await Team.create({
    name: 'Heat',
    city: 'Miami',
    conference: 'east',
    seed: 6,
  })

  const bucks = await Team.create({
    name: 'Bucks',
    city: 'Milwaukee',
    conference: 'east',
    seed: 7,
  })

  const wizards = await Team.create({
    name: 'Wizards',
    city: 'Washington',
    conference: 'east',
    seed: 8,
  })

  const rockets = await Team.create({
    name: 'Rockets',
    city: 'Houston',
    conference: 'west',
    seed: 1,
  })

  const warriors = await Team.create({
    name: 'Warriors',
    city: 'Golden State',
    conference: 'west',
    seed: 2,
  })

  const trailblazers = await Team.create({
    name: 'Trail Blazers',
    city: 'Portland',
    conference: 'west',
    seed: 3,
  })

  const jazz = await Team.create({
    name: 'Jazz',
    city: 'Utah',
    conference: 'west',
    seed: 4,
  })

  const thunder = await Team.create({
    name: 'Thunder',
    city: 'Oklahoma City',
    conference: 'west',
    seed: 5,
  })

  const pelicans = await Team.create({
    name: 'Pelicans',
    city: 'New Orleans',
    conference: 'west',
    seed: 6,
  })

  const spurs = await Team.create({
    name: 'Spurs',
    city: 'San Antonio',
    conference: 'west',
    seed: 7,
  })

  const timberwolves = await Team.create({
    name: 'TimberWolves',
    city: 'Minnesota',
    conference: 'west',
    seed: 8,
  })

  //Create the starting 5 for each team with stats
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
