import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMB from './components/AboutMB';
import PastLectures from './components/PastLectures';
import Workshops from './components/Workshop';
import Footer from './components/Footer';
import InspiringWords from './components/InspiringWords';
import FluidCursor from './components/edil-ozi/fluid-cursor';
function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Navbar />
        <FluidCursor/>
        <div className="hero-bg">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
          <AboutMB />
          <InspiringWords/>
          <Workshops />
          <PastLectures />
        <footer className="z-20">
          <Footer />
        </footer>
        
      </div>
    </Router>
  );
};

export default App;
