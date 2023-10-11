import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../Project.module.scss";

export const ProjectHeader = () => {
  return (
    <header className={styles["project-header"]}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1.5,
            ease: [0.83, 0, 0.17, 1],
            delay: 0.5,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            duration: 1,
            ease: [0.83, 0, 0.17, 1],
            delay: 1.5,
          },
        }}
      >
        <Link className={`${styles[""]} link`} to="/">
          Back to home
        </Link>
      </motion.div>
    </header>
  );
};