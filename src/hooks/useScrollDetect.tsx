import { useState, useEffect } from 'react';

export const useScrollDetect = (ref) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let target;
    if (ref && ref.current) {
      target = ref.current;
    } else {
      target = window;
    }

    const getScrollY = () => ref && ref.current ? target.scrollTop : window.scrollY;

    const handleScroll = () => {
      if (getScrollY() > 50 && !isScrolling) {
        setIsScrolling(true);
      } else if (getScrollY() <= 50 && isScrolling) {
        setIsScrolling(false);
      }
    };

    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, [isScrolling, ref]);

  return isScrolling;
};
