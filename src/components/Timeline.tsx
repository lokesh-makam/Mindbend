import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to 5 new countries',
      side: 'right'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received Technology Innovation of the Year',
      side: 'left'
    },
    {
      year: '2021',
      title: 'Product Launch',
      description: 'Launched our flagship AI platform',
      side: 'right'
    },
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Mind Bend was established',
      side: 'left'
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />

          {/* Events */}
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: event.side === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex mb-24 relative"
            >
              {event.side === 'left' ? (
                <>
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                      <span className="text-blue-400 font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-semibold mt-2 text-white">{event.title}</h3>
                      <p className="text-gray-400 mt-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2 pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                      <span className="text-blue-400 font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-semibold mt-2 text-white">{event.title}</h3>
                      <p className="text-gray-400 mt-2">{event.description}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;