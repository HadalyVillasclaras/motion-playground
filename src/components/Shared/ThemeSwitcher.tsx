import { useContext, useLayoutEffect, useRef } from 'react'
import styles from "./ThemeSwitcher.module.scss";
import gsap from 'gsap';
import { ThemeContext } from '../../context/theme/ThemeContext';

export const ThemeSwitcher = () => {
  const pillRef = useRef(null);
  const toggleBoxRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (theme === 'dark') {
        gsap.set(pillRef.current, { x: '30%' });
      } else {
        gsap.set(pillRef.current, { x: '-30%' });
      }
    }, toggleBoxRef);
   
    return () => ctx.revert();
  }, []); 

  function handleAnimation() {
    if (theme === 'dark') {
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
      <div  ref={toggleBoxRef} onClick={() => { handleAnimation(); setTimeout(() => { toggleTheme(); }, 150); }} className={`${styles["ts-box"]} expnd-crs`}>
        <div className={styles["ts-bg"]}></div>
        <button ref={pillRef} className={styles["ts-pill"]}></button>
      </div>
    </>
  )
}
