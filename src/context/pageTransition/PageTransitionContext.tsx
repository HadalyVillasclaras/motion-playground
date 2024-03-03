import { createContext } from 'react';

interface PageTransitionContextType {
  triggerTransition: () => void;
  timings: any;
}
export const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);