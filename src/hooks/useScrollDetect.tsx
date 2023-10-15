import { useState, useEffect } from 'react';

export const useScrollDetect = (ref) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasStoppedScrolling, setHasStoppedScrolling] = useState(false);
  
  useEffect(() => {
    let target;
    let scrollTimeout;
    
    if (ref && ref.current) {
      target = ref.current;
    } else {
      target = window;
    }

    const getScrollY = () => ref && ref.current ? target.scrollTop : window.scrollY;

    const handleScroll = () => {
      if (getScrollY() > 50 && !isScrolling) {
        setIsScrolling(true);
        setHasStoppedScrolling(false);
      } else if (getScrollY() <= 50 && isScrolling) {
        setIsScrolling(false);
      }
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Start a new timer
      scrollTimeout = setTimeout(() => {
        if (isScrolling) {
          setIsScrolling(false);
          setHasStoppedScrolling(true);
        }
      }, 800);
    };

    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling, ref]);

  return { isScrolling, hasStoppedScrolling };
};
