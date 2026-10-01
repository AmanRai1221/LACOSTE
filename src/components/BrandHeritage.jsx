import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandHeritage() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="py-32 bg-lacoste-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lacoste-green font-sans tracking-[0.3em] text-xs font-semibold mb-6"
          >
            OUR HERITAGE
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-editorial text-lacoste-dark leading-tight"
          >
            FROM THE COURT <br className="hidden md:block"/> TO THE WORLD
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-8">
          
          <div className="w-full md:w-5/12 flex flex-col justify-between py-12 md:py-24">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lacoste-dark/80 font-sans font-light text-lg md:text-xl leading-relaxed max-w-md relative z-10"
            >
              <span className="block w-12 h-px bg-lacoste-green mb-6"></span>
              Born from the spirit of a tennis champion, our legacy is woven into every thread. We believe that true elegance lies in the freedom of movement—a philosophy that transforms sportswear into timeless fashion.
            </motion.p>
            
            <div className="mt-16 md:mt-auto">
              <p className="text-lacoste-dark font-editorial text-2xl md:text-4xl italic text-lacoste-green/80">
                "Without elegance, playing and winning are not enough."
              </p>
              <p className="mt-4 font-sans text-sm tracking-widest text-lacoste-dark/50 uppercase font-semibold">— René Lacoste</p>
            </div>
          </div>

          <div className="w-full md:w-7/12 relative min-h-[450px] md:min-h-[600px] flex items-center justify-center rounded-3xl bg-lacoste-light/50 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lacoste-green/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-lacoste-green/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

            {/* Central Logo */}
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center border border-white"
            >
               <img src="/icon.jpg" alt="Lacoste Logo" className="w-1/2 h-1/2 object-contain" />
               
               {/* Decorative Rings */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-4 rounded-full border border-dashed border-lacoste-green/20"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-8 rounded-full border border-lacoste-green/10"
               />
            </motion.div>

            {/* Floating UI Element 1: Heritage */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-8 md:top-16 right-4 md:right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white max-w-[220px] z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-lacoste-dark flex items-center justify-center text-white font-editorial text-xl">
                   '33
                 </div>
                 <div>
                   <h5 className="font-sans font-bold text-lacoste-dark text-sm">Founded</h5>
                   <p className="text-[10px] text-lacoste-green uppercase tracking-wider font-semibold">Paris, France</p>
                 </div>
              </div>
              <p className="text-xs text-lacoste-dark/70 leading-relaxed font-medium">Creation of the iconic L.12.12 polo shirt by René Lacoste.</p>
            </motion.div>

            {/* Floating UI Element 2: Craftsmanship */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-8 md:bottom-16 left-4 md:left-8 bg-lacoste-dark p-6 rounded-2xl shadow-2xl max-w-[240px] z-20"
            >
              <div className="flex justify-between items-center mb-4">
                <h5 className="font-editorial text-white text-lg">Crocodile Logo</h5>
                <span className="w-2 h-2 rounded-full bg-lacoste-green animate-pulse"></span>
              </div>
              
              <div className="w-full h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                   className="h-full bg-lacoste-green"
                 />
              </div>
              
              <div className="flex gap-4">
                <div className="text-center w-full">
                  <div className="text-white font-bold text-lg">100%</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">Authentic</div>
                </div>
                <div className="w-px bg-white/10"></div>
                <div className="text-center w-full">
                  <div className="text-white font-bold text-lg">1st</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">Brand Logo</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
