import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaCheckCircle, FaEnvelope, FaStar, FaBook, FaPalette, FaPray } from 'react-icons/fa';

const products = [
  {
    name: "ReplyMagik",
    features: [
      "AI-powered email response suggestions",
      "Custom learning from your writing style",
      "Integration with popular email clients",
      "Multi-language support",
      "Privacy-focused design"
    ],
    Icon: FaEnvelope
  },
  {
    name: "ReviewMagik",
    features: [
      "Automated sentiment analysis of customer reviews",
      "Customizable response templates",
      "Integration with major review platforms",
      "Trend analysis and reporting",
      "Team collaboration features"
    ],
    Icon: FaStar
  },
  {
    name: "NoteMagik",
    features: [
      "AI-assisted note organization",
      "Real-time collaboration",
      "Cross-platform synchronization",
      "Rich media embedding",
      "Advanced search capabilities"
    ],
    Icon: FaBook
  },
  {
    name: "HueMagik",
    features: [
      "AI-powered color palette generation",
      "Color accessibility checker",
      "Export to various design software",
      "Inspiration from images and trends",
      "Customizable color rules"
    ],
    Icon: FaPalette
  },
  {
    name: "MyPrayerBook",
    features: [
      "Customizable prayer tracker",
      "Inspirational content delivery",
      "Community prayer requests",
      "Multi-faith support",
      "Meditation timer and guided sessions"
    ],
    Icon: FaPray
  }
];

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductsModal: React.FC<ProductsModalProps> = ({ isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-deep-navy">Our Products</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  className="bg-gradient-to-r from-light-gray to-white rounded-lg p-6 shadow-lg flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-azure-blue flex items-center">
                      <product.Icon className="mr-2 text-3xl" />
                      {product.name}
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-gray-700 flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        >
                          <FaCheckCircle className="text-tech-green mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <motion.div
                      className="w-32 h-32 flex items-center justify-center text-azure-blue"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      <product.Icon className="w-24 h-24" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById('modal-root') || document.body);
  } else {
    return null;
  }
};

export default ProductsModal;