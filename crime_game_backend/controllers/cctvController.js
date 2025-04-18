// controllers/cctvController.js
const db = require('../config/db');

exports.executeCCTVQuery = (req, res) => {
  const queryId = req.params.id;

  let query;
  let responseMessage = 'Incorrect CCTV query!';

  switch (queryId) {
    case '1':
      query = `SELECT * FROM cctv_logs WHERE suspect = 'Mario';`;
      break;
    case '2':
      query = `SELECT * FROM cctv_logs WHERE location = 'Park';`;
      break;
    case '3':
      query = `SELECT suspect, location FROM cctv_logs WHERE time = '12:00:00';`;
      break;
    case '4':
      query = `SELECT * FROM cctv_logs WHERE time BETWEEN '10:00:00' AND '12:00:00';`;
      break;
    default:
      return res.status(400).json({ message: 'Invalid CCTV query selection!' });
  }

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (queryId === '1') {
      responseMessage = 'Correct query! Mario was caught on CCTV.';
    }
    res.status(200).json({ message: responseMessage, result });
  });
};
