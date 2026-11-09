let express = require('express');
let router = express.Router();
let doc = require('../controllers/doctorController');

router.get('/', doc.getDoctors);
router.post('/', doc.createDoctor);
router.put('/:id', doc.updateDoctor);
router.delete('/:id', doc.deleteDoctor);
router.get('/full', doc.getFullDoctors);
router.get('/full/:id', doc.getFullDoctor);

module.exports = router;