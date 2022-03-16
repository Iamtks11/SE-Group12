const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/signin', userController.signin);
router.get('/signup', userController.signup);

module.exports = router;