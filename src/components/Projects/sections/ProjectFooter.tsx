import styles from "../Project.module.scss";
import Divider from "../../Shared/Divider";
import { InfoContainer } from "../../Shared/InfoContainer";


export const ProjectFooter = ({ project }: any) => {
  return (
    <footer className={styles['footer-project']}>
     <Divider/>
      <InfoContainer>
        <div>
          <p>{project.title}</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p>{project.year}</p>
        </div>
        <div>
          <p>{project.category}</p>
        </div>
      </InfoContainer>
    </footer>
  )
}