import styles from "../Home.module.scss";
import { Link } from "react-router-dom";
import { zinc, halite, biotiteSm, caledonite } from '../../../utils/data.ts';
import Divider from "../../Shared/Divider.tsx";

const projectList = [
  {
    to: 'project/pills',
    imgSrc: zinc,
    name: 'Physics rocks',
    category: 'p5 | Matter',
    year: '2023',
  },
  {
    to: 'project/wheel',
    imgSrc: biotiteSm ,
    name: 'Wheel Scroll',
    category: 'GSAP',
    year: '2023',
  },
  {
    to: 'project/img-interaction',
    imgSrc: halite ,
    name: 'Image Interaction',
    category: 'Inter. obs. | GSAP ',
    year: '2023',
  },
  {
    to: '#',
    imgSrc: caledonite,
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
          <li key={index} className="cursor-xpnd">
            <Divider />
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0883789 0.958345H23.0884M22.1301 0V23M22.46 0.677644L0.737779 22.3999" strokeWidth="1.91667" />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}