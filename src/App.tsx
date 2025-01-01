import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMB from './components/AboutMB';
import PastLectures from './components/PastLectures';
import Workshops from './components/Workshop';
import Footer from './components/Footer';
import InspiringWords from './components/InspiringWords';
function App() {
  return (
    <Router>
      <div className="hero-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>

      <div className="fixed-bg">
          <AboutMB />
          <InspiringWords/>
          <Workshops />
          <PastLectures />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
