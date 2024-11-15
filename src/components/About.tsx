import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  className="min-h-screen bg-[url('/ig.jpg')] bg-cover bg-center relative z-20 rounded-t-[3rem] border-t-8 border-blue-600"
>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            What We Are
          </motion.h2>

          <div className="prose prose-lg mx-auto prose-invert">
            {/* Text with line-by-line transition */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, staggerChildren: 0.4 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-gray-300 mb-6"
              >
                Mind Bend is a cutting-edge technology company dedicated to pushing the boundaries
                of innovation. We specialize in creating transformative solutions that bridge the
                gap between imagination and reality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-gray-300 mb-6"
              >
                Our team of experts combines creativity with technical excellence to deliver
                exceptional results. We believe in the power of technology to create positive
                change and drive progress across industries.
              </motion.p>
            </motion.div>

            {/* Three Items (Innovation, Excellence, Impact) with staggered effects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, staggerChildren: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Innovation</h3>
                <p className="text-gray-400">Pushing boundaries with creative solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Excellence</h3>
                <p className="text-gray-400">Delivering quality in every project</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Impact</h3>
                <p className="text-gray-400">Creating meaningful change through technology</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
