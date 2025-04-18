// SuspectAnalysis.js
import React, { useState } from 'react';

function SuspectAnalysis() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryId = e.target.suspectQuerySelect.value;

    fetch(`/api/execute-suspect-query/${queryId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedQuery: queryId }),
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Suspect Analysis</h1>
      <p>Which SQL query will provide the right suspect details?</p>

      <form onSubmit={handleSubmit}>
        <select id="suspectQuerySelect" name="suspectQuerySelect">
          <option value="1">SELECT name, occupation FROM suspects WHERE name = 'Mario';</option>
          <option value="2">SELECT * FROM suspects WHERE name = 'Ariel';</option>
          <option value="3">SELECT name, occupation FROM suspects WHERE has_criminal_record = 1;</option>
          <option value="4">SELECT * FROM suspects WHERE clue = 'Glove';</option>
        </select>
        <button type="submit">Submit Query</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default SuspectAnalysis;
