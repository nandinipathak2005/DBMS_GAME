// app.js (Backend)
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import the newly created routes
const cctvRoutes = require('./routes/cctvRoutes');
const guessRoutes = require('./routes/guessRoutes');
const notebookRoutes = require('./routes/notebookRoutes');
const suspectRoutes = require('./routes/suspectRoutes');

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/cctv', cctvRoutes);        // CCTV routes
app.use('/api/guess', guessRoutes);      // Guess routes
app.use('/api/notebook', notebookRoutes); // Notebook routes
app.use('/api/suspect', suspectRoutes);  // Suspect routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
