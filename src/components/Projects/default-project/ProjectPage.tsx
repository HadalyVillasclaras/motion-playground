import transition from "../../Shared/transition";
import { motion } from "framer-motion";
import styles from "./ProjectDefault.module.scss";
import { ProjectHeader } from "../sections/ProjectHeader";
import { ProjectFooter } from "../sections/ProjectFooter";

const project = {
  title: "impressions",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category: "portfolio design",
  squad: "impressions io",
  profile: "front end dev",
};

const ProjectPage = () => {
  return (
    <>
      <div className="bg"></div>
      <div className={styles["projectdefault-container"]}>
        <ProjectHeader />
        <div className={styles["project-info"]}>
          <motion.div
            className={styles["project-img"]}
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
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
              // src={project.title}
              alt=""
              initial={{
                scale: 1.5,
              }}
              animate={{
                scale: 1,
              }}
            />
          </motion.div>
          <motion.div
            className={styles["project-description"]}
            initial={{
              x: -40,
              opacity: 0,
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
            <p>{project.description}</p>
          </motion.div>
        </div>
        <ProjectFooter project={project} />
      </div>
    </>
  );
};

export default transition(ProjectPage);
