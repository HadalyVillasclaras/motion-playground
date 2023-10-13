import React, { useLayoutEffect, useRef } from 'react'
import styles from "./ThemeSwitcher.module.scss";
import gsap from 'gsap';
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

export const ThemeSwitcher = () => {
  const pillRef = useRef(null);
  const bgRef = useRef(null);
  const tlRef = useRef(null); 
  
  const [isDark, switchTheme] = useSwitchTheme();


  useLayoutEffect(() => {
    tlRef.current = gsap.timeline({paused: true});
    tlRef.current.to(pillRef.current, { 
      x: -200, 
      duration: 1,
      onStart: () => {console.log('start!');},
      onReverseComplete: () => {console.log('reverse complete!');}
    }, 0);
    tlRef.current.to(bgRef.current, { 
      // backgroundColor: '#0C0B0A', // var(--text-dark)
      duration: 0
    }, 0); //si la duracion de la primera es 2, 1 seria la mitad 
  }, [])

  function handleAnimation() {
    if (!isDark) {
      tlRef.current.reverse();
    } else if(isDark) {
      tlRef.current.play();
    }
  }

  return (
    <>
      <div onClick={() => {handleAnimation(); setTimeout(() => { switchTheme();}, 500); }} className={styles["ts-box"]}>
        <div ref={bgRef} className={styles["ts-bg"]}>
        </div>
        <button  ref={pillRef} className={styles["ts-pill"]}>
        </button>
      </div>
    </>
  )
}
