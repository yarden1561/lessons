const express = require('express');
const router = express.Router();
const products = require('../controllers/productController');
const { auth, isAdmin } = require('../middlewere/authMiddilewere');

router.get('/', auth, products.getProducts);
router.get('/:id', auth, products.getProduct);
router.post('/', auth, isAdmin, products.createProduct);
router.put('/:id', auth, isAdmin, products.updateProduct);
router.delete('/:id', auth, isAdmin, products.deleteProduct);

module.exports = router;
