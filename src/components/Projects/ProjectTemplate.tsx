import { ReactNode, useEffect } from 'react'
import styles from "./Project.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';
import { useCursorEvents } from '../../hooks/useCursorEvents ';

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
