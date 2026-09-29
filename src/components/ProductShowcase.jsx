import React from 'react';
import { motion } from 'framer-motion';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-lacoste-light overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image with Parallax */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="overflow-hidden bg-lacoste-white aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop" 
                alt="Featured Product" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            {/* Minimal Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-t border-l border-lacoste-green hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-lacoste-green font-sans tracking-widest text-sm font-semibold mb-4">
                THE SIGNATURE POLO
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-lacoste-dark mb-6 leading-tight">
                Refined Elegance, <br /> Defined by Movement
              </h2>
              <p className="text-lacoste-dark/70 font-sans font-light text-lg mb-10 max-w-lg leading-relaxed">
                Crafted from premium petit piqué cotton, our signature polo transcends generations. A seamless blend of athletic heritage and modern sophistication, designed to move with you gracefully through every aspect of life.
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-lacoste-dark/10">
                <div>
                  <h5 className="text-xs tracking-widest text-lacoste-dark/50 mb-1">MATERIAL</h5>
                  <p className="text-sm text-lacoste-dark font-medium">100% Organic Cotton</p>
                </div>
                <div>
                  <h5 className="text-xs tracking-widest text-lacoste-dark/50 mb-1">FIT</h5>
                  <p className="text-sm text-lacoste-dark font-medium">Classic Tailored</p>
                </div>
              </div>

              <button className="bg-lacoste-green text-lacoste-white px-10 py-4 text-sm tracking-widest hover:bg-lacoste-dark transition-colors duration-300 w-full sm:w-auto text-center">
                DISCOVER THE COLLECTION
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
