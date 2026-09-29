import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollFrameAnimation({ frameCount, framePathPrefix, framePathSuffix, triggerRef, canvasRef }) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef({ frame: 0 });

  useEffect(() => {
    // Preload images
    let loaded = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `${framePathPrefix}${paddedIndex}${framePathSuffix}`;
        img.onload = () => {
          loaded++;
          setImagesLoaded(loaded);
        };
        img.onerror = () => {
          // fallback for missing image
          console.warn(`Failed to load frame ${i}`);
          loaded++;
          setImagesLoaded(loaded);
        };
        imagesRef.current.push(img);
      }
    };

    preloadImages();

    return () => {
      imagesRef.current = [];
    };
  }, [frameCount, framePathPrefix, framePathSuffix]);

  useEffect(() => {
    if (imagesLoaded < frameCount || !canvasRef.current || !triggerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Setup canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndexRef.current.frame);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // initial size

    // Render function
    function render(index) {
      if (!ctx || !canvas) return;
      
      const img = imagesRef.current[Math.round(index)];
      if (img && img.complete && img.naturalWidth !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate scale to cover canvas (like object-fit: cover)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }

    // GSAP ScrollTrigger
    const st = gsap.to(frameIndexRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${frameCount * 20}`, // Adjust scroll length based on frame count
        scrub: 0.5,
        pin: true,
      },
      onUpdate: () => render(frameIndexRef.current.frame)
    });

    // Initial render
    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (st.scrollTrigger) {
        st.scrollTrigger.kill();
      }
      st.kill();
    };
  }, [imagesLoaded, frameCount, canvasRef, triggerRef]);

  return { imagesLoaded, progress: (imagesLoaded / frameCount) * 100 };
}
