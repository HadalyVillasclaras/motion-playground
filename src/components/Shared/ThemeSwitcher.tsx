import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from "./ThemeSwitcher.module.scss";
import gsap from 'gsap';

export const ThemeSwitcher = () => {
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = savedTheme ? savedTheme as 'light' | 'dark' : 'dark';

  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme) {
      setTheme(currentTheme as 'light' | 'dark');
    } else {
      setTheme(defaultTheme);
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  const [reversed, setReversed] = useState(false);
  const pillRef = useRef(null);
  const bgRef = useRef(null);
  const tl = useRef();
  const app = useRef();


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    console.log("creating timeline");
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
    .to(pillRef.current, {
      right: '30%',
      duration: 1
    }, 0)
    .to(bgRef.current, {
      backgroundColor: 'white',
      duration: 0.5
    }, 0.5);
    }, app);

    return () => ctx.revert();

  }, []);

  useEffect(() => {
    // Toggle the reversed state of the timeline based on the 'reversed' state
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  const handleBoxClick = () => {
    setReversed(!reversed);
  };

  return (
    <>
      <div ref={app} className={styles["ts-box"]}  onClick={handleBoxClick}>
        <div ref={bgRef} className={styles["ts-bg"]}>
        </div>
        <div  ref={pillRef} className={styles["ts-pill"]}>
        </div>
      </div>

      {/* <button className={styles["theme-switcher"]} onClick={switchTheme}>O</button> */}

    </>
  )
}
