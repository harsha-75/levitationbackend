const express = require('express');
const { registerUser, loginUser ,signupUser} = require('../controller/authController');
const router = express.Router();

router.post('/signup', signupUser);
// router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
