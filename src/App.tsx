import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMB from './components/AboutMB';
import PastLectures from './components/PastLectures';
import Workshops from './components/Workshop';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      <AboutMB/>
      <Workshops />
      <PastLectures />
    </Router>
  );
}

export default App;

