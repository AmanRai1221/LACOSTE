import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image (Placeholder for fashion campaign) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Campaign" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-lacoste-white font-editorial text-5xl md:text-7xl lg:text-9xl tracking-tight mb-6">
            THE ART OF ELEGANCE
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lacoste-white/90 font-sans text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide">
            A timeless expression of movement, heritage and style.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="border border-lacoste-white text-lacoste-white px-8 py-4 text-sm tracking-widest hover:bg-lacoste-white hover:text-lacoste-green transition-colors duration-500 ease-in-out"
        >
          EXPLORE COLLECTION
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-lacoste-white text-xs tracking-[0.2em] mb-4">SCROLL</span>
        <div className="w-[1px] h-12 bg-lacoste-white/30 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-lacoste-white absolute top-0 left-0"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
