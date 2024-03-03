import {  useState, ReactNode, useCallback } from 'react';
import { PageTransitionContext } from './PageTransitionContext'
import { PageTransition } from '../../components/Shared/PageTransition';

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider = ({ children }: PageTransitionProviderProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const timings = {
    navigationDelay: 1000, //footer loads with it
    projectContentDelay: 3, //hardcoded in project template
    animationDuration: 6000
  };

  const triggerTransition = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 5500);  
  }, []);

  return (
    <PageTransitionContext.Provider value={{ triggerTransition, timings }}>
      {children}
      {isAnimating && <PageTransition />}
    </PageTransitionContext.Provider>
  )
}