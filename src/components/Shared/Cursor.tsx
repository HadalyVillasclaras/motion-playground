import { useCursorEvents } from '../../hooks/useCursorEvents ';
import styles from './Cursor.module.scss';
import { useEffect, useRef, useState } from 'react';
// https://codepen.io/martinboykov/pen/wvzNJex
export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const { blendModeActive, isLinkHovered } = useCursorEvents();

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    const cursorWidth = cursorRef.current.offsetWidth;
    const cursorHeight = cursorRef.current.offsetHeight;
  
    const xPosition = Math.min(e.clientX - cursorWidth / 2, window.innerWidth - cursorWidth);
    const yPosition = Math.min(e.clientY - cursorHeight / 2, window.innerHeight - cursorHeight);
  
    setPosition({
      x: xPosition,
      y: yPosition,
    });
  };
  return (
      <div
        ref={cursorRef}
        className={`${styles.customCursor} ${isLinkHovered ? styles.expanded : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          mixBlendMode: blendModeActive ? 'difference' : 'normal'
        }}
      ></div>
  );
}