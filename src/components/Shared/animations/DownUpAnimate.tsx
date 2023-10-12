import  { ReactNode } from 'react'
import { motion } from "framer-motion";

interface DownUpAnimateProps {
  children: ReactNode;
}

export const DownUpAnimate = ({ children }: DownUpAnimateProps) => {
  return (
    <motion.div
    style={{
      height: "100%"
    }}
      initial={{
        y: 200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: [0.83, 0, 0.17, 1],
        },
      }}
    >
      {children}
    </motion.div>
  )
}