import { ReactNode } from 'react'
import styles from "./Project.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';

interface ProjectTemplateProps {
  children: ReactNode;
  projectInfo: any
}

export const ProjectTemplate = ({ children, projectInfo }: ProjectTemplateProps) => {
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