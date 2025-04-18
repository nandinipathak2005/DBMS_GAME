// // /controllers/crimeController.js
// const db = require('../config/db');

// exports.getCrimeScene = (req, res) => {
//     const { location, time } = req.query;
//     console.log('Received query params:', location, time);
  
//     const query = `SELECT * FROM crime_scene WHERE location = ? AND time = ?`;
    
//     db.query(query, [location, time], (err, result) => {
//       if (err) {
//         console.error('Error fetching crime scene data:', err);
//         return res.status(400).json({ message: 'Error fetching crime scene data', error: err });
//       }
  
//       console.log('Query result:', result);
//       res.status(200).json({ result });
//     });
//   };
// controllers/crimeController.js
const db = require('../config/db');

exports.getCrimeScene = (req, res) => {
  const { location, time } = req.query;

  // Construct SQL query based on query parameters
  let query = 'SELECT * FROM crime_scenes WHERE 1=1';
  if (location) {
    query += ` AND location = '${location}'`;
  }
  if (time) {
    query += ` AND time = '${time}'`;
  }

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json({ message: 'Crime scene data fetched successfully', result });
  });
};
