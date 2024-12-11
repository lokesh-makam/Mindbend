import React from 'react';

const AboutMB: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center text-white p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/aboutmb.jpg"
          alt="About Mindbend"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <h2 className="text-5xl md:text-6xl font-blackops text-center mb-8 text-cyan-300 thin-glow">About MINDBEND</h2>
        <p className="text-lg md:text-xl font-bruno leading-relaxed text-center text-gray-200">
          The annual techno-managerial fest of SVNIT, Surat, happening this March, is a student-led celebration of innovation and technology. Mindbend unites tech enthusiasts, visionaries, and thought leaders to inspire and showcase ingenuity on a global stage.
        </p>
        
        <h2 className="text-5xl md:text-6xl font-blackops text-center mb-8 text-green-300 thin-glow">ECOGENESIS</h2>
        <p className="text-lg md:text-xl font-bruno leading-relaxed text-center text-gray-200">
          Exploring AI and Green Energy, EcoGenesis focuses on sustainable innovations to combat the climate crisis. Key themes include AI-driven Smart Grids, Renewable Energy, Energy Efficiency, Green Manufacturing, and Environmental Technologies, shaping a smarter, greener future.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Black+Ops+One&display=swap');
        
        .font-bruno {
          font-family: 'Bruno Ace SC', cursive;
        }

        .font-blackops {
          font-family: 'Black Ops One', cursive;
        }
        
        .thin-glow {
          text-shadow: 0 0 2px currentColor, 0 0 4px currentColor;
        }
      `}</style>
    </div>
  );
};

export default AboutMB;


