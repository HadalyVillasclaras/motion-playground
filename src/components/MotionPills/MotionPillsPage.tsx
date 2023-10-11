import { ProjectTemplate } from "../Projects/ProjectTemplate";
import { MotionBlocks } from "./MotionBlocks";

const project = {
  title: "Motion pills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category: "p5.js | Matter",
  year: "2023",
};

export const MotionPillsPage = () => {
  return (
    <ProjectTemplate projectInfo={project}>
      {/* <MotionPills /> */}
      <MotionBlocks />
    </ProjectTemplate>
  );
};
