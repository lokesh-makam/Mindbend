const AboutMB = () => {
  return (
    <div
      className='min-h-screen relative flex flex-col justify-center items-center overflow-hidden py-16 md:py-24'
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12 md:space-y-16 text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbi font-medium text-center mb-6 md:mb-8 text-cyan-300 thin-glow">
          About MINDBEND
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center text-gray-200 font-bruno">
          The annual techno-managerial fest of SVNIT, Surat, happening this March, is a student-led celebration of innovation and technology. Mindbend unites tech enthusiasts, visionaries, and thought leaders to inspire and showcase ingenuity on a global stage.
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbi font-medium text-center mb-6 md:mb-8 text-green-300 thin-glow">
          ECOGENESIS
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center text-gray-200 font-bruno">
          Exploring AI and Green Energy, EcoGenesis focuses on sustainable innovations to combat the climate crisis. Key themes include AI-driven Smart Grids, Renewable Energy, Energy Efficiency, Green Manufacturing, and Environmental Technologies, shaping a smarter, greener future.
        </p>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace:wght@400..900&family=Orbitron&display=swap');
        
        .font-bruno {
          font-family: 'Bruno Ace';
        }
        .font-orbi {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default AboutMB;
