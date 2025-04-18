// FinalGuess.js
import React, { useState } from 'react';

function FinalGuess() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const weapon = e.target.weaponSelect.value;
    const cctv = e.target.cctvSelect.value;
    const suspect = e.target.suspectSelect.value;

    fetch('/api/check-final-guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weapon, cctv, suspect }),
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Final Guess</h1>
      <p>Select your final guess (Weapon, CCTV Footage, Suspect)</p>
      <form onSubmit={handleSubmit}>
        <select id="weaponSelect" name="weapon">
          <option value="Knife">Knife</option>
          <option value="Gun">Gun</option>
          <option value="Poison">Poison</option>
        </select>
        <select id="cctvSelect" name="cctv">
          <option value="Video 1">Video 1</option>
          <option value="Video 2">Video 2</option>
          <option value="Video 3">Video 3</option>
        </select>
        <select id="suspectSelect" name="suspect">
          <option value="Mario">Mario</option>
          <option value="Ariel">Ariel</option>
          <option value="John">John</option>
        </select>
        <button type="submit">Submit Final Guess</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default FinalGuess;
