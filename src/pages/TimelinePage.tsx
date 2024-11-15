import React from 'react';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const TimelinePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default TimelinePage;