import styles from "../Home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../Shared/Divider.tsx";
import { useContext, useLayoutEffect, useRef } from "react";
import { PageTransitionContext } from "../../../context/pageTransition/PageTransitionContext.tsx";
import { projectsInfo } from '../../../utils/projectInfo.ts';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsNav = () => {
  const {triggerTransition , timings} = useContext(PageTransitionContext);
  const navRef = useRef(null);
  const projectRefs = useRef([]);

  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string) => {
    event.preventDefault();
    if (to === 'webflow') {
      return;
    } else {
      triggerTransition();
      setTimeout(() => {
        navigate(to);
      }, timings.navigationDelay);
    }
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap.from(projectRefs.current, {
          delay: 1,
          opacity: 0,
          x: -20,
          stagger: 0.1  
        });
      
    }, navRef.current); 
    
    return () => ctx.revert();
  }, []);
  
  return (
    <nav ref={navRef} className={` ${styles["projects-nav"]}`}>
      <ul className={styles["projects-nav-container"]}>
        {projectsInfo.map((project, index) => (
          <li ref={el => projectRefs.current[index] = el} key={index} className={`prjxt cursor-xpnd`} >
            <Divider />
            <Link 
              className={` ${styles["project"]}`} 
              to={project.url} 
              onClick={(event) => handleLinkClick(event, project.url)}
              >
              <div className={styles["project__l"]}>
                  <div className="no-blend-nav">
                  </div>
                <div className={`${styles["project__l-img"]}`}>
                  <img className="no-blend-img" loading="lazy" src={project.thumbnail} alt="" />
                </div>
                <div className={`${project.title === 'Webflow' ? styles['project__l-name-soon'] : ''} ${styles["project__l-name"]}`}>
                  <h2>{project.title}</h2>
                  {
                    project.title === 'Webflow' &&
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