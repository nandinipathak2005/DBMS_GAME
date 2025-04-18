// // /routes/crimeRoutes.js
// const express = require('express');
// const router = express.Router();
// const crimeController = require('../controllers/crimeController');

// router.get('/crime-scene', crimeController.getCrimeScene);

// module.exports = router;
// routes/crimeRoutes.js
const express = require('express');
const router = express.Router();
const crimeController = require('../controllers/crimeController');

// Route for fetching crime scene data
router.get('/execute-crime-query', crimeController.getCrimeScene);

module.exports = router;
