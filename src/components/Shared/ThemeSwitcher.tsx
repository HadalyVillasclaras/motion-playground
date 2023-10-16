import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from "./ThemeSwitcher.module.scss";
import gsap from 'gsap';
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

export const ThemeSwitcher = () => {
  const pillRef = useRef(null);
  const toggleBoxRef = useRef(null);
  const [isDark, switchTheme] = useSwitchTheme();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isDark) {
        gsap.set(pillRef.current, { x: '30%' });
      } else {
        gsap.set(pillRef.current, { x: '-30%' });
      }
    }, toggleBoxRef);
   
    return () => ctx.revert();
  }, []); 

  function handleAnimation() {
    if (isDark) {
      gsap.fromTo(pillRef.current,
        { x: '30%' },
        { x: '-30%', duration: 0.3 }
      );
    } else {
      gsap.fromTo(pillRef.current,
        { x: '-30%' },
        { x: '30%', duration: 0.3 }
      );
    }
  }

  return (
    <>
      <div  ref={toggleBoxRef} onClick={() => { handleAnimation(); setTimeout(() => { switchTheme(); }, 150); }} className={`${styles["ts-box"]} expnd-crs`}>
        <div className={styles["ts-bg"]}></div>
        <button ref={pillRef} className={styles["ts-pill"]}></button>
      </div>
    </>
  )
}
