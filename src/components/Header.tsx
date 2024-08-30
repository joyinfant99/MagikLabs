'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import About from './About';  // Make sure this path is correct

const MobileMenuDrawer = ({ isOpen, onClose }) => {
  const drawerVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-4">
              <button onClick={onClose} className="mb-4">
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <About />
                  </li>
                  <li>
                    <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-gray-600" onClick={onClose}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">MagikLabs</Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <About />
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <MobileMenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}