import styles from './Home.module.css';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-container']}>
        <div className={styles['about-col']}>
          <h3>About this project</h3>
          <p>
            This space showcases a selected web motion experiments that I collect here as I 
            learn new technologies, mostly focused on creative coding and interactive animations.
          </p><br />
          <h3>Made with</h3>
          <ul className={styles['about-list']}>
            <li>TypeScript</li>
            <li>React</li>
            <li>GSAP</li>
            <li>Int. Observer</li>
            <li>p5.js</li>
            <li>Framer</li>
            <li>Matter</li>
          </ul>
        </div>
        <div className={styles['about-col']}>
          <div className={styles.socials}>
            <p><b>hadalyvg@gmail.com</b></p><br />
            <a target="_blank"  href="https://github.com/HadalyVillasclaras">github &#8599;</a>
            <a  target="_blank" href="https://www.linkedin.com/in/hadaly-villasclaras/">linkedin &#8599;</a>
          </div>
        </div>
      </div>
    </section>
  );
};
