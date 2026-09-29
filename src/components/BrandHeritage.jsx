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

        {/* Asymmetric Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
          
          <div className="w-full md:w-5/12 flex flex-col pt-12 md:pt-32">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lacoste-dark/80 font-sans font-light text-lg md:text-xl leading-relaxed mb-12"
            >
              Born from the spirit of a tennis champion, our legacy is woven into every thread. We believe that true elegance lies in the freedom of movement—a philosophy that transforms sportswear into timeless fashion.
            </motion.p>
            <motion.div style={{ y: y1 }} className="overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1590481269389-9e8cce91176b?q=80&w=1969&auto=format&fit=crop" 
                alt="Tennis Heritage" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-7/12">
            <motion.div style={{ y: y2 }} className="overflow-hidden aspect-[4/5] mb-12">
              <img 
                src="https://images.unsplash.com/photo-1533681478149-14a09a56598c?q=80&w=2003&auto=format&fit=crop" 
                alt="French Elegance" 
                className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
            </motion.div>
            <div className="text-right">
              <p className="text-lacoste-dark font-editorial text-2xl md:text-3xl italic text-lacoste-green">
                "Without elegance, playing and winning are not enough."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
