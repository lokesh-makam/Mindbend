import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black z-15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MINDBEND</h3>
            <p className="text-gray-400">
              NIT Surat's Annual Technical Festival
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-500" />
                <span className="text-gray-400">contact@mindbend.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-500" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-purple-500" />
                <span className="text-gray-400">NIT Surat, Gujarat</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="mb-4" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}>
              {/* Embed Google Map */}
              <iframe
                title="SVNIT Surat Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2494.0389355705183!2d72.78738370078527!3d21.1690594842023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1731611243151!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mindbend, NIT Surat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
