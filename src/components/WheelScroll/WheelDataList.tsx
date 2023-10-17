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

export const WheelDataList = forwardRef(({ isRowOpen, currentStone, toggleTableVisibility }: Props, ref) => {
  const currentStoneRef = useRef(null);
  const toggleRowIconRef = useRef(null);

  useImperativeHandle(ref, () => ({
    ref1: currentStoneRef,
    ref2: toggleRowIconRef
  }));

  const tl2Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.set(toggleRowIconRef.current, { opacity: 0 });
  }, [])

  useLayoutEffect(() => {
    tl2Ref.current = gsap.timeline({
      paused: true,
    });

    tl2Ref.current
      .fromTo(
        currentStoneRef.current,
        {
          y: 0,
          x: "0%",
          duration: 1
        },
        {
          y: 0,
          x: "0%",
          duration: 1
        },
        0
      )
      .fromTo(
        ".dw",
        {
          y: -10,
          opacity: 0,
          duration: 0.5,
        },
        {
          opacity: 1,
          y: 10,
          duration: 0.5,
        },
        0
      );
  }, []);

  function handleToggleRow() {
    if (isRowOpen) {
      tl2Ref.current.reverse();
      toggleTableVisibility();

    } else {
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
    <ul className={`${styles["wheel-data__list"]}`}>
      <li>
        <p></p>
        <h3 ref={currentStoneRef}>
          <button
            className={`btn ${styles["wheel-data__toggle"]}`}
            onClick={handleToggleRow}
            ref={toggleRowIconRef}
          >
            {isRowOpen ? "-" : "+"}
          </button>
          {` ${currentStone?.name}`}
        </h3>
      </li>
      <li className="dw">
        <p>Symbol</p>
        <h4>{currentStone?.symbol}</h4>
      </li>
      <li className="dw">
        <p>Source</p>
        <h4>{currentStone?.source}</h4>
      </li>
      <li className="dw">
        <p>Formulae</p>
        <h4 dangerouslySetInnerHTML={{ __html: currentStone?.formulae }}></h4>
      </li>
      <li className="dw">
        <p>Group</p> 
        <h4>{currentStone?.group}</h4>
      </li>
    </ul>
  )
})