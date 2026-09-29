import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'THE L003 NEO',
    category: 'SNEAKERS',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'AUTUMN KNITWEAR',
    category: 'APPAREL',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'SIGNATURE LEATHER',
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  }
];

export default function CollectionGrid() {
  return (
    <section className="py-24 bg-lacoste-light">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-editorial text-lacoste-dark mb-2">Curated Essentials</h2>
            <p className="text-lacoste-dark/60 font-sans tracking-wide">Explore our most coveted pieces.</p>
          </motion.div>
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-lacoste-dark border-b border-lacoste-dark pb-1 hover:text-lacoste-green hover:border-lacoste-green transition-colors"
          >
            <span className="text-sm font-semibold tracking-widest">VIEW ALL</span>
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {collections.map((item, index) => (
            <motion.a
              href={`#product-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden bg-lacoste-white ${item.span} block`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lacoste-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <p className="text-lacoste-white/80 text-xs font-semibold tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.category}
                  </p>
                  <h3 className="text-lacoste-white font-editorial text-2xl md:text-3xl transition-transform duration-500 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-lacoste-white flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <ArrowUpRight size={20} className="text-lacoste-dark" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-lacoste-dark border-b border-lacoste-dark pb-1 text-sm font-semibold tracking-widest">
            VIEW ALL <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
