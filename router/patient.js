const express = require('express');
const router = express.Router();

const patientControllers = require('../controllers/patientControllers');

router.route('/').get(patientControllers.getAllPatients);
router.route('/').post(patientControllers.createNewPatient);

router.route('/:id').get(patientControllers.getById);

module.exports = router ;