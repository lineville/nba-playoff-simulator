const router = require('express').Router()
const { db, Player, Team } = require('../db/index')

router.get('/teams', async (req, res, next) => {
  try {
    const allTeams = await Team.findAll({ include: Player })
    console.log('allTeams', allTeams)
    res.json(allTeams)
  } catch (error) {
    next(error)
  }
})

router.get('/teams/:teamId', async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.teamId, { include: Player })
    res.json(team)
  } catch (error) {
    next(error)
  }
})
module.exports = router
