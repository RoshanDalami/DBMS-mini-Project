const express = require('express');
const playerControllers = require('../controllers/playerControllers')
const router = express.Router();

router.get('/', playerControllers.view);
router.post('/', playerControllers.find);
// router.post('/', playerControllers.findByClub);


router.get('/addplayer', playerControllers.player);
router.post('/addplayer', playerControllers.addplayer);
router.get('/editplayers', playerControllers.editplayers);

router.get('/editplayer/:id',playerControllers.edit);
router.post('/editplayer/:id',playerControllers.update);
router.get('/aboutproject',playerControllers.project);
router.get('/aboutcollege',playerControllers.college);

router.get('/deleteplayer',playerControllers.deletepage);
router.get('/deleteplayer/:id',playerControllers.delete);

router.get('/viewplayer/:id',playerControllers.viewall);




module.exports = router;