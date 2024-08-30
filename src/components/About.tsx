'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-purple-600 hover:text-purple-800 transition-colors"
      >
        About
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl overflow-hidden relative"
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <motion.img
                  src="https://i.postimg.cc/bNRBnCDQ/Untitled-design.png" // Replace with actual image path
                  alt="Joy Infant"
                  className="w-40 h-40 rounded-full object-cover border-4 border-purple-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Joy Infant</h2>
                  <p className="text-gray-600 mb-4">
                    Creator of MagikLabs and passionate app developer
                  </p>
                  <p className="text-gray-600 mb-6">
                    Joy Infant is the creative force behind MagikLabs, crafting innovative SaaS tools 
                    as hobby projects. With a keen eye for user experience and a passion for solving 
                    everyday problems, Joy brings a touch of magic to productivity apps.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/joyinfant" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/joyinfant" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com/joyinfant" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-8 p-4 bg-purple-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-2">MagikLabs Philosophy</h3>
                <p className="text-purple-700">
                  "I believe in creating tools that not only boost productivity but also bring joy to 
                  everyday tasks. MagikLabs is where imagination meets functionality, turning routine 
                  work into magical experiences."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;