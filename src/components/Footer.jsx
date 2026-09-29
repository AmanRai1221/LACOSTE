import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-lacoste-green text-lacoste-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-lacoste-white/20 pb-16">
          <div className="max-w-xl mb-10 md:mb-0">
            <h3 className="font-editorial text-3xl md:text-5xl mb-4">Join the Club</h3>
            <p className="text-lacoste-white/70 font-sans font-light">
              Subscribe to receive exclusive access to new collections, events, and editorial content.
            </p>
          </div>
          <div className="w-full md:w-auto flex-grow max-w-md">
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-lacoste-white/50 py-4 pr-12 text-lacoste-white placeholder:text-lacoste-white/50 focus:outline-none focus:border-lacoste-white transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-lacoste-white hover:text-lacoste-white/70 transition-colors"
              >
                <ArrowRight size={24} strokeWidth={1} />
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <a href="#" className="text-2xl font-editorial font-bold tracking-widest inline-block mb-8">
              L'ELEGANCE
            </a>
            <div className="flex space-x-6 text-xs font-semibold tracking-widest">
              <a href="#" className="text-lacoste-white/70 hover:text-lacoste-white transition-colors">INSTAGRAM</a>
              <a href="#" className="text-lacoste-white/70 hover:text-lacoste-white transition-colors">X</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-4 text-lacoste-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Polo Shirts</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Sneakers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6">SERVICES</h4>
            <ul className="space-y-4 text-lacoste-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Find a Boutique</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6">ABOUT</h4>
            <ul className="space-y-4 text-lacoste-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Brand Heritage</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-lacoste-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-lacoste-white/50 font-light border-t border-lacoste-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} L'Elegance. Inspired by Lacoste.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-lacoste-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lacoste-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
