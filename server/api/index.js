const router = require('express').Router()
const { db, Player, Team } = require('../db/index')

router.get('/teams/', async (req, res, next) => {
  const allTeams = await Team.findAll()
  res.json(allTeams.data)
})

module.exports = router
