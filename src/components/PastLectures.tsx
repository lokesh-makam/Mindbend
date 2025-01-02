import React from 'react';

const PastLectures: React.FC = () => {
  const boxImages = [
    '/past_lec1.svg',
    '/past_lec2.svg',
    '/past_lec3.svg',
    '/past_lec4.svg',
  ];

  const handleExploreClick = () => {
    window.location.href = 'https://mindbendsvnit.in/guestlecture';
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col items-center">
        {/* Past Lectures Text */}
        <div className="mb-12 sm:mb-16 w-full flex justify-center">
          <div className="relative">
            <img
              src="/vector_1.svg"
              alt="Past Lectures"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto object-contain"
            />
            <span
              className="absolute inset-0 flex items-center justify-center text-green-300 text-xl sm:text-2xl md:text-3xl font-extrabold font-blackops thin-glow"
              style={{
                WebkitTextStroke: '0.2px rgba(0, 100, 0)',
              }}
            >
              Past Lectures
            </span>
          </div>
        </div>

        {/* Grid of Boxes */}
        <div
  className="
    grid 
    grid-cols-1 
    [@media(min-width:400px)]:grid-cols-2 
    [@media(min-width:900px)]:grid-cols-4 
    gap-4 
    sm:gap-8 
    mb-12 
    sm:mb-16 
    w-full
  "
>          {boxImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-contain bg-no-repeat bg-center transition-transform duration-300 cursor-pointer hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        {/* Explore Button */}
        <button
          onClick={handleExploreClick}
          className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
          <img
            src="/vector2.png"
            alt="Explore"
            className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain"
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-green-300 text-lg sm:text-xl md:text-2xl font-extrabold font-blackops thin-glow group-hover:text-green-200"
            style={{
              WebkitTextStroke: '0.2px rgba(0, 100, 0)',
            }}
          >
            Explore
          </span>
        </button>
      </div>
    </div>
  );
};

export default PastLectures;