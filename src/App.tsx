import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import TimelinePage from './pages/TimelinePage';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import About from './components/About';
import ScrollSection from './components/ScrollSection';
import TechEvolution from './components/TechEvolution'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-900">
            <Navbar />
            
            {/* Wrapper for the scrollable sections */}
            <div className="scroll-sections-wrapper">
              <ScrollSection id="hero">
                <Hero />
              </ScrollSection>
              <ScrollSection id="about">
                <About />
              </ScrollSection>
              <ScrollSection id="events">
                <Events />
              </ScrollSection>
              {/* Set the last section without sticky to allow scrolling to the footer */}
              <div className="relative min-h-screen">
                <ScrollSection id="sponsors">
                  <Sponsors />
                </ScrollSection>
              </div>
            </div>
                <TechEvolution />
            
            {/* Footer positioned at the bottom of the page */}
            <Footer />
          </div>
        } />
        
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
