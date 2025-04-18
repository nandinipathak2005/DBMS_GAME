// controllers/queryController.js
const db = require('../config/db');

exports.executeCrimeSceneQuery = (req, res) => {
  const queryId = req.params.id;
  let query;
  let responseMessage = 'Wrong Query! Try again.';

  switch (queryId) {
    case '1':
      query = `SELECT * FROM crime_scene WHERE victim = 'John' AND weapon_found = 'Knife';`;
      break;
    case '2':
      query = `SELECT location, victim FROM crime_scene WHERE victim = 'John';`;
      break;
    case '3':
      query = `SELECT victim, weapon_found, location FROM crime_scene WHERE time = '12:00:00';`;
      break;
    case '4':
      query = `SELECT * FROM crime_scene WHERE location = 'Park';`;
      break;
    default:
      return res.status(400).json({ message: 'Invalid query selection!' });
  }

  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });
    if (queryId === '1') {
      responseMessage = 'Correct query! You found the correct crime scene details.';
    }
    res.status(200).json({ message: responseMessage, result });
  });
};

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
    if (err) return res.status(500).json({ message: 'Database error', error: err });
    if (queryId === '1') {
      responseMessage = 'Correct! Mario is a suspect with the right clue.';
    }
    res.status(200).json({ message: responseMessage, result });
  });
};

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
    if (err) return res.status(500).json({ message: 'Database error', error: err });
    if (queryId === '1') {
      responseMessage = 'Correct query! Mario was caught on CCTV.';
    }
    res.status(200).json({ message: responseMessage, result });
  });
};

exports.checkFinalGuess = (req, res) => {
  const { weapon, cctv, suspect } = req.body;

  const correctCombination = { weapon: 'Knife', cctv: 'Video 1', suspect: 'Mario' };

  let message = 'You lost! Incorrect combination. Try again.';
  if (weapon === correctCombination.weapon && cctv === correctCombination.cctv && suspect === correctCombination.suspect) {
    message = 'Congratulations! You solved the crime!';
  }

  res.status(200).json({ message });
};
