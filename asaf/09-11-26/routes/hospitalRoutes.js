let express = require('express');
let router = express.Router();
let doc = require('../controllers/hospitalController');

router.get('/', doc.getHospitals);
router.post('/', doc.createHospital);
router.put('/:id', doc.updateHospital);
router.delete('/:id', doc.deleteHospital);


module.exports = router;