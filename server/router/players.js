const express = require('express');
const playerControllers = require('../controllers/playerControllers')
const router = express.Router();

router.get('/', playerControllers.view);
router.post('/', playerControllers.find);

router.get('/addplayer', playerControllers.player);
router.post('/addplayer', playerControllers.addplayer);
router.get('/editplayer/:id',playerControllers.editplayer);



module.exports = router;