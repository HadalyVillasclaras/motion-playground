import  { ReactNode } from 'react'
import styles from "./InfoContainer.module.scss";
import { motion } from "framer-motion";

interface InfoContainerProps {
  children: ReactNode;
}

export const InfoContainer = ({ children }: InfoContainerProps) => {
  return (
    <motion.div
      className={styles["info-container"]}
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