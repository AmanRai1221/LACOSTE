import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-lacoste-dark">
      {/* Dynamic Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 origin-top"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-lacoste-dark/90 via-lacoste-dark/30 to-black/20 z-10" />
        <div className="absolute inset-0 bg-lacoste-green/10 mix-blend-overlay z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Campaign" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        
        <div className="flex-1 w-full">
          <motion.div className="overflow-hidden mb-[-10px] md:mb-[-20px]">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lacoste-white font-editorial text-6xl md:text-8xl lg:text-[11rem] leading-[0.9] tracking-tight"
            >
              THE ART
            </motion.h1>
          </motion.div>
          <motion.div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lacoste-green font-editorial text-6xl md:text-8xl lg:text-[11rem] leading-[0.9] tracking-tight italic pr-4"
            >
              OF ELEGANCE
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <button className="group relative overflow-hidden bg-lacoste-white text-lacoste-dark px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-semibold tracking-widest transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 group-hover:text-lacoste-white transition-colors duration-500">EXPLORE COLLECTION</span>
              <div className="absolute inset-0 h-full w-full bg-lacoste-green transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>

            {/* Play Button */}
            <button className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-lacoste-white/30 backdrop-blur-md text-lacoste-white hover:bg-lacoste-white hover:text-lacoste-dark transition-all duration-500 hover:scale-105">
               <svg className="w-4 h-4 md:w-5 md:h-5 ml-1 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </motion.div>
        </div>

        {/* Right side floating text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:flex flex-col items-end text-right max-w-sm mb-4"
        >
          <div className="w-12 h-[2px] bg-lacoste-green mb-6" />
          <p className="text-lacoste-white/80 font-sans text-base md:text-lg font-light tracking-wide leading-relaxed">
            A timeless expression of movement, heritage and style. Discover the new collection redefining contemporary luxury sportswear.
          </p>
        </motion.div>
        
      </div>

      {/* Decorative spinning text badge */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
         animate={{ opacity: 1, scale: 1, rotate: 0 }}
         transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
         className="absolute top-24 right-10 md:top-32 md:right-32 z-20 hidden lg:block"
      >
        <div className="relative w-36 h-36 rounded-full border border-lacoste-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl">
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
             <img src="/icon.jpg" alt="Logo" className="w-6 h-6 object-contain" />
           </div>
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 w-full h-full"
           >
              <svg viewBox="0 0 100 100" className="w-full h-full text-lacoste-white uppercase tracking-[0.3em] text-[8.5px] font-semibold">
                <path id="circlePathHero" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath href="#circlePathHero" startOffset="0%">
                     LACOSTE • EST 1933 • FRENCH ELEGANCE • 
                  </textPath>
                </text>
              </svg>
           </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-0 left-6 md:left-12 z-20 hidden md:flex items-center"
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-24 bg-lacoste-white/20 overflow-hidden relative mb-6">
            <motion.div 
              className="w-full h-1/2 bg-lacoste-green absolute top-0 left-0"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-lacoste-white/60 text-[10px] tracking-[0.4em] uppercase -rotate-90 origin-bottom translate-y-10">Scroll</span>
        </div>
      </motion.div>

    </section>
  );
}
