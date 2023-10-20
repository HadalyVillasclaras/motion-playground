import { ReactNode, useEffect, useRef, useLayoutEffect, useContext, useState } from 'react'
import styles from "./Project.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';
import { useCursorEvents } from '../../hooks/useCursorEvents ';
import gsap from "gsap";
import { PageTransitionContext } from '../../context/pageTransition/PageTransitionContext';

interface ProjectTemplateProps {
  children: ReactNode;
  projectInfo: any
}

export const ProjectTemplate = ({ children, projectInfo }: ProjectTemplateProps) => {
  const { setBlendModeActive } = useCursorEvents();
  const { timings } = useContext(PageTransitionContext);
  const mainRef = useRef<HTMLElement | null>(null);
  const projectContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBlendModeActive(true);
  }, [projectInfo]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      console.log(timings);
        gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3});
    }, projectContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={projectContainerRef} className={styles["project-container"]}>
        <ProjectHeader />
        <main ref={mainRef}>
          {children}
        </main>
        <ProjectFooter project={projectInfo} />
      </div>
    </>
  )
}
