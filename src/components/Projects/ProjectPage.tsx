import {  useParams } from "react-router-dom";
import { DefaultProjectPage } from "./DefaultProjectPage";
import transition from "../Shared/transition";

const project =  
  {
    title: 'impressions',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'portfolio design',
    squad: 'impressions io',
    profile: 'front end dev'
  }

const ProjectPage = () => {
  const { projectId } = useParams();
  
  console.log(projectId);
  return (
    <>
      <div className="bg"></div>
      <DefaultProjectPage project={project}/>
    </>
  );
};

export default transition(ProjectPage);
