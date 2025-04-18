// crime-game-frontend/src/components/QueryPage.js
import React, { useState } from 'react';
import axios from 'axios';

function QueryPage() {
  const [sqlCommand, setSqlCommand] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleExecute = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/query/execute', { sqlCommand });
      setResult(response.data.result);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Enter SQL Query</h2>
      <textarea
        className="w-full h-32 border p-2 mb-4"
        value={sqlCommand}
        onChange={(e) => setSqlCommand(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleExecute}
      >
        Execute
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="text-xl">Result:</h3>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}

export default QueryPage;
