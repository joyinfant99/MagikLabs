'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import SegmentedControl from './SegmentedControl';

interface ProductSectionProps {
  products: {
    [key: string]: Array<{
      name: string;
      tagline: string;
      description: string;
      status: string;
      type: string;
    }>;
  };
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(products)[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <SegmentedControl
        options={Object.keys(products)}
        onChange={setSelectedCategory}
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products[selectedCategory].map((product, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProductSection;