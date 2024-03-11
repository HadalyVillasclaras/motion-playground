import { zinc, halite, biotiteSm, feldspar } from './imgs-data/data.ts';

export const projectsInfo = [
  {
    id: 'rocks',
    title: "Physical rocks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "p5 | Matter",
    year: "2023",
    thumbnail: zinc,
    url: 'project/rocks',
  },
  {
    id: 'wheel',
    title: "Wheel Scroll",
    category: "GSAP",
    year: "2023",
    thumbnail: biotiteSm,
    url: 'project/wheel',
  },
  {
    id: 'inter',
    title: 'Intersected imgs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'Gsap | Inters. Observer API',
    year: '2023',
    thumbnail: halite,
    url: 'project/intersection',
  },
  {
    id: 'webflow',
    title: 'Webflow',
    category: 'GSAP',
    year: '2023',
    thumbnail: feldspar,
    url: 'webflow',
  }
];