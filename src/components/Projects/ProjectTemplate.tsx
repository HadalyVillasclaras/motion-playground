import { ReactNode, useEffect, useRef, useLayoutEffect } from 'react'
import styles from "./Project.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';
import { useCursorEvents } from '../../hooks/useCursorEvents ';
import gsap from "gsap";

interface ProjectTemplateProps {
  children: ReactNode;
  projectInfo: any
}

export const ProjectTemplate = ({ children, projectInfo }: ProjectTemplateProps) => {
  const { setBlendModeActive } = useCursorEvents();
  const mainRef = useRef<HTMLElement | null>(null);
  const projectContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBlendModeActive(true);
  }, [projectInfo]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1});
    }, projectContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id={projectInfo?.id} ref={projectContainerRef} className={styles["project-container"]}>
        <ProjectHeader />
        <main ref={mainRef}>
          {children}
        </main>
        <ProjectFooter project={projectInfo} />
      </div>
    </>
  )
}
