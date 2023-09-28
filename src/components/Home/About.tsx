import styles from './Home.module.css';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-container']}>
        <div className={styles['about-col']}>
          <h3>About this project</h3>
          <p>
            This space showcases a blend of web motion and webflow designs. It's
            a playground where I've pieced together exercises and practices from
            my learning journey.
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
            <a href="https://github.com/HadalyVillasclaras">github &#8599;</a>
            <a href="#">linkedin &#8599;</a>
          </div>
        </div>
      </div>
    </section>
  );
};
