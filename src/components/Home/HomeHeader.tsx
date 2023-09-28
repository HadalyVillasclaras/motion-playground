import { motion } from "framer-motion";
import styles from "./Home.module.css";

export const HomeHeader = () => {
  return (
    <header className={styles.footer}>
      <motion.div
        className={styles.divider}
        initial={{
          width: 0
        }}
        animate={{
          width: "100%",
          transition: {
            duration: 1.5,
            ease: [0.83, 0, 0.17, 1],
          },
        }}
      ></motion.div>
      <motion.div
        className={styles['footer-content']}
        initial={{
          y: 200,
          opacity: 0
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
        <div className={styles['footer-col']}>
          <p>Hadaly Villasclaras</p>
        </div>
        <div className={styles['footer-col']}>
          <p>
            Web dev
          </p>
        </div>
        <div className={styles['footer-col']}>
          <p>
            Motion Playground
          </p>
        </div>

        <div  className={styles['footer-col']}>

        <p className={styles['blinking-text']}>
          [  Work in progress ]
        </p>
        </div>

      </motion.div>
    </header>
  )
}
