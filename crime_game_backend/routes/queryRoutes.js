// routes/queryRoutes.js
const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/execute-query/:id', queryController.executeCrimeSceneQuery);
router.post('/execute-suspect-query/:id', queryController.executeSuspectQuery);
router.post('/execute-cctv-query/:id', queryController.executeCCTVQuery);
router.post('/check-final-guess', queryController.checkFinalGuess);

module.exports = router;
