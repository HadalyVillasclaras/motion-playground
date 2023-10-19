import { useEffect, useRef, useState } from 'react';
import styles from './PageTransition.module.scss';
import gsap from "gsap";


export const PageTransition = () => {
  const toPageTransition = true;
  const pageTransitionRef = useRef(null);
  const textRef = useRef(null);
  const tl1Ref = useRef(null);

  useEffect(() => {
    tl1Ref.current = gsap.timeline();

    gsap.set(pageTransitionRef.current, { y: "100%" });

    tl1Ref.current
    .to(pageTransitionRef.current, { 
      y: "0%", 
      duration: 0.5,
    }, 0)
    .fromTo(textRef.current,
      { 
        opacity: 0, 
        y: 30 
      },{ 
        opacity: 1, 
        y: 0, 
        duration: 0.5 
      }, ">=0.5")
    .to(pageTransitionRef.current, { 
      delay: 6 
    })  
    .to(pageTransitionRef.current, { 
      y: "-100%", 
      duration: 1 
    });
  }, []);

  return (
    <section ref={pageTransitionRef} className={styles.pageTransition}>
      <p ref={textRef}>Motion playground</p>
    </section>
  );
};
