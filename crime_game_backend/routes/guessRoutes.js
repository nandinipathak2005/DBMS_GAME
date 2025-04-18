// // routes/guessRoutes.js
// const express = require('express');
// const router = express.Router();
// const guessController = require('../controllers/guessController');

// // Route for checking the final guess
// router.post('/check-final-guess', guessController.checkFinalGuess);

// module.exports = router;
// routes/guessRoutes.js
const express = require('express');
const router = express.Router();
const guessController = require('../controllers/guessController');

// Route for handling guesses
router.post('/execute-guess-query', guessController.makeGuess);

module.exports = router;
