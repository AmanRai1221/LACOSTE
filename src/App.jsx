import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollFrameAnimation from './components/ScrollFrameAnimation';
import ProductShowcase from './components/ProductShowcase';
import BrandHeritage from './components/BrandHeritage';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-lacoste-light min-h-screen selection:bg-lacoste-green selection:text-lacoste-white">
      <Navbar />
      <main>
        <Hero />
        <ScrollFrameAnimation />
        <ProductShowcase />
        <BrandHeritage />
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
