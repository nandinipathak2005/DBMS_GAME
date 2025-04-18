// controllers/guessController.js
exports.makeGuess = (req, res) => {
    const { weapon, cctv, suspect } = req.body;
  
    const correctCombination = { weapon: 'Knife', cctv: 'Video 1', suspect: 'Mario' };
  
    let message = 'You lost! Incorrect combination. Try again.';
    if (weapon === correctCombination.weapon && cctv === correctCombination.cctv && suspect === correctCombination.suspect) {
      message = 'Congratulations! You solved the crime!';
    }
  
    res.status(200).json({ message });
  };
  