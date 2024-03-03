import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./WheelScroll.module.scss";
import { stones } from "./stonesData.ts";
import { ProjectTemplate } from "../Projects/ProjectTemplate.tsx";
import { useScrollDetect } from "../../hooks/useScrollDetect.tsx";
import { useWheelRotation } from "./hooks/useWheelRotation.tsx";
import { WheelDataTable } from "./WheelDataTable.tsx";
import { WheelDataList } from "./WheelDataList.tsx";
import { useDeviceType, DeviceType } from "../../hooks/useDeviceType.tsx";
import { projectsInfo } from '../../utils/projectInfo.ts';

gsap.registerPlugin(ScrollTrigger);

export const WheelScrollPage = () => {
  const [isRowOpen, setIsRowOpen] = useState(false);
  const { isScrolling, hasStoppedScrolling } = useScrollDetect();

  const wheelProject = projectsInfo.find(project => project.id === 'wheel');

  const [currentStone, setCurrentStone] = useState(null);
  const deviceType = useDeviceType();

  const wheelRef = useRef(null);
  const imgCardRefs = useRef([]);
  imgCardRefs.current = [];

  const addToRefs = (element) => {
    if (element && !imgCardRefs.current.includes(element)) {
      imgCardRefs.current.push(element);
    }
  };

  useWheelRotation(wheelRef, imgCardRefs, setCurrentStone, stones);

  const scrollRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const tl1Ref = useRef(null);
  const tl3Ref = useRef(null);

  const childRefs = useRef(null);
  const currentStoneRef = useRef(null);
  const toggleRowIconRef = useRef(null);

  useEffect(() => {
    if (childRefs.current) {
      currentStoneRef.current = childRefs.current.ref1.current;
      toggleRowIconRef.current = childRefs.current.ref2.current;
    }
  }, []);

  useLayoutEffect(() => {
    tl1Ref.current = gsap.timeline({
      scrollTrigger: {
        start: "50px top",
        end: "+=500 bottom",
        toggleActions: "play none reverse none",
        // markers: true,
      },
    });

    gsap.set(contentWrapperRef.current, { color: "rgba(255, 255, 255, 0)" });
    
    currentStoneRef.current && gsap.set(currentStoneRef?.current, { opacity: 0 });
    toggleRowIconRef.current && gsap.set(toggleRowIconRef?.current, { opacity: 0 });

    const ctx = gsap.context(() => {
      // [SCROLL] and row goes down on scroll. Scroll desappear, name appears
      tl1Ref.current
        .to(
          scrollRef.current,
          {
            y: -10,
            opacity: 0,
          },
          0
        )
        .fromTo(
          contentWrapperRef.current,
          {
            y: -50,
            opacity: 0,
          },
          {
            y: 50,
            opacity: 1,
          },
          0
        )
        .to(
          currentStoneRef.current,
          {
            opacity: 1,
          },
          0
        );
    }, scrollRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    // If has stopped the plus icon appears
    showOpenRowBtn();
  }, [hasStoppedScrolling]);

  useLayoutEffect(() => {
    // make all content visible
    const themeElement = document.body;

    const tableColor = getComputedStyle(themeElement)
      .getPropertyValue("--table-color")
      .trim();

    tl3Ref.current = gsap.timeline({
      paused: true,
      defaults: { duration: 1.2 },
    });

    tl3Ref.current.fromTo(
      contentWrapperRef.current,
      {
        color: `rgba(${tableColor}, 0)`,
      },
      {
        color: `rgba(${tableColor}, 1)`,
      },
      1
    );
  }, []);

  function toggleContentVisibility() {
    if (isRowOpen) {
      tl3Ref.current.reverse();
    } else {
      tl3Ref.current.play();
    }
  }

  function showOpenRowBtn() {
    if (hasStoppedScrolling) {
      gsap.to(toggleRowIconRef.current, {
        opacity: 1,
        duration: 1,
        ease: "slow",
      });
    } else {
      gsap.to(toggleRowIconRef.current, {
        opacity: 0,
        duration: 1,
        ease: "slow",
      });
    }
  }

  return (
    <ProjectTemplate projectInfo={wheelProject}>
      <div className={styles["scroll-container"]}>
        <div className={`header-instr ${styles["wheel-data"]}`}>
          <div
            ref={contentWrapperRef}
            className={`${styles["wheel-data__wrapper"]}`}
          >
            {
              deviceType === DeviceType.MOBILE
              ?
              <WheelDataList
              setIsRowOpen={setIsRowOpen}
              isRowOpen={isRowOpen}
              ref={childRefs}
              currentStone={currentStone}
              toggleTableVisibility={toggleContentVisibility}
            />
              :
              <WheelDataTable
              isRowOpen={isRowOpen}
              setIsRowOpen={setIsRowOpen}
              ref={childRefs}
              currentStone={currentStone}
              toggleTableVisibility={toggleContentVisibility}
            />
            }
          </div>
          <p className="header-instr-text" ref={scrollRef}>[Scroll]</p>
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
                  <img loading="lazy" src={stone.url} alt={stone.name} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </ProjectTemplate>
  );
};
