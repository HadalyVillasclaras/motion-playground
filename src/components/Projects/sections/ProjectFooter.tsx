import styles from "../Project.module.scss";
import Divider from "../../Shared/Divider";
import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";


export const ProjectFooter = ({ project }: any) => {
  return (
    <>
      <footer className={`${styles['footer-project']} footer`}>
      <Divider />
        <DownUpAnimate>
          <div className="grid sp-side-m">
            <div>
              <p>{project.title}</p>
            </div>
            <div>
              <p>{project.year}</p>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
              <p>{project.category}</p>
            </div>
          </div>
        </DownUpAnimate>
      </footer>
    </>
  )
}