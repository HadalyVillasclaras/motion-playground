import styles from "../Project.module.scss";
import Divider from "../../Shared/Divider";
import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";


export const ProjectFooter = ({ project }: any) => {
  return (
    <>
      <footer className={`${styles['footer-project']} footer`}>
      <Divider />
        <DownUpAnimate delay={0.1}>
          <div className={`${styles['footer-project__data']} `}>
          <div className="grid">
            <div>
              <p>{project.title}</p>
            </div>
            <div>
              <p>{project.year}</p>
            </div>
            <div>
              <p>{project.category}</p>
            </div>
          </div>
          </div>
        </DownUpAnimate>
      </footer>
    </>
  )
}