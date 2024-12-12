import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMB from './components/AboutMB';
import PastLectures from './components/PastLectures';
import Workshops from './components/Workshop';
import ScrollSection from './components/ScrollSection';

function App() {
  return (
    <Router>
      {/* Hero Section */}
      <div className="hero-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>

      {/* Scrollable Sections with Fixed Background */}
      <div className="fixed-bg">
        {/* <ScrollSection id="aboutmb" className="scroll-section"> */}
          <AboutMB />
        {/* </ScrollSection> */}
        {/* <ScrollSection id="workshops" className="scroll-section"> */}
          <Workshops />
        {/* </ScrollSection> */}
        {/* <ScrollSection id="pastlectures" className="scroll-section"> */}
          <PastLectures />
        {/* </ScrollSection> */}
      </div>
    </Router>
  );
}

export default App;
