import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CrimeSceneQuery() {
  const [selectedQuery, setSelectedQuery] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/crime/execute-crime-query${selectedQuery}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedQuery }),
      });
      const data = await response.json();
      alert(data.message);
      history.push('/notebook');  // Redirect to notebook after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Crime Scene Query</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setSelectedQuery(e.target.value)} value={selectedQuery}>
          <option value="1">SELECT * FROM crime_scene WHERE victim = 'John' AND weapon_found = 'Knife';</option>
          <option value="2">SELECT location, victim FROM crime_scene WHERE victim = 'John';</option>
          <option value="3">SELECT victim, weapon_found, location FROM crime_scene WHERE time = '12:00:00';</option>
          <option value="4">SELECT * FROM crime_scene WHERE location = 'Park';</option>
        </select>
        <button type="submit">Submit Query</button>
      </form>
    </div>
  );
}

export default CrimeSceneQuery;
