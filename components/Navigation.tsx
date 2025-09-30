'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-black/80' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Urban<span className="text-[#9B1E22] text-2xl md:text-3xl font-bold tracking-tight">Cravin</span>
            </h1>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#new"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              New Drops
            </a>
            <a
              href="#tees"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              Oversized Tees
            </a>
            <a
              href="#vests"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              Vests
            </a>
            <a
              href="#bestsellers"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              Best Sellers
            </a>
            <a
              href="#collections"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              About
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] rounded"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] rounded"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] rounded relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#9B1E22] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
