const express = require('express');
const donorControllers = require('../controllers/donorControllers');
const router = express.Router();

router
    .route('/')
    .get(donorControllers.getAllDonor)
router.route('/register').post(donorControllers.createNewDonor); 
    
router.route('/:id').get(donorControllers.getById);



module.exports = router;