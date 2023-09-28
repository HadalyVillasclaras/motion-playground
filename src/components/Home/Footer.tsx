import styles from './Home.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles['footer-content']}>
      <div className={styles['footer-col']}>
         <p>work in progress</p>
        </div>
        <div className={styles['footer-col']}>
          <p>
          </p>
        </div>
        <div className={styles['footer-col']}>
          <p>
            hv
          </p>
        </div>
        <div className={styles['footer-col']}>
          <p>
          Copyright © 2023
          </p>
        </div>
      </div>
    </footer>
  )
}
