import styles from "./Home.module.css"; 
import { Link } from "react-router-dom";

import Project1Img from "../../assets/images/project-1.png";
import Project2Img from "../../assets/images/project-2.png";
import Project3Img from "../../assets/images/project-3.png";
import Project4Img from "../../assets/images/project-4.png";
// import Project5Img from "../../assets/images/project-5.png";

const projects = [
  {
    to: 'project/pills',
    imgSrc: Project1Img,
    name: 'Motion pills',
    category: 'p5 | Matter',
    year: '2023',
  },
  {
    to: 'project/circular',
    imgSrc: Project2Img,
    name: 'Circular Scroll',
    category: 'GSAP',
    year: '2023',
  },
  {
    to: 'project/img-interaction',
    imgSrc: Project3Img,
    name: 'Image Interaction',
    category: 'GSAP | p5 ',
    year: '2023',
  },
  {
    to: 'project',
    imgSrc: Project4Img,
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