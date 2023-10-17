import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import styles from "./WheelScroll.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  currentStone: any;
  isRowOpen: boolean,
  toggleTableVisibility: any
}

export const WheelDataTable = forwardRef(({ isRowOpen, currentStone, toggleTableVisibility}: Props, ref) => {
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
      defaults: { duration: 1.7 },
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
        },
        {
          opacity: 1,
          scaleX: 1,
        },
        1
      )
      .fromTo(
        ".dw",
        {
          y: -10,
          duration: 1,
        },
        {
          y: 0,
          duration: 1,
        },
        1
      );
  }, []);

  function handleToggleRow() {
    if (isRowOpen) {
      tl2Ref.current.reverse();
      toggleTableVisibility();
     
    } else {
      console.log('entra');
      tl2Ref.current.play();
      toggleTableVisibility();
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
                <button className={`btn ${styles["wheel-data__toggle"]}`} onClick={handleToggleRow} ref={toggleRowIconRef} >
                  {isRowOpen ? "-" : "+"}
                </button>
                {` ${currentStone?.name}`}
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