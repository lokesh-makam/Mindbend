import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMB from './components/AboutMB';
import PastLectures from './components/PastLectures';
import Workshops from './components/Workshop';
import Footer from './components/Footer';
import CanvasCursor from './components/edil-ozi/canvas-cursor';
import FluidCursor from './components/edil-ozi/fluid-cursor';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <CanvasCursor />  */} {/*effet-1*/}
        <FluidCursor/>  {/*effet-2*/}
        <Navbar />
        <div className="hero-bg">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
        <div className="content">
          <AboutMB />
          <Workshops />
          <PastLectures />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
