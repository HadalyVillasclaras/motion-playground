import styles from './Home.module.css';
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
              joe sournair
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
              &nbsp;visual
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
              className={styles.h1} // Use CSS module class
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
              className={styles.h1} // Use CSS module class
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022&
            </motion.div>
            <div className={styles['h1-revealer']}></div>
          </h1>
          <h1>
            <motion.div
              className={styles.h1} // Use CSS module class
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
            <div className={styles.arrow}>
              <p>&darr;</p>
            </div>
            <div className={styles.arrow}>
              <p>&darr;</p>
            </div>
          </div>
          <div className={styles['footer-col']}>
            <p>
              currently creating at <br /> impressions studio
            </p>
          </div>
          <div className={styles['footer-col']}>
            <p>
              previously visual dev at <br /> chromatic waves
            </p>
          </div>
          <div className={styles['footer-col']}>
            <p>
              prev intern <br /> at mario
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
