import Divider from '../../Shared/Divider';
import { InfoContainer } from '../../Shared/InfoContainer';
import styles from '../Home.module.scss';
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.headers}>
        <div className={`${styles.header} ${styles['header-1']}`}>
          <h1>
            <motion.div
              initial={{
                top: '7rem',
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: -0.25,
                },
              }}
              className={styles.h1}
            >
              hv
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
          <h1>
            <motion.div
              className={styles.h1}
              initial={{
                top: '7rem'
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: -0.1,
                },
              }}
            >
              &nbsp;web
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
          <h1>
            <motion.div
              className={styles.h1}
              initial={{
                top: '7rem'
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0.05,
                },
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dev.
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
        </div>
        <div className={`${styles.header} ${styles['header-2']}`}>
          <h1>
            <motion.div
              className={styles.h1} 
              initial={{
                top: "7rem"
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: -0.25,
                },
              }}
            >
              portfolio
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
          <h1>
            <motion.div
              className={styles.h1} 
              initial={{
                top: "7rem"
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: -0.1,
                },
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023&
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
          <h1>
            <motion.div
              className={styles.h1}
              initial={{
                top: "7rem"
              }}
              animate={{
                top: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0.05,
                },
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023.
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
        </div>
      </div>
      <div className={styles.footer}>
     <Divider/>
        <InfoContainer
        >
          <div>
            <div className={styles.arrow}>
              <p>&darr;</p>
            </div>
            <div className={styles.arrow}>
              <p>&darr;</p>
            </div>
          </div>
          <div>
            <p>
              currently 
            </p>
          </div>
          <div>
            <p>
             ----
            </p>
          </div>
          <div>
            <p>
              ---
            </p>
          </div>
        </InfoContainer>
      </div>
    </section>
  )
}
