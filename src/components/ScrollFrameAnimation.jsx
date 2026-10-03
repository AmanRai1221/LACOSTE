import React, { useRef, useEffect } from 'react';
import { useScrollFrameAnimation } from '../hooks/useScrollFrameAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { id: 1, text: "A LEGACY OF STYLE" },
  { id: 2, text: "BORN ON THE COURT" },
  { id: 3, text: "CRAFTED TO MOVE" },
  { id: 4, text: "THE ICONIC DETAIL" },
  { id: 5, text: "TIMELESS BY NATURE", hasCTA: true },
];

export default function ScrollFrameAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textContainerRef = useRef(null);

  const { imagesLoaded, progress } = useScrollFrameAnimation({
    frameCount: 271,
    framePathPrefix: '/frames/ezgif-frame-',
    framePathSuffix: '.jpg',
    triggerRef: containerRef,
    canvasRef: canvasRef,
  });

  useEffect(() => {
    if (!textContainerRef.current) return;
    
    const textElements = textContainerRef.current.children;
    const totalFrames = 271;
    const endScroll = totalFrames * 20;

    // We can use a timeline for the text that scrubs with the same trigger as the canvas
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${endScroll}`,
        scrub: true,
      }
    });

    const step = 1 / scenes.length;

    scenes.forEach((scene, i) => {
      // Each text appears and disappears in its own fraction of the scroll
      const el = textElements[i];
      const startFadeIn = i * step;
      const endFadeIn = startFadeIn + step * 0.2;
      const startFadeOut = startFadeIn + step * 0.8;
      const endFadeOut = (i + 1) * step;

      // Reset initial state
      gsap.set(el, { opacity: 0, y: 50 });

      // Animate based on total progress using timeline mapping time to fixed absolute values 0 to 1
      tl.to(el, { opacity: 1, y: 0, duration: step * 0.2, ease: "power2.out" }, startFadeIn)
        .to(el, { opacity: 0, y: -50, duration: step * 0.2, ease: "power2.in" }, startFadeOut);
    });
    
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    }
  }, [imagesLoaded]);

  return (
    <section ref={containerRef} className="relative bg-lacoste-dark w-full">
      
      {/* Loading Indicator */}
      {imagesLoaded < 271 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-lacoste-dark text-lacoste-white">
          <div className="text-center">
            <p className="font-editorial text-2xl tracking-widest mb-4">LOADING EXPERIENCE</p>
            <div className="w-64 h-[1px] bg-lacoste-white/20 mx-auto relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-lacoste-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm mt-4 tracking-widest">{Math.round(progress)}%</p>
          </div>
        </div>
      )}

      {/* Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-screen block pointer-events-none object-cover"
      />

      {/* Overlay to improve text legibility */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-lacoste-dark/80 via-transparent to-lacoste-dark/30 pointer-events-none" />

      {/* Text Overlay Layer */}
      <div 
        ref={textContainerRef}
        className="absolute inset-0 w-full h-screen pointer-events-none flex items-center justify-center px-4"
      >
        {scenes.map((scene, i) => (
          <div 
            key={scene.id}
            className="absolute text-center flex flex-col items-center pointer-events-auto"
            style={{ opacity: 0 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl text-lacoste-white font-editorial tracking-tighter font-medium" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}>
              {scene.text}
            </h2>
            {scene.hasCTA && (
              <button className="mt-12 border border-lacoste-white/50 text-lacoste-white px-10 py-5 text-sm tracking-widest hover:bg-lacoste-white hover:text-lacoste-dark transition-all duration-500 backdrop-blur-sm bg-black/10">
                DISCOVER THE COLLECTION
              </button>
            )}
          </div>
        ))}
      </div>
      
    </section>
  );
}
