// App.js (Frontend)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
//import QueryPage from './components/QueryPage';
import CCTVPage from './components/CCTVLogs';  // New page for CCTV
import GuessPage from './components/FinalGuess';  // New page for Guess
import NotebookPage from './components/Notebook';  // New page for Notebook
import SuspectPage from './components/Suspect';  // New page for Suspect

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          
        <Route path="/cctv" element={<CCTVPage />} />  {/* New route for CCTV */}
        <Route path="/guess" element={<GuessPage />} />  {/* New route for Guess */}
        <Route path="/notebook" element={<NotebookPage />} />  {/* New route for Notebook */}
        <Route path="/suspect" element={<SuspectPage />} />  {/* New route for Suspect */}
      </Routes>
    </Router>
  );
}

export default App;
