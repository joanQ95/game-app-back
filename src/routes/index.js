
const { Router } = require('express');
const { gamesApi } = require('../controllers/games.controller.js');

const router = Router();

router.get('/games', gamesApi)


module.exports = router;
