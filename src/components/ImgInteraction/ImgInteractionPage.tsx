import React from 'react'
import { ProjectTemplate } from '../Projects/ProjectTemplate'

const project = {
  title: 'Image interaction',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  category: 'Gsap | Intersection Observer API',
  year: '2023'
};

export const ImgInteractionPage = () => {
  return (
    <ProjectTemplate projectInfo={project}>

    </ProjectTemplate>
  )
}