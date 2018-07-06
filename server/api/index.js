const router = require('express').Router()
const { db, Player, Team } = require('../db/index')

router.get('/teams/', async (req, res, next) => {
  const allTeams = await Team.findAll()
  console.log(allTeams)
  res.json(allTeams)
})

module.exports = router
