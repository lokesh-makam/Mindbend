import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useRef,useState,useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [midpoint, setMidpoint] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setMidpoint(videoRef.current.duration / 2);
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = midpoint;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero.jpeg"
        className="absolute inset-0 w-full h-full object-cover brightness-[40%]"
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleVideoEnd}
      ></img>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="space-y-8 max-w-5xl mx-auto">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight leading-tight">
            <span className="inline-block animate-text-flow bg-[linear-gradient(110deg,#64e1ff,45%,#4ae0c0,55%,#64e1ff)] bg-[length:200%_100%] bg-clip-text text-transparent">
              MINDBEND
            </span>
          </h1>

          <div className="space-y-4">
            <p className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-wide">
              NIT Surat's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Technno-Manegerial Fest
              </span>
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-100">
              Where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
                Innovation
              </span>{' '}
              Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-300">
                Technology
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-700 rounded-full font-bold text-white shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-100">
                Register Now
              </span>
              <ArrowRight size={20} className="relative z-10 inline-block ml-2 group-hover:translate-x-1 transition-transform text-teal-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 animate-pulse-glow"></div>
            </button>

            <button className="px-8 py-4 rounded-full font-bold text-teal-100 border-2 border-teal-400 hover:border-teal-500 backdrop-blur-sm hover:bg-teal-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes textFlow {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-flow {
          animation: textFlow 4s linear infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 5px 2px rgba(100, 225, 255, 0.3), 0 0 10px 4px rgba(74, 224, 192, 0.2); }
          50% { box-shadow: 0 0 10px 5px rgba(100, 225, 255, 0.5), 0 0 20px 10px rgba(74, 224, 192, 0.3); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
