// useWheelRotation.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useWheelRotation = (wheelRef, imgCardRefs, setCurrentStone, stones) => {
  
  useEffect(() => {
    // Wheel rotation
    const wheel = wheelRef.current;
    const images = imgCardRefs.current;

    const rotationPerImage = 360 / images.length;
    const totalRotation = rotationPerImage * (images.length - 1);
    const slice = (2 * Math.PI) / images.length;

    function setup() {
      const radius = wheel.offsetWidth / 2;
      const center = wheel.offsetWidth / 2;

      images.forEach((item, i) => {
        const angle = i * slice;
        const x = center + radius * Math.sin(angle);
        const y = center - radius * Math.cos(angle);
        gsap.set(item, {
          rotation: angle + "_rad",
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    }

    const snapPositions = [];
    for (let i = 0; i < images.length; i++) {
      snapPositions.push(i / (images.length - 1));
    }

    gsap.to(wheel, {
      rotate: () => -totalRotation,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
        snap: snapPositions,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const effectiveProgress = self.progress * (stones.length - 1);
          const index = Math.round(effectiveProgress);
          if (index < stones.length) {
            setCurrentStone(stones[index]);
          }
        },
      },
    });

    setup();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, [wheelRef, imgCardRefs, setCurrentStone, stones]);
};
