import { ProjectTemplate } from "../Projects/ProjectTemplate";
import { MotionBlocks } from "./MotionBlocks";
import { projectsInfo } from '../../utils/projectInfo.ts';

export const MotionPillsPage = () => {
  const rocksProject = projectsInfo.find(project => project.id === 'rocks');
  return (
    <ProjectTemplate projectInfo={rocksProject}>
      <div className="header-instr">
        <p className="header-instr-text">[Drag & throw]</p>
      </div>
      <MotionBlocks />
    </ProjectTemplate>
  );
};
