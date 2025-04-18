// crime-game-frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">🕵️‍♂️ The Shadowy Deal</h1>
      <p className="mb-8 text-lg">Unravel the mystery behind Robert Hayes' murder by exploring the clues below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/cctv" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-lg shadow-md text-center">
          📹 Analyze CCTV Logs
        </Link>
        <Link to="/suspect" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-lg shadow-md text-center">
          👤 View Suspect Profiles
        </Link>
        <Link to="/notebook" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg shadow-md text-center">
          📓 Detective's Notebook
        </Link>
        <Link to="/guess" className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-md text-center">
          🔍 Submit Your Final Guess
        </Link>
      </div>
    </div>
  );
}

export default Home;
