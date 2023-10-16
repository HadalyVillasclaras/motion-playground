import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./WheelScroll.module.scss";
import { images as imgs } from "../../utils/data.ts";
import { ProjectTemplate } from "../Projects/ProjectTemplate.tsx";
import { useScrollDetect } from "../../hooks/useScrollDetect.tsx";
import { Cursor } from "../Shared/Cursor.tsx";

gsap.registerPlugin(ScrollTrigger);
const project = {
  title: "Wheel Scroll",
  category: "GSAP",
  year: "2023",
};

const stones1 = [
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

const stones = [
  {
    name: "Biotite",
    url: imgs.biotite,
    symbol: "Bio",
    source: "IMA–CNMNC",
    formulae: "K(Mg,Fe)<sub>3</sub>AlSi<sub>3</sub>>",
    group: "Phyllosilicate"
  },
  {
    name: "Gemstone",
    url: imgs.gemstone,
    symbol: "Gst",
    source: "Gemological",
    formulae: "Varies",
    group: "Various"
  },
  {
    name: "Quartz2",
    url: imgs.quartz2,
    symbol: "Qtz",
    source: "IMA–CNMNC",
    formulae: "SiO<sub>2</sub>",
    group: "Tectosilicate"
  },
  {
    name: "Feldspar",
    url: imgs.feldspar,
    symbol: "Fsp",
    source: "IMA–CNMNC",
    formulae: "CaAl<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>",
    group: "Tectosilicate"
  },
  {
    name: "Zinc",
    url: imgs.zinc,
    symbol: "Zn",
    source: "Metal",
    formulae: "Zn",
    group: "Metal"
  },
  {
    name: "Oxyphlogopite2",
    url: imgs.oxyphlogopite2,
    symbol: "Oxy",
    source: "IMA–CNMNC",
    formulae: "K(Mg,Fe)<sub>3</sub>AlSi<sub>3</sub>O<sub>10</sub>",
    group: "Phyllosilicate"
  },
  {
    name: "Potosiite",
    url: imgs.potosiite,
    symbol: "Pts",
    source: "IMA–CNMNC",
    formulae: "Ba(Cu<sub>4</sub>(OH)<sub>6</sub>Cl<sub>2</sub>)",
    group: "Halide"
  },
  {
    name: "Oxyphlogopite4",
    url: imgs.oxyphlogopite4,
    symbol: "Oxy",
    source: "IMA–CNMNC",
    formulae: "K(Mg,Fe)<sub>3</sub>AlSi<sub>3</sub>O<sub>10</sub>",
    group: "Phyllosilicate"
  },
  {
    name: "Halite",
    url: imgs.halite,
    symbol: "Hlt",
    source: "Evaporite",
    formulae: "NaCl",
    group: "Halide"
  }
];

export const WheelScrollPage = () => {
  const [isRowOpen, setIsRowOpen] = useState(false);
  const [currentStoneName, setCurrentStoneName] = useState();
  const [currentStone, setCurrentStone] = useState(null);

  const wheelRef = useRef(null);
  const imgCardRefs = useRef([]);
  imgCardRefs.current = [];

  //la última se repite
  const { isScrolling, hasStoppedScrolling } = useScrollDetect();
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
        scrub: 1,
        snap: snapPositions,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const effectiveProgress = self.progress * (stones.length - 1);
          const index = Math.round(effectiveProgress);
          if (index < stones.length) {
            // setCurrentStoneName(stones[index].name);
            setCurrentStone(stones[index]);
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

  const scrollRef = useRef(null);
  const rowRef = useRef(null);
  const currentStoneRef = useRef(null);
  const tl1Ref = useRef(null);
  const tl2Ref = useRef(null);

  const hrRef = useRef(null);
  const toggleRowIconRef = useRef(null);

  useLayoutEffect(() => {
    tl1Ref.current = gsap.timeline({
      scrollTrigger: {
        start: '50px top',
        end: '+=500 bottom',
        toggleActions: 'play none reverse none',
        // markers: true,
      },
    });

    gsap.set(hrRef.current, { opacity: 0 });
    gsap.set(rowRef.current, { color: "rgba(255, 255, 255, 0)", });
    gsap.set(currentStoneRef.current, { opacity: 0 });
    gsap.set(toggleRowIconRef.current, { opacity: 0 }
    );
    const ctx = gsap.context(() => {
      // [SCROLL] and row goes down on scroll. Scroll desappear, name appears
      tl1Ref.current
        .to(scrollRef.current, {
          y: -10,
          opacity: 0
        }, 0)
        .fromTo(rowRef.current, {
          y: -50,
          opacity: 0
        }, {
          y: 50,
          opacity: 1

        }, 0)
        .to(currentStoneRef.current, {
          opacity: 1,
        }, 0);

    }, scrollRef.current);

    return () => { ctx.revert(); };
  }, []);


  useEffect(() => {
    // If has stopped the plus icon appears
    showOpenRowBtn();
  }, [hasStoppedScrolling])

  useLayoutEffect(() => {
    const themeElement = document.body;

    const tableColor = getComputedStyle(themeElement).getPropertyValue('--table-color').trim();
    const tableColorVisible = `rgba(${tableColor}, 1)`;
    const tableColorHidden = `rgba(${tableColor}, 0)`;

    console.log(tableColorVisible);
    console.log(tableColorHidden);


    tl2Ref.current = gsap.timeline({ paused: true, defaults: { duration: 1.7 } });

    tl2Ref.current
      .fromTo(currentStoneRef.current, {
        y: 0,
        x: "0%",
      }, {
        y: 0,
        x: "-70%", //-90% desktop
      }, 0)
      .fromTo(hrRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "100%",
      }, {
        opacity: 1,
        scaleX: 1,
      }, 1)
      .fromTo(rowRef.current, {
        color: `rgba(${tableColor}, 0)`,
      }, {
        color: `rgba(${tableColor}, 1)`,
      }, 1)
      .fromTo(".dw", {
        y: -10,
        duration: 1
      }, {
        y: 0,
        duration: 1
      }, 1)
      ;
  }, [])

  function handleToggleRow() {
    if (isRowOpen) {
      tl2Ref.current.reverse();

      setTimeout(() => {
        setIsRowOpen(false);
      }, 2000);
    } else {
      tl2Ref.current.play();
      setTimeout(() => {
        setIsRowOpen(true);
      }, 2000);
    }

    gsap.to(toggleRowIconRef.current, {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        gsap.to(toggleRowIconRef.current, {
          opacity: 1,
          duration: 2
        });
      }
    });
  }

  function showOpenRowBtn() {
    if (hasStoppedScrolling) {
      gsap.to(toggleRowIconRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'slow'
      });
    } else {
      gsap.to(toggleRowIconRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'slow'
      });
    }
  }
  return (
    <ProjectTemplate projectInfo={project}>
      <div className={styles["scroll-container"]}>
        <div className={`header-instr ${styles['wheel-data']}`}>
          {/* <div ref={rowRef} className={`${styles['wheel-data__row']}`}>
            <hr className="dw" ref={hrRef} />
            <table>
              <thead >
                <tr>
                  <th className="dw"></th>
                  <th className="dw">Symbol</th>
                  <th className="dw">Source</th>
                  <th className="dw">Formulae</th>
                  <th className="dw">Group</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h3 ref={currentStoneRef}>
                    <button className="btn blink" onClick={handleToggleRow} ref={toggleRowIconRef}>{isRowOpen ? '-' : '+'}</button>
                    {` ${currentStone?.name}`}
                  </h3></td>
                  <td className="dw">{currentStone?.symbol}</td>
                  <td className="dw">{currentStone?.source}</td>
                  <td className="dw" dangerouslySetInnerHTML={{ __html: currentStone?.formulae }}></td>
                  <td className="dw">{currentStone?.group}</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div ref={rowRef} className={`${styles['wheel-data__row']}`}>
          <ul className={`${styles['wheel-data__row-list']}`}>
            <li>
              <span></span>
              <h3 ref={currentStoneRef}>
                <button className="btn blink" onClick={handleToggleRow} ref={toggleRowIconRef}>
                  {isRowOpen ? '-' : '+'}
                </button>
                {` ${currentStone?.name}`}
              </h3>
            </li>
            <li>
              <span>Symbol</span> <h4 className="dw">{currentStone?.symbol}</h4>
            </li>
            <li>
              <span>Source</span> <h4 className="dw">{currentStone?.source}</h4>
            </li>
            <li>
              <span>Formulae</span>
              <h4 className="dw" dangerouslySetInnerHTML={{ __html: currentStone?.formulae }}></h4>
            </li>
            <li>
              <span>Group</span> <h4 className="dw">{currentStone?.group}</h4>
            </li>
          </ul>
          </div>
          <div>

          </div>
          <p ref={scrollRef}>[Scroll]</p>
          {/* <p className={`${isScrolling ? "fade-out-50" : "fade-in-50"}`}>{currentStoneName}</p> */}
        </div>



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
