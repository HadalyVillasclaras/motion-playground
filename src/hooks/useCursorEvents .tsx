import { useEffect, useState, useRef } from 'react';

export const useCursorEvents = () => {
  const [blendModeActive, setBlendModeActive] = useState(true);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const observerRef = useRef(null);

  const attachListeners = () => {
    const handleMouseEnterImage = () => setBlendModeActive(false);
    const handleMouseLeaveImage = () => setBlendModeActive(true);
    const handleMouseEnterLink = () => setIsLinkHovered(true);
    const handleMouseLeaveLink = () => setIsLinkHovered(false);

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('mouseenter', handleMouseEnterImage);
      img.addEventListener('mouseleave', handleMouseLeaveImage);
    });

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
  };

  useEffect(() => {
    attachListeners();

    observerRef.current = new MutationObserver(() => {
      attachListeners();
    });

    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { blendModeActive, isLinkHovered };
};
