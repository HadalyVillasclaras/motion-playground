import { rocksGroup, blueFluorite, thumbWheel, cuprite1 } from './imgs-data/data.ts';

export const projectsInfo = [
  {
    id: 'rocks',
    title: "Physic rocks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "p5 | Matter",
    year: "2023",
    thumbnail: rocksGroup,
    url: 'project/rocks',
  },
  {
    id: 'wheel',
    title: "Wheel Scroll",
    category: "GSAP",
    year: "2023",
    thumbnail: thumbWheel,
    url: 'project/wheel',
  },
  {
    id: 'inter',
    title: 'Intersected imgs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'Gsap | Inters. Observer API',
    year: '2023',
    thumbnail: blueFluorite,
    url: 'project/intersection',
  },
  {
    id: 'webflow',
    title: 'Webflow',
    category: 'GSAP',
    year: '2023',
    thumbnail: cuprite1,
    url: 'webflow',
  }
];