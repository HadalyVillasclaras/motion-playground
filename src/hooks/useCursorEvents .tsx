import { useEffect, useState, useRef } from 'react';

export const useCursorEvents = () => {
  const [blendModeActive, setBlendModeActive] = useState(true);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const observerRef = useRef(null);
  const attachListeners = () => {
    const handleMouseEnterImage = () => {
      setBlendModeActive(false);
    };
    const handleMouseLeaveImage = () => setBlendModeActive(true);
    const handleMouseEnterLink = () => setIsLinkHovered(true);
    const handleMouseLeaveLink = () => setIsLinkHovered(false);

    const handleLinkClick = () => {
      setIsLinkHovered(false);
      setBlendModeActive(true);
    };

    const images = document.querySelectorAll('img, .picture, .no-blend-nav, .no-blend, canvas');
    images.forEach(img => {
      img.addEventListener('mouseenter', handleMouseEnterImage);
      img.addEventListener('mouseleave', handleMouseLeaveImage);
    });


    const links = document.querySelectorAll('.link, .cursor-xpnd');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('mouseenter', handleMouseEnterImage);
        img.removeEventListener('mouseleave', handleMouseLeaveImage);
      });
  
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
        link.removeEventListener('click', handleLinkClick);
      });
    };
  };

  useEffect(() => {
    const cleanupListeners = attachListeners();

  observerRef.current = new MutationObserver(() => {
    cleanupListeners();
    attachListeners();
  });

    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      cleanupListeners();
    };

  }, []);

  return { blendModeActive, isLinkHovered, setBlendModeActive };
};
