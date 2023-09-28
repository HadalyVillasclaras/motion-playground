import { motion } from "framer-motion";
import { ProjectHeader } from './ProjectHeader';
import { ProjectFooter } from './ProjectFooter';
import styles from "./Project.module.css";

export function ProjectCont({ project }) {
  return (
    <div className={styles['project-container']}
    >
      <ProjectHeader />
      <div
        className={styles['project-info']}
      >
        <motion.div
          className={styles['project-img']}
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: {
              duration: 1.75,
              ease: [0.83, 0, 0.17, 1],
              delay: -0.1,
            },
          }}
        >
          <motion.img
            src={project.img}
            alt=""
            initial={{
              scale: 1.5
            }}
            animate={{
              scale: 1,
             
            }}
          />
        </motion.div>
        <motion.div
          className={styles['project-description']}
          initial={{
            x: -40,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.25,
            },
          }}
        >
          <p>
            <b>{project.title}</b>
          </p>
          <p>
            {project.description}
          </p>
        </motion.div>
      </div>
      <ProjectFooter project={project} />
    </div>
  );
}