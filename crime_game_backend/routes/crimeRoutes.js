// /routes/crimeRoutes.js
const express = require('express');
const router = express.Router();
const crimeController = require('../controllers/crimeController');

router.get('/crime-scene', crimeController.getCrimeScene);

module.exports = router;
