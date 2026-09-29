import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = ['MEN', 'WOMEN', 'COLLECTIONS', 'HERITAGE'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled ? 'bg-lacoste-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="#" className={cn(
              "text-2xl font-editorial font-bold tracking-widest transition-colors duration-300",
              isScrolled || isMobileMenuOpen ? "text-lacoste-green" : "text-lacoste-white"
            )}>
              L'ELEGANCE
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 relative group",
                  isScrolled ? "text-lacoste-dark" : "text-lacoste-white"
                )}
              >
                {link}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-lacoste-green" : "bg-lacoste-white"
                )}></span>
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className={cn(
            "hidden md:flex items-center space-x-6 transition-colors duration-300",
            isScrolled ? "text-lacoste-dark" : "text-lacoste-white"
          )}>
            <button className="hover:opacity-70 transition-opacity"><Search size={20} strokeWidth={1.5} /></button>
            <button className="hover:opacity-70 transition-opacity"><User size={20} strokeWidth={1.5} /></button>
            <button className="hover:opacity-70 transition-opacity"><ShoppingBag size={20} strokeWidth={1.5} /></button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden z-50 transition-colors duration-300",
              isScrolled || isMobileMenuOpen ? "text-lacoste-green" : "text-lacoste-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-lacoste-light flex flex-col justify-center items-center pt-20"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="text-4xl font-editorial text-lacoste-green hover:opacity-70 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex space-x-8 text-lacoste-green"
            >
              <Search size={24} />
              <User size={24} />
              <ShoppingBag size={24} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
