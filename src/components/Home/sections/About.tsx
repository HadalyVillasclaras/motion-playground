import styles from '../Home.module.scss';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-container']}>
        <div className={styles['about-col']}>
          <h3>About this project</h3>
          <p>
          This space brings together a selection of experiments and exercises on motion design and animated interactions. I am collecting them here as a sample of my learning path as a web developer.
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
            <p><b>hadalyvf@gmail.com</b></p><br />
            <a target="_blank"  href="https://www.are.na/hadaly-villasclaras">are.na &#8599;</a>
            <a target="_blank"  href="https://github.com/HadalyVillasclaras">github &#8599;</a>
            <a target="_blank" href="https://www.linkedin.com/in/hadaly-villasclaras/">linkedin &#8599;</a>
          </div>
        </div>
      </div>
    </section>
  );
};
