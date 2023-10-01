import { ReactNode } from 'react'
// import styles from "./ProjectTemplate.module.scss";
import { ProjectHeader } from './sections/ProjectHeader';
import { ProjectFooter } from './sections/ProjectFooter';


interface ProjectTemplateProps {
  children: ReactNode;
  projectInfo: any
}

export const ProjectTemplate = ({ children, projectInfo }: ProjectTemplateProps) => {
  return (
    <>
      <ProjectHeader />
      <main>
        {children}
      </main>
      <ProjectFooter project={projectInfo} />
    </>
  )
}