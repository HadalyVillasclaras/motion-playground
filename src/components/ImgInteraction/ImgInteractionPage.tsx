import { ProjectTemplate } from '../Projects/ProjectTemplate'
import { projectsInfo } from '../../utils/projectInfo.ts';

export const ImgInteractionPage = () => {
  const interProject = projectsInfo.find(project => project.id === 'inter');

  return (
    <ProjectTemplate projectInfo={interProject}>
    </ProjectTemplate>
  )
}