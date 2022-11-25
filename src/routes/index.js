
const { Router } = require('express');
const { gamesApi, allGames, postGame } = require('../controllers/games.controller.js');

const router = Router();

router.get('/gamesApi', gamesApi)
router.get('/games', allGames)
router.post('/games', postGame)


module.exports = router;
