'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import SegmentedControl from '@/components/SegmentedControl';
import Hero from '@/components/Hero';

type ProductCategory = 'All' | 'SalesTech' | 'Productivity' | 'Others';

type Product = {
  name: string;
  tagline: string;
  description: string;
  status: 'Explore' | 'Beta' | 'Coming Soon';
  type: 'WebApp' | 'Channel' | 'Blog';
};

const products: Record<ProductCategory, Product[]> = {
  All: [
    {
      name: "ReplyMagik",
      tagline: "AI-powered email responses",
      description: "Boost your email productivity with smart, contextual replies.",
      status: "Explore",
      type: "WebApp"
    },
    {
      name: "ReviewMagik",
      tagline: "Streamline customer feedback",
      description: "Analyze and respond to customer reviews efficiently.",
      status: "Beta",
      type: "Channel"
    },
    {
      name: "NoteMagik",
      tagline: "Smart note-taking app",
      description: "Organize your thoughts with AI-assisted note-taking.",
      status: "Explore",
      type: "WebApp"
    },
    {
      name: "HueMagik",
      tagline: "Color palette generator",
      description: "Create stunning color schemes for your projects.",
      status: "Coming Soon",
      type: "WebApp"
    },
    {
      name: "MyPrayerBook",
      tagline: "Digital prayer companion",
      description: "Organize and track your spiritual journey.",
      status: "Beta",
      type: "Blog"
    }
  ],
  SalesTech: [
    {
      name: "ReplyMagik",
      tagline: "AI-powered email responses",
      description: "Boost your email productivity with smart, contextual replies.",
      status: "Explore",
      type: "WebApp"
    },
    {
      name: "ReviewMagik",
      tagline: "Streamline customer feedback",
      description: "Analyze and respond to customer reviews efficiently.",
      status: "Beta",
      type: "Channel"
    }
  ],
  Productivity: [
    {
      name: "NoteMagik",
      tagline: "Smart note-taking app",
      description: "Organize your thoughts with AI-assisted note-taking.",
      status: "Explore",
      type: "WebApp"
    },
    {
      name: "HueMagik",
      tagline: "Color palette generator",
      description: "Create stunning color schemes for your projects.",
      status: "Coming Soon",
      type: "WebApp"
    }
  ],
  Others: [
    {
      name: "MyPrayerBook",
      tagline: "Digital prayer companion",
      description: "Organize and track your spiritual journey.",
      status: "Beta",
      type: "Blog"
    }
  ]
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

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
    <div className="bg-white min-h-screen flex flex-col">
      <Hero />
      <main className="container mx-auto px-4 py-8 flex-grow">
      <SegmentedControl
        options={['All', 'SalesTech', 'Productivity', 'Others'] as const}
        onChange={(category) => setSelectedCategory(category as ProductCategory)}
        initialSelected="All"
      />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        {products[selectedCategory as ProductCategory].map((product, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProductCard {...product} />
          </motion.div>
        ))}
        </motion.div>
      </main>
    </div>
  );
}