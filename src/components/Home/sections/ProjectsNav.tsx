import styles from "../Home.module.scss"; 
import { Link } from "react-router-dom";
import {zinc, feldspar, stichite, augite} from '../../../assets/images/index.ts';

const projectList = [
  {
    to: 'project/pills',
    imgSrc: zinc,
    name: 'Motion pills',
    category: 'p5 | Matter',
    year: '2023',
  },
  {
    to: 'project/wheel',
    imgSrc: feldspar,
    name: 'Wheel Scroll',
    category: 'GSAP',
    year: '2023',
  },
  {
    to: 'project/img-interaction',
    imgSrc: stichite,
    name: 'Image Interaction',
    category: 'Inter. obs. | GSAP ',
    year: '2023',
  },
  {
    to: '#',
    imgSrc: augite,
    name: 'Webflow',
    category: 'GSAP',
    year: '2023',
  },
];
export const ProjectsNav = () => {
  return (
    <nav className={styles["projects-nav"]}>
      <ul className={styles["projects-nav-container"]}>
        {projectList.map((project, index) => (
          <li key={index}>
            <Link className={styles["project"]} to={project.to}>
                <div className={styles["project__l"]}>
                  <div className={styles["project__l-img"]}>
                    <img src={project.imgSrc} alt="" />
                  </div>
                  <div className={styles["project__l-name"]}>
                    <h2>{project.name}</h2>
                    {
                      project.name === 'Webflow' &&
                      <span className={styles["project-soon"]}>[coming soon]</span>
                    }
                  </div>
                </div>
                <div className={styles["project__date"]}>
                  <p>{project.category}</p>
                  <p>/{project.year}</p>
                </div>
                <div className={styles["project__dir"]}>
                  <p>&#8599;</p>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}