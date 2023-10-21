import { useLayoutEffect, useRef } from "react";

import styles from './PageTransition.module.scss';
import gsap from "gsap";

export const PageTransition = () => {
  const pageTransitionRef = useRef(null);
  const textRef = useRef(null);
  const tl1Ref = useRef(null);
  const tl2Ref = useRef(null);


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
    gsap.set(pageTransitionRef.current, { y: "100%", opacity: 1 });

    tl1Ref.current = gsap.timeline({
      onStart: () => {
        document.body.style.overflow = 'hidden';
      },
      onComplete: () => {
        document.body.style.overflow = 'unset';

      }
    });

    const ctx = gsap.context(() => {
      tl1Ref.current
        .to(pageTransitionRef.current, { 
          y: "0%", 
          duration: 0.8,
        }, 0)
        .to(pageTransitionRef.current, { 
          delay: 2.3,
          y: "-150%", 
          duration: 2,
          // opacity:0,
          // skewY: 30,
          ease: "power2.out",
        }, );

    }, pageTransitionRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  const text = "Motion playground"; //17
  const letters = text.split("");
  const lettersRefs = useRef([]);

  useLayoutEffect(() => {
    tl2Ref.current = gsap.timeline();
    
    let ctx = gsap.context(() => {
      tl2Ref.current
        .from(textRef.current, {
          duration:1,
          delay: 0.3,
          y: 200,
          skewY:40,
        }, 0)
        .from(lettersRefs.current, {
          y: 100,
          stagger: 0.05,
          opacity: 0 
        }, 0) 
        .to(textRef.current, {
          y: -200,
          skewY: 40,
          duration:3,
        },">+1.5")
        .to(lettersRefs.current, {
          y: -100,
          stagger: 0.2,
          opacity: 0
        },">-0.2") 
        ; 

    }, textRef.current);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={pageTransitionRef} className={styles.pageTransition}>
      <span className={styles.textWrapper}>
        <h4 ref={textRef}>
          {letters.map((word, index) => (
            <span
              className={styles.letter}
              ref={el => lettersRefs.current[index] = el}
              key={index}
            >
              {word}
            </span>
          ))}
        </h4>
      </span>



    </section>
  );
};