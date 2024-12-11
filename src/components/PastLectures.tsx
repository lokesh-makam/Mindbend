import React from 'react';

const PastLectures: React.FC = () => {
  const boxImages = [
    '/vectormain.png',
    '/vectormain.png',
    '/vectormain.png',
    '/vectormain.png'
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aboutmb.jpg"
          alt="Past Lectures Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        {/* Past Lectures Text */}
        <div className="mb-16 w-full flex justify-center">
          <div className="relative">
            <img
              src="/vector1.png"
              alt="Past Lectures"
              className="w-full max-w-[300px] h-auto object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold font-serif">
              Past Lectures
            </span>
          </div>
        </div>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 w-full">
          {boxImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-contain bg-no-repeat bg-center transition-transform duration-300 cursor-pointer hover:scale-105"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>

        {/* Explore Text */}
        <div className="w-full flex justify-center">
          <div className="relative">
            <img
              src="/vector2.png"
              alt="Explore"
              className="w-full max-w-[200px] h-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold font-serif">
              Explore
            </span>
          </div>
        </div>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
    </div>
  );
};

export default PastLectures;