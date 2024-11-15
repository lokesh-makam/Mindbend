import React from 'react';
import { Calendar, Users, Trophy, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: 'Technical Symposium',
      description: 'Showcase your technical prowess through challenging competitions',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    },
    {
      title: 'Workshops',
      description: 'Learn from industry experts in hands-on technical workshops',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    },
    {
      title: 'Innovation Hub',
      description: 'Experience cutting-edge technology and innovative projects',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    },
    {
      title: 'Event Timeline',
      description: 'Explore our exciting schedule of events and activities',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80',
      onClick: () => navigate('/timeline'),
    },
  ];

  return (
<div className="py-20  ">    
<div className="max-w-7xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8  rounded-3xl p-8 shadow-xl shadow-indigo-500/50">
          <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Events</h2>
          <p className="text-xl text-gray-400">Discover our flagship events and activities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={event.onClick}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <event.icon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                </div>
                <p className="text-gray-400">{event.description}</p>
                <button className="mt-4 text-purple-400 font-medium hover:text-purple-300 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;