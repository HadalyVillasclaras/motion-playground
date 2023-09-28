import styles from './Home.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles['footer-content']}>
        <div className={styles['footer-col']}>
          <div className={styles.arrow}>
            <p>&#8593;</p>
          </div>
          <div className={styles.arrow}>
            <p>&#8593;</p>
          </div>
        </div>
        <div className={styles['footer-col']}>
          <p>
            &copyright by <br /> not codegrid
          </p>
        </div>
        <div className={styles['footer-col']}>
          <p>
            no rights for <br /> creative dev
          </p>
        </div>
        <div className={styles['footer-col']}>
          <p>
            no rights for <br /> any design
          </p>
        </div>
      </div>
    </footer>
  )
}
