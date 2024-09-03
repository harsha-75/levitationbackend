const express = require('express');
const { submitForm, getSubmissions } = require('../controller/formController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
router.use(authMiddleware); // Protect all routes
router.post('/submit', submitForm);
router.get('/submissions', getSubmissions);
module.exports = router;
