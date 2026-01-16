import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number; // Multiplier for parallax effect (0-1, lower is slower)
  startOffset?: number; // Start offset from top of page
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.3, startOffset = 0 } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      const scrollY = window.scrollY;
      // Calculate parallax offset relative to start position
      const parallaxOffset = (scrollY - startOffset) * speed;
      setOffset(parallaxOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOffset);
        ticking = true;
      }
    };

    // Initial calculation
    updateOffset();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, startOffset]);

  return { offset };
};
