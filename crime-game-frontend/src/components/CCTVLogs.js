// CCTVLogs.js
import React, { useState } from 'react';

function CCTVLogs() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryId = e.target.cctvQuerySelect.value;

    fetch(`http://localhost:5000/api/cctv/execute-cctv-query/${queryId}`, {
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
      <h1>CCTV Logs</h1>
      <p>Select the correct query to fetch the CCTV logs:</p>

      <form onSubmit={handleSubmit}>
        <select id="cctvQuerySelect" name="cctvQuerySelect">
          <option value="1">SELECT * FROM cctv_logs WHERE suspect = 'Mario';</option>
          <option value="2">SELECT * FROM cctv_logs WHERE location = 'Park';</option>
          <option value="3">SELECT suspect, location FROM cctv_logs WHERE time = '12:00:00';</option>
          <option value="4">SELECT * FROM cctv_logs WHERE time BETWEEN '10:00:00' AND '12:00:00';</option>
        </select>
        <button type="submit">Submit Query</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default CCTVLogs;
