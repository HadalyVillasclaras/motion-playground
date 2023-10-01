import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./WheelScroll.module.css";
import * as imgs from "../../assets/images/index.ts";
import { ProjectTemplate } from "../Projects/ProjectTemplate.tsx";
import { ProjectHeader } from "../Projects/sections/ProjectHeader.tsx";
import { ProjectFooter } from "../Projects/sections/ProjectFooter.tsx";

gsap.registerPlugin(ScrollTrigger);
const images = [
  imgs.augite,
  imgs.gem,
  imgs.halite,
  imgs.gemstone,
  imgs.feldspar,
  imgs.ferro,
  imgs.gypsum,
  imgs.zinc,
  imgs.stichite,
  imgs.labradorite,
];

const project = {
  title: "Wheel Scroll",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category: "GSAP",
  year: "2023",
};

export const WheelScrollPage = () => {
  const wheelRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let wheel = wheelRef.current;
    let images = gsap.utils.toArray("#wheel-card");

    function setup() {
      let radius = wheel.offsetWidth / 2;
      let center = wheel.offsetWidth / 2;
      let total = images.length;
      let slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        let angle = i * slice;
        let x = center + radius * Math.sin(angle);
        let y = center - radius * Math.cos(angle);
        gsap.set(item, {
          rotation: angle + "_rad",
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    }

    gsap.to(wheel, {
      rotate: () => -360,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
        snap: 1 / images.length,
        invalidateOnRefresh: true,
      },
    });

    setup();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);

    return (
      <>
      <ProjectTemplate projectInfo={project}>


        <main className={styles['wheel-container']}>
          <div className={styles['header-scroll']}>
            <h1 className={styles['h1-scroll']}>
              Scroll down
            </h1>
          </div>
          <section className={styles['slider-section']}>
            <div ref={wheelRef} id="wheel" className={styles['wheel']}>
              {images.map((imgSrc, index) => (
                <div id="wheel-card" key={index} className={styles['wheel__card']}>
                  <img src={imgSrc} className={styles['wheel__img']} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>
          {/* <h3 className={styles['scroll-down']}>Scroll down</h3> */}
          <p className={styles['scroll-down-icon']}>
          &rarr;
          </p>
        </main>
        </ProjectTemplate>

      </>
    );
  };