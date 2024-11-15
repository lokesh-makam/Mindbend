import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Set the correct type for videoRef
  const [midpoint, setMidpoint] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set the midpoint when the video's metadata loads
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setMidpoint(videoRef.current.duration / 2);
    }
  };

  // Start from the midpoint when the video ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = midpoint;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change based on scroll position
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* First Fixed Background Video Section */}
      <div className="relative min-h-screen flex items-center justify-center sticky overflow-hidden">
        <video
          ref={videoRef}
          src="/vid123.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata} // Set midpoint when video metadata loads
          onEnded={handleVideoEnd} // Trigger on video end
        ></video>

        {/* Content on top of the video */}
        <div
          className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">MINDBEND</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white">
              NIT Surat's Technical Festival
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-white max-w-3xl mx-auto">
            Where Innovation Meets Excellence in Technology
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
              Register Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Additional sections */}
      {/* Second Section */}
      {/* 
      <div className="relative min-h-screen bg-blue-600 flex items-center justify-center text-white sticky top-0 z-20 transition-all duration-500">
        <h2 className="text-4xl font-bold">New Section Coming Over the Video</h2>
      </div>

      Third Section
      <div className="relative min-h-screen bg-red-600 flex items-center justify-center text-white sticky top-0 z-30 transition-all duration-500">
        <h2 className="text-4xl font-bold">Next Section Coming Over the Previous One</h2>
      </div> 
      */}
    </div>
  );
};

export default Hero;
