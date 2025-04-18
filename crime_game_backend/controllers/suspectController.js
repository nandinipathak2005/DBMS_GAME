// controllers/suspectController.js
const db = require('../config/db');

exports.executeSuspectQuery = (req, res) => {
  const queryId = req.params.id;

  let query;
  let responseMessage = 'Incorrect query!';

  switch (queryId) {
    case '1':
      query = `SELECT name, occupation FROM suspects WHERE name = 'Mario';`;
      break;
    case '2':
      query = `SELECT * FROM suspects WHERE name = 'Ariel';`;
      break;
    case '3':
      query = `SELECT name, occupation FROM suspects WHERE has_criminal_record = 1;`;
      break;
    case '4':
      query = `SELECT * FROM suspects WHERE clue = 'Glove';`;
      break;
    default:
      return res.status(400).json({ message: 'Invalid query selection!' });
  }

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (queryId === '1') {
      responseMessage = 'Correct! Mario is a suspect with the right clue.';
    }
    res.status(200).json({ message: responseMessage, result });
  });
};
