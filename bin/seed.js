#!/usr/bin/env node
const { db, Player, Team } = require('../server/db')
const seed = async () => {
  await db.sync({ force: true })

  await Team.bulkCreate([
    {
      name: 'Raptors',
      city: 'Toronto',
      conference: 'east',
      seed: 1,
    },
    {
      name: 'Celtics',
      city: 'Boston',
      conference: 'east',
      seed: 2,
    },
    {
      name: '76ers',
      city: 'Philadelphia',
      conference: 'east',
      seed: 3,
    },
    {
      name: 'Cavaliers',
      city: 'Cleveland',
      conference: 'east',
      seed: 4,
    },
    {
      name: 'Pacers',
      city: 'Indiana',
      conference: 'east',
      seed: 5,
    },
    {
      name: 'Heat',
      city: 'Miami',
      conference: 'east',
      seed: 6,
    },
    {
      name: 'Bucks',
      city: 'Milwaukee',
      conference: 'east',
      seed: 7,
    },
    {
      name: 'Wizards',
      city: 'Washington',
      conference: 'east',
      seed: 8,
    },
    {
      name: 'Rockets',
      city: 'Houston',
      conference: 'west',
      seed: 1,
    },
    {
      name: 'Warriors',
      city: 'Golden State',
      conference: 'west',
      seed: 2,
    },
    {
      name: 'TrailBlazers',
      city: 'Portland',
      conference: 'west',
      seed: 3,
    },
    {
      name: 'Jazz',
      city: 'Utah',
      conference: 'west',
      seed: 4,
    },
    {
      name: 'Thunder',
      city: 'Oklahoma City',
      conference: 'west',
      seed: 5,
    },
    {
      name: 'Pelicans',
      city: 'New Orleans',
      conference: 'west',
      seed: 6,
    },
    {
      name: 'Spurs',
      city: 'San Antonio',
      conference: 'west',
      seed: 7,
    },
    {
      name: 'Timberwolves',
      city: 'Minnesota',
      conference: 'west',
      seed: 8,
    },
  ])

  const raptorsPlayers = [
    {
      name: 'DeMar DeRozan',
      pointsPerGame: 23.0,
      assistsPerGame: 5.2,
      reboundsPerGame: 3.9,
      playerEfficiency: 13.5,
      allStarGames: 4,
      mvps: 0,
      teamId: 1,
    },
    {
      name: 'Kyle Lowry',
      pointsPerGame: 16.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 5.6,
      playerEfficiency: 13.6,
      allStarGames: 0,
      mvps: 0,
      teamId: 1,
    },

    {
      name: 'Jonas Valanciunas',
      pointsPerGame: 12.7,
      assistsPerGame: 1.1,
      reboundsPerGame: 8.6,
      playerEfficiency: 15.1,
      allStarGames: 4,
      mvps: 0,
      teamId: 1,
    },

    {
      name: 'CJ Miles',
      pointsPerGame: 10,
      assistsPerGame: 0.8,
      reboundsPerGame: 2.2,
      playerEfficiency: 7.7,
      allStarGames: 0,
      mvps: 0,
      teamId: 1,
    },

    {
      name: 'Serge Ibaka',
      pointsPerGame: 12.6,
      assistsPerGame: 0.8,
      reboundsPerGame: 6.3,
      playerEfficiency: 9.8,
      allStarGames: 0,
      mvps: 0,
      teamId: 1,
    },

    {
      name: 'Delon Wright',
      pointsPerGame: 8.0,
      assistsPerGame: 2.9,
      reboundsPerGame: 2.9,
      playerEfficiency: 11.6,
      allStarGames: 0,
      mvps: 0,
      teamId: 1,
    },

    {
      name: 'OG Anunoby',
      pointsPerGame: 5.9,
      assistsPerGame: 0.7,
      reboundsPerGame: 2.5,
      playerEfficiency: 5.6,
      allStarGames: 0,
      mvps: 0,
      teamId: 1,
    },
  ]

  const celticsPlayers = [
    {
      name: 'Jayson Tatum',
      pointsPerGame: 13.9,
      assistsPerGame: 1.6,
      reboundsPerGame: 5.0,
      playerEfficiency: 10.8,
      allStarGames: 0,
      mvps: 0,
      teamId: 2,
    },
    {
      name: 'Jaylen Brown',
      pointsPerGame: 14.5,
      assistsPerGame: 1.6,
      reboundsPerGame: 4.9,
      playerEfficiency: 8.9,
      allStarGames: 0,
      mvps: 0,
      teamId: 2,
    },
    {
      name: 'Terry Rozier',
      pointsPerGame: 11.3,
      assistsPerGame: 2.9,
      reboundsPerGame: 4.7,
      playerEfficiency: 11.7,
      allStarGames: 0,
      mvps: 0,
      teamId: 2,
    },
    {
      name: 'Al Horford',
      pointsPerGame: 12.9,
      assistsPerGame: 4.7,
      reboundsPerGame: 7.4,
      playerEfficiency: 13.4,
      allStarGames: 5,
      mvps: 0,
      teamId: 2,
    },
    {
      name: 'Marcus Morris',
      pointsPerGame: 13.6,
      assistsPerGame: 1.3,
      reboundsPerGame: 5.4,
      playerEfficiency: 10.6,
      allStarGames: 0,
      mvps: 0,
      teamId: 2,
    },
    {
      name: 'Aron Baynes',
      pointsPerGame: 6.0,
      assistsPerGame: 1.1,
      reboundsPerGame: 5.4,
      playerEfficiency: 8.7,
      allStarGames: 0,
      mvps: 0,
      teamId: 2,
    },
  ]

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
