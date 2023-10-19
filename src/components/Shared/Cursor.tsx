import { ThemeContext } from '../../context/theme/ThemeContext';
import { useCursorEvents } from '../../hooks/useCursorEvents ';
import styles from './Cursor.module.scss';
import { useEffect, useRef, useState, useContext } from 'react';
// import gsap from "gsap";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const { blendModeActive, isLinkHovered } = useCursorEvents();
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    <div
      ref={cursorRef}
      className={`${styles.customCursor} ${isLinkHovered ? styles.expanded : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        mixBlendMode: blendModeActive ? 'difference' : 'unset',
        filter: !blendModeActive && theme === 'light' ? 'invert(1)' : 'none'
      }}
    ></div>
  );
}