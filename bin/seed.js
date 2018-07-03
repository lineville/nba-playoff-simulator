#!/usr/bin/env node
const { db, Player, Team } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })

  //Create Teams for 2018 Playoffs
  //Teams will be filled only with players who had
  //at least 20 mins a game, out of convenience
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

  // Raptors Players
  const deMarDeRozan = await Player.create({
    name: 'DeMar DeRozan',
    pointsPerGame: 23.0,
    assistsPerGame: 5.2,
    reboundsPerGame: 3.9,
    playerEfficiency: 13.5,
    allStarGames: 4,
    mvps: 0,
    teamId: raptors.id,
  })
  const kyleLowry = await Player.create({
    name: 'Kyle Lowry',
    pointsPerGame: 16.2,
    assistsPerGame: 6.9,
    reboundsPerGame: 5.6,
    playerEfficiency: 13.6,
    allStarGames: 0,
    mvps: 0,
    teamId: raptors.id,
  })

  const jonasValunciunas = await Player.create({
    name: 'Jonas Valanciunas',
    pointsPerGame: 12.7,
    assistsPerGame: 1.1,
    reboundsPerGame: 8.6,
    playerEfficiency: 15.1,
    allStarGames: 4,
    mvps: 0,
    teamId: raptors.id,
  })

  const cjMiles = await Player.create({
    name: 'CJ Miles',
    pointsPerGame: 10,
    assistsPerGame: 0.8,
    reboundsPerGame: 2.2,
    playerEfficiency: 7.7,
    allStarGames: 0,
    mvps: 0,
    teamId: raptors.id,
  })

  const sergeIbaka = await Player.create({
    name: 'Serge Ibaka',
    pointsPerGame: 12.6,
    assistsPerGame: 0.8,
    reboundsPerGame: 6.3,
    playerEfficiency: 9.8,
    allStarGames: 0,
    mvps: 0,
    teamId: raptors.id,
  })

  const rondo = await Player.create({
    name: 'Rajon Rondo',
    pointsPerGame: 8.3,
    assistsPerGame: 8.2,
    reboundsPerGame: 4.0,
    playerEfficiency: 11.5,
    mvps: 0,
    teamId: celtics.id,
  })

  //Close the db and log successful seed
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
