// routes/notebookRoutes.js
const express = require('express');
const router = express.Router();
const notebookController = require('../controllers/notebookController');

// Routes for notebook
router.post('/add-note', notebookController.addNote);
router.put('/update-note', notebookController.updateNote);
router.delete('/delete-note', notebookController.deleteNote);

module.exports = router;
