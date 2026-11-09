let express = require('express');
let router = express.Router();
let cityController = require('../controllers/cityController');

router.get('/', cityController.getAllCities);
router.post('/', cityController.createCity);
router.put('/:id', cityController.updateCity);
router.delete('/:id', cityController.deleteCity);

module.exports = router;