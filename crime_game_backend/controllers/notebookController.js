// controllers/notebookController.js
const db = require('../config/db');

// Add a new note
exports.addNote = (req, res) => {
  const { user_id, note } = req.body;

  const query = `INSERT INTO notebook (user_id, note) VALUES (?, ?)`;
  db.query(query, [user_id, note], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding note', error: err });
    }
    res.status(200).json({ message: 'Note added successfully!' });
  });
};

// Update a note
exports.updateNote = (req, res) => {
  const { id, note } = req.body;

  const query = `UPDATE notebook SET note = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
  db.query(query, [note, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating note', error: err });
    }
    res.status(200).json({ message: 'Note updated successfully!' });
  });
};

// Delete a note
exports.deleteNote = (req, res) => {
  const { id } = req.body;

  const query = `DELETE FROM notebook WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting note', error: err });
    }
    res.status(200).json({ message: 'Note deleted successfully!' });
  });
};
