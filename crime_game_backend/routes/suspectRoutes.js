// // routes/suspectRoutes.js
// const express = require('express');
// const router = express.Router();
// const suspectController = require('../controllers/suspectController');

// // Route for executing suspect queries
// router.post('/execute-suspect-query/:id', suspectController.executeSuspectQuery);

// module.exports = router;
// routes/suspectRoutes.js
const express = require('express');
const router = express.Router();
const suspectController = require('../controllers/suspectController');

// Route for adding a suspect
router.post('/execute-suspect-query/:id', suspectController.executeSuspectQuery);

module.exports = router;
