import styles from '../Home.module.scss';
import  {  useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);


  const tlRef = useRef(null);

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "=+100 bottom",
        toggleActions: "play none none none",
      },
    });

    const ctx = gsap.context(() => {
      tlRef.current
        .fromTo( aboutRef.current, {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }, 0)
        .fromTo( col1Ref.current, {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }, 0.5).fromTo( col2Ref.current, {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }, 0.5);

    }, sectionRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div ref={aboutRef} className={styles['about-desc']}>
        <p>This space brings together a selection of experiments on web animations and interactivity.
          I am collecting them here as a trace of my learning process. The motif is minerals, but it could be anything else.
          {/* <span className={styles['lil-text']}>Im also open to creative prohects and experimental stuff</span> */}
        </p>
      </div>
      <div className={styles['about-data']}>
        <div ref={col1Ref} className={styles['about-col']}>
          <h4>Techs. & tools</h4>
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
        <div ref={col2Ref} className={styles['about-col']}>
          <h4>Contact</h4>
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
