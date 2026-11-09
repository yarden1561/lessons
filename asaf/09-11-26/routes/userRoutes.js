const express = require('express');
const router = express.Router();
const users = require('../controllers/userController');
const { auth, isAdmin } = require('../middlewere/authMiddilewere');

router.post('/register', users.register);
router.post('/login', users.login);
router.get('/', auth, isAdmin, users.getUsers);

module.exports = router;
