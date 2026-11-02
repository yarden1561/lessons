let express = require('express');
let router = express.Router();
let cityController = require('../controllers/doctorController');

router.get('/', cityController.getAllDoctors);
router.post('/', cityController.createDoctor);
router.put('/:id', cityController.updateDoctor);
router.delete('/:id', cityController.deleteDoctor);
router.get('/full', cityController.getFullDoctors);
router.get('/full/:id', cityController.getFullDoctor);