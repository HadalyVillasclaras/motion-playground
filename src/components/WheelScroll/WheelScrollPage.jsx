import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./WheelScroll.module.scss";
import { images as imgs } from "../../utils/data.ts";
import { ProjectTemplate } from "../Projects/ProjectTemplate.tsx";
import { useScrollDetect } from "../../hooks/useScrollDetect.tsx";

gsap.registerPlugin(ScrollTrigger);
const project = {
  title: "Wheel Scroll",
  category: "GSAP",
  year: "2023",
};

const stones = [
  { name: "Biotite", url: imgs.biotite },
  // { name: "Cobaltaustinite", url: imgs.cobaltaustinite },
  { name: "Gemstone", url: imgs.gemstone },
  { name: "Quartz2", url: imgs.quartz2 },
  // { name: "Oxyphlogopite1", url: imgs.oxyphlogopite1 },
  { name: "Feldspar", url: imgs.feldspar },
  // { name: "Lawsonite", url: imgs.lawsonite },
  // { name: "Mica", url: imgs.mica },
  // { name: "Fluorapatite", url: imgs.fluorapatite },
  { name: "Zinc", url: imgs.zinc },
  // { name: "Mica", url: imgs.mica2 },
  { name: "Oxyphlogopite2", url: imgs.oxyphlogopite2 },
  { name: "Potosiite", url: imgs.potosiite },
  // { name: "Benitoite", url: imgs.benitoite },
  { name: "Oxyphlogopite4", url: imgs.oxyphlogopite4 },
  // { name: "Oxyphlogopite3", url: imgs.oxyphlogopite3 },
  { name: "Halite", url: imgs.halite },
];

export const WheelScrollPage = () => {
  const [currentStoneName, setCurrentStoneName] = useState();
  const wheelRef = useRef(null);
  const imgCardRefs = useRef([]);
  imgCardRefs.current = [];
  
  //la última se repite
  const isScrolling = useScrollDetect();
console.log(isScrolling);
  const addToRefs = (element) => {
    if (element && !imgCardRefs.current.includes(element)) {
      imgCardRefs.current.push(element);
    }
  };

  useEffect(() => {
    let wheel = wheelRef.current;
    let images = imgCardRefs.current;

    let rotationPerImage = 360 / images.length;
    let totalRotation = rotationPerImage * (images.length - 1);
    let slice = (2 * Math.PI) / images.length;

    function setup() {
      let radius = wheel.offsetWidth / 2;
      let center = wheel.offsetWidth / 2;

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
    let snapPositions = [];
    for (let i = 0; i < images.length; i++) {
      snapPositions.push(i / (images.length - 1));
    }
    gsap.to(wheel, {
      rotate: () => -totalRotation,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1 ,
        snap: snapPositions,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * stones.length);
          if (index < stones.length) {
            setCurrentStoneName(stones[index].name);
          }
        },
      },
    });

    setup();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <ProjectTemplate projectInfo={project}>
      <div className={`header-instr ${isScrolling ? "fade-out-50" : "fade-in-50"}`}>
        {!isScrolling && <p>[Scroll]</p>}
        {isScrolling && <p>{currentStoneName}</p>}
      </div>
      <div className={styles["scroll-container"]}>
        <section className={styles["scroll-slider-section"]}>
          <div ref={wheelRef} id="wheel" className={styles["wheel"]}>
            {stones.map((stone, index) => {
              return (
                <div
                  ref={addToRefs}
                  key={index}
                  className={styles["wheel__card"]}
                >
                  <img src={stone.url} alt={stone.name} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </ProjectTemplate>
  );
};
