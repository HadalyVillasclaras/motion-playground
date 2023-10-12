import styles from '../Home.module.scss';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-desc']}>
        <p>This space brings together a selection of experiments and exercises on motion design and animated interactions. I am collecting them here as a sample of my learning path as a web developer.
          {/* <span className={styles['lil-text']}>Im also open to creative prohects and experimental stuff</span> */}
        </p>
      </div>


      <div className={styles['about-data']}>
        <div className={styles['about-col']}>
          <h3>Techs. & tools</h3>
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
          <ul className={`${styles['about-list']} ${styles['about-list__social']}`}>
            <li>hadalyvf@gmail.com</li>
            <li><a target="_blank" className='link' href="https://www.are.na/hadaly-villasclaras">are.na</a></li>
            <li><a target="_blank" className='link' href="https://github.com/HadalyVillasclaras">github</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
