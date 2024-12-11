import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/home.png"
        className="absolute inset-0 w-full h-full object-cover brightness-[40%]"
        alt="Mindbend 2025 background"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl leading-tight font-bayon font-bold">
            <div className="inline-block animate-text-flow bg-[linear-gradient(110deg,#64e1ff,45%,#4ae0c0,55%,#64e1ff)] bg-[length:200%_100%] bg-clip-text text-transparent">
              WELCOME TO
            </div>
          </h1>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl leading-tight font-bayon font-bold">
            <div className="inline-block animate-text-flow bg-[linear-gradient(110deg,#64e1ff,45%,#4ae0c0,55%,#64e1ff)] bg-[length:200%_100%] bg-clip-text text-transparent">
              MINDBEND 2025
            </div>
          </h1>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');

        .font-bayon {
          font-family: 'Bayon', sans-serif;
        }

        @keyframes textFlow {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-flow {
          animation: textFlow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;


