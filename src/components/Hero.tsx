'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaLightbulb, FaRocket } from 'react-icons/fa';
import ProductsModal from './ProductsModal';

const iconVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } }
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-light-gray to-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-deep-navy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-azure-blue">Magik</span>Labs
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative SaaS tools for everyday productivity
        </motion.p>
        
        <div className="flex justify-center space-x-12 mb-8">
          {[
            { Icon: FaMagic, text: "Intuitive", color: "text-azure-blue" },
            { Icon: FaLightbulb, text: "Smart", color: "text-tech-green" },
            { Icon: FaRocket, text: "Efficient", color: "text-deep-navy" }
          ].map(({ Icon, text, color }, index) => (
            <motion.div
              key={text}
              className="flex flex-col items-center"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={iconVariants}
              custom={index}
            >
              <Icon className={`text-3xl mb-2 ${color}`} />
              <span className="text-sm font-medium text-gray-700">{text}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
            className="
                inline-flex items-center justify-center
                bg-gradient-to-r from-azure-blue to-deep-navy
                text-gray-700 font-bold
                px-6 py-3 rounded-full
                shadow-lg hover:shadow-xl
                transition-all duration-300
                text-sm
                border border-transparent
                hover:border-azure-blue
                group
            "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            >
            <span className="mr-2">Explore Our Products</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
            >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </motion.button>
      </div>
      <ProductsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;