import { motion } from "framer-motion";
import styles from "./Project.module.css";


export const ProjectFooter = ({ project }: any) => {
  return (
    <footer className={styles['footer-project']}>
      <motion.div
        className={styles.divider}
        initial={{
          width: 0
        }}
        animate={{
          width: "100%",
          transition: {
            duration: 1.5,
            ease: [0.83, 0, 0.17, 1]
          }
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
            duration: 1.8,
            ease: [0.83, 0, 0.17, 1],
            delay: 1
          }
        }}
      >
        <div className={styles['footer-col']}>
          <p>{project.title}</p>
        </div>
        <div className={styles['footer-col']}>
          <p></p>
        </div>
        <div className={styles['footer-col']}>
          <p>{project.year}</p>
        </div>
        <div className={styles['footer-col']}>
          <p>{project.category}</p>
        </div>
      </motion.div>
    </footer>
  )
}