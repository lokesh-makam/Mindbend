import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Tech Corp', level: 'Platinum' },
    { name: 'Innovation Labs', level: 'Gold' },
    { name: 'Future Systems', level: 'Gold' },
    { name: 'Digital Solutions', level: 'Silver' },
    { name: 'Next Gen', level: 'Silver' },
    { name: 'Smart Tech', level: 'Silver' },
  ];

  return (
    <div className="py-20 ">
      <div className="max-w-7xl bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8  rounded-3xl shadow-xl shadow-indigo-500/50 p-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400">Proudly supported by industry leaders</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {sponsor.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{sponsor.name}</h3>
              <span className="mt-2 text-sm text-purple-400 font-medium">{sponsor.level} Sponsor</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;