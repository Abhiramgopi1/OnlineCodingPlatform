import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Playground from './components/CodingPlayground/Playground';
import Arena from './components/CodingArena/Arena';
import Battleground from './components/CodingBattleground/Battleground';
import './styles/variables.css'; 
import './App.css'

import ProblemDetail from './components/CodingArena/ProblemDetail';
import UploadProblem from './components/CodingArena/UploadProblem';

// console.log(typeof Arena);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/battleground" element={<Battleground />} />
          <Route path="/problemDetail" element={<ProblemDetail />} />
          <Route path="/uploadProblem" element = {<UploadProblem />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>
        <span className="outline">Welcome</span> to CodeForge
      </h1>
      <p>Select a section from the navigation bar to get started.</p>
    </div>
  );
}

export default App;
