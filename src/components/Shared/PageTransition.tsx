import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from './PageTransition.module.scss';
import gsap from "gsap";

export const PageTransition = () => {
  const pageTransitionRef = useRef(null);
  const textRef = useRef(null);
  const tl1Ref = useRef(null);

  // const animateText = () => {
  //   return gsap.fromTo(
  //     textRef.current,
  //     { 
  //       opacity: 0, 
  //       y: 30,
  //       skewY: 30,

  //     }, 
  //     { 
  // delay: 1.5,
  //       opacity: 1, 
  //       y: -30, 
  //       skewY: 30,
  //       duration: 1.5,
  //     }
  //   );
  // };

  useLayoutEffect(() => {
    tl1Ref.current = gsap.timeline();
    gsap.set(pageTransitionRef.current, { y: "100%" });

    tl1Ref.current
      .to(pageTransitionRef.current, { 
        y: "0%", 
        duration: 0.5,
      }, 0)
      .from(textRef.current, {
        delay: 1,
        y: 100,
        skewY: 30,
        duration:2
      }).to(textRef.current, {
        delay: 1.5,
        y: -100,
        skewY: -30,
        duration:2
      
      })
      .to(pageTransitionRef.current, { 
        delay: 66 
      })  
      .to(pageTransitionRef.current, { 
        y: "-100%", 
        duration: 1,
        ease: "back.in(1.2)",
      });
  }, []);

  return (
    <section ref={pageTransitionRef} className={styles.pageTransition}>
      <span className={styles.textWrapper}>
        <p ref={textRef}>Motion playground</p>
      </span>
    </section>
  );
};