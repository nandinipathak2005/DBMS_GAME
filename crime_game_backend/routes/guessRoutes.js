// routes/guessRoutes.js
const express = require('express');
const router = express.Router();
const guessController = require('../controllers/guessController');

// Route for checking the final guess
router.post('/check-final-guess', guessController.checkFinalGuess);

module.exports = router;
