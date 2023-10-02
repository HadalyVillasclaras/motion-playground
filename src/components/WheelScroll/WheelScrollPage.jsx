import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./WheelScroll.module.css";
import * as imgs from "../../assets/images/index.ts";
import { ProjectTemplate } from "../Projects/ProjectTemplate.tsx";

gsap.registerPlugin(ScrollTrigger);

const project = {
  title: "Wheel Scroll",
  category: "GSAP",
  year: "2023",
};

const stones = [
  { name: 'Augite', url: imgs.augite },
  { name: 'Gem', url: imgs.gem },
  { name: 'Halite', url: imgs.halite },
  { name: 'Gemstone', url: imgs.gemstone },
  { name: 'Feldspar', url: imgs.feldspar },
  { name: 'Ferro', url: imgs.ferro },
  { name: 'Gypsum', url: imgs.gypsum },
  { name: 'Zinc', url: imgs.zinc },
  { name: 'Stichite', url: imgs.stichite },
  { name: 'Labradorite', url: imgs.labradorite }
];

export const WheelScrollPage = () => {
  const [currentStoneName, setCurrentStoneName] = useState('-'); 

  const wheelRef = useRef(null);
  const imgCardRefs = useRef([]);

  imgCardRefs.current = [];

  const addToRefs = el => {
    if (el && !imgCardRefs.current.includes(el)) {
        imgCardRefs.current.push(el);
    }
  };

  useEffect(() => {
    let wheel = wheelRef.current;
    let images = imgCardRefs.current;

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
        onUpdate: (self) => {
          const index = Math.round(self.progress * (stones.length));
          if (index < stones.length) {
            setCurrentStoneName(stones[index].name);
          }
        }
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
            <h1 className={styles['h1-scroll']}> {currentStoneName} </h1>
          </div>
          <p className={styles['scroll-down-icon']}>&rarr;</p>
          <section className={styles['slider-section']}>
            <div ref={wheelRef} id="wheel" className={styles['wheel']}>
              {stones.map((stone, index) => (
                <div ref={addToRefs} key={index} className={styles['wheel__card']}>
                  <img src={stone.url} className={styles['wheel__img']} alt={stone.name} />
                </div>
              ))}
            </div>
          </section>
        </main>
        </ProjectTemplate>

      </>
    );
  };