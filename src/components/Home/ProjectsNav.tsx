import styles from "./Home.module.css"; 
import { Link } from "react-router-dom";
import {zinc, feldspar, stichite, augite} from '../../assets/images/index.ts';



const projects = [
  {
    to: 'project/pills',
    imgSrc: zinc,
    name: 'Motion pills',
    category: 'p5 | Matter',
    year: '2023',
  },
  {
    to: 'project/circular',
    imgSrc: feldspar,
    name: 'Circular Scroll',
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
    <div className={styles["projects-nav"]}>
      <div className={styles["projects-nav-container"]}>
        {projects.map((project, index) => (
          <div className={styles["project-item"]} key={index}>
            <Link to={project.to}>
              <div className={styles["project-link"]}>
                <div className={styles["project-l"]}>
                  <div className={styles["project-link-img"]}>
                    <img src={project.imgSrc} alt="" />
                  </div>
                  <div className={styles["project-name"]}>
                    <h2>{project.name}</h2>
                    {
                      project.name === 'Webflow' &&
                      <span className={styles["project-soon"]}>[coming soon]</span>
                    }
                  </div>
                </div>
                <div className={styles["project-date"]}>
                  <p>{project.category}</p>
                  <p>/{project.year}</p>
                </div>
                <div className={styles["project-dir"]}>
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}