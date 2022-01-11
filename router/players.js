const express = require('express');
const donorControllers = require('../controllers/playerControllers');
const router = express.Router();

router
    .route('/')
    .get(donorControllers.getAllPlayers)
router.route('/register').post(donorControllers.createNewPlayer); 
    
router.route('/:id').get(donorControllers.getById);



module.exports = router;