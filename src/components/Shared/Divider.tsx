import { motion } from "framer-motion";
import styles from "./Divider.module.scss";

export const Divider = () => {
  return (
    <motion.div
      className={styles.divider}
      initial={{
        width: 0,
      }}
      animate={{
        width: "100%",
        transition: {
          duration: 1.5,
          ease: [0.83, 0, 0.17, 1],
        },
      }}
    ></motion.div>
  )
}

export default Divider