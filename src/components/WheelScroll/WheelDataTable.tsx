import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import styles from "./WheelScroll.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  currentStone: any;
  isRowOpen: boolean,
  toggleTableVisibility: any,
  setIsRowOpen: any

}

export const WheelDataTable = forwardRef(({ setIsRowOpen, isRowOpen, currentStone, toggleTableVisibility}: Props, ref) => {
  const currentStoneRef = useRef(null);
  const toggleRowIconRef = useRef(null);

  useImperativeHandle(ref, () => ({
    ref1: currentStoneRef,
    ref2: toggleRowIconRef
  }));

  const hrRef = useRef(null);
  const tl2Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.set(hrRef.current, { opacity: 0 });
    gsap.set(toggleRowIconRef.current, { opacity: 0 });
  }, [])

  useLayoutEffect(() => {
    tl2Ref.current = gsap.timeline({
      paused: true,
      defaults: { duration: 1.2, ease: "none"},
    });

    tl2Ref.current
      .fromTo(
        currentStoneRef.current,
        {
          y: 0,
          x: "0%",
        },
        {
          y: 0,
          x: "-90%",
        },
        0
      )
      .fromTo(
        hrRef.current,
        {
          opacity: 0,
          scaleX: 0,
          transformOrigin: "100%",
          duration: 1
        },
        {
          opacity: 1,
          scaleX: 1,
          duration: 1
        },
        0.4
      )
      .fromTo(
        ".dw",
        {
          y: -20,
          opacity: 0,
          duration: 0.8,
          visibility: "hidden"
        },
        {
          opacity: 1,
          y: 10,
          visibility: "visible",
          duration: 0.8,
        },
        0.3
      );
  }, []);

  function handleToggleRow() {
    if (isRowOpen) {
      tl2Ref.current.reverse();
      toggleTableVisibility();
      setTimeout(() => {
        setIsRowOpen(false);
      }, 2000);
    } else {
      tl2Ref.current.play();
      toggleTableVisibility();
      setTimeout(() => {
        setIsRowOpen(true);
      }, 2000);
    }

    // hide toggle icon while animation
    toggleIconVisibility();
  }

  function toggleIconVisibility() {
    gsap.to(toggleRowIconRef.current, {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        gsap.to(toggleRowIconRef.current, {
          opacity: 1,
          duration: 2,
        });
      },
    });
  }
  return (
    <>
    <section className={`${styles["wheel-data__table"]}`}>
      <hr className="dw" ref={hrRef} />
      <table >
        <thead>
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
            <td>
              <h3 ref={currentStoneRef}>
                <button className={`btn cursor-xpnd ${styles["wheel-data__toggle"]}`} onClick={handleToggleRow}  >
                 <span ref={toggleRowIconRef}>{isRowOpen ? "-" : "+"}</span> 
                {
                ` ${currentStone ? currentStone?.name : ''}`
                }
                </button>
              </h3>
            </td>
            <td className="dw">{currentStone?.symbol}</td>
            <td className="dw">{currentStone?.source}</td>
            <td
              className="dw"
              dangerouslySetInnerHTML={{ __html: currentStone?.formulae }}
            ></td>
            <td className="dw">{currentStone?.group}</td>
          </tr>
        </tbody>
      </table>
    </section>
    </>
  )
})