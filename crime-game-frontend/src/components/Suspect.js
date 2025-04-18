import React, { useState } from 'react';

function Suspect() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryId = e.target.suspectQuerySelect.value;

    // Fetch request to execute the query
    fetch(`http://localhost:5000/api/suspect/execute-suspect-query/${queryId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ selectedQuery: queryId }),  // Sending the queryId in the body
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

export default Suspect;
