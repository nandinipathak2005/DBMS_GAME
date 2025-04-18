// // routes/cctvRoutes.js
// const express = require('express');
// const router = express.Router();
// const cctvController = require('../controllers/cctvController');

// // Route for executing CCTV queries
// router.post('/execute-cctv-query/:id', cctvController.executeCCTVQuery);

// module.exports = router;
// routes/cctvRoutes.js
const express = require('express');
const router = express.Router();
const cctvController = require('../controllers/cctvController');

// Route for executing CCTV queries
router.post('/execute-cctv-query/:id', cctvController.executeCCTVQuery);

module.exports = router;
