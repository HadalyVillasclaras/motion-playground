import { ReactNode, useEffect } from 'react'
import styles from "./Project.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';
import { useCursorEvents } from '../../hooks/useCursorEvents ';
import { Fader } from '../Shared/Fader';

interface ProjectTemplateProps {
  children: ReactNode;
  projectInfo: any
}

export const ProjectTemplate = ({ children, projectInfo }: ProjectTemplateProps) => {
  const { setBlendModeActive} = useCursorEvents();

  useEffect(() => {
    setBlendModeActive(true)
  }, [projectInfo])
  
  return (
    <>
      <Fader/>
      <div className={styles["project-container"]}>
        <ProjectHeader />
        <main>
          {children}
        </main>
        <ProjectFooter project={projectInfo} />
      </div>

    </>
  )
}
