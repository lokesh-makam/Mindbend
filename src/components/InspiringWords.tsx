import React from 'react';
import '@fontsource/orbitron/500.css';

const InspiringWords: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background Overlay - Made slightly more transparent */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-orbi font-medium text-center mb-4 sm:mb-6 md:mb-8 text-cyan-300 thin-glow">
          INSPIRING WORDS FOR MINDBEND
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:gap-12 md:gap-16">
          {/* First Testimonial - Improved glass effect */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 rounded-xl p-4 sm:p-6 md:p-8
                         bg-black/20 backdrop-blur-sm
                         border border-white/5 shadow-lg">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 relative shrink-0">
              <img
                src="/cm-image.jpg"
                alt="Honorable Chief Minister"
                className="rounded-full object-cover w-full h-full border-2 border-cyan-300"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bruno leading-relaxed text-gray-200">
                "In today's rapidly advancing world, acquiring practical skills is essential for enhancing productivity and achieving success. India's emergence as the third-largest startup hub globally reflects the strength of our talented youth and increasing access to technology. I extend my best wishes for the success of <span className="text-cyan-300">Mindbend 2024</span> at SVNIT, Surat, under the theme "<span className="text-cyan-300">TechVolution</span>: Navigating the Evolution of Innovation," which will further contribute to the progress of our nation."
              </p>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bruno text-green-300">- Shri Bhupendrabhai Patel</h3>
                <p className="text-base sm:text-lg font-bruno text-cyan-300">Honourable Chief Minister of Gujarat</p>
              </div>
            </div>
          </div>

          {/* Second Testimonial - Improved glass effect */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 rounded-xl p-4 sm:p-6 md:p-8
                         bg-black/20 backdrop-blur-sm
                         border border-white/5 shadow-lg">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 relative shrink-0">
              <img
                src="/director-image.png"
                alt="SVNIT Director"
                className="rounded-full object-cover w-full h-full border-2 border-cyan-300"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bruno leading-relaxed text-gray-200">
                "Our students have been successfully organizing <span className="text-cyan-300">MINDBEND, Gujarat's largest techno-managerial fest</span>, which has grown far beyond our expectations. The <span className="text-cyan-300">participation of international attendees</span>, including from Russia last year, marks a great success for the event and a proud achievement for the college, showcasing its global reach and excellence."
              </p>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bruno text-green-300">- Prof. (Dr.) Anupam Shukla</h3>
                <p className="text-base sm:text-lg font-bruno text-cyan-300">Director, SVNIT Surat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspiringWords;