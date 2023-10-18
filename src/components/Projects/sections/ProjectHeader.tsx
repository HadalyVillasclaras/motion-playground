import { Link } from "react-router-dom";
import styles from "../Project.module.scss";

export const ProjectHeader = () => {
  return (
    <header className={`${styles["project-header"]} header`}>
      <div className="grid">
        <div>
        <Link className={`${styles[""]} link`} to="/">
          Back to home
        </Link>
        </div>
      </div>
    </header>
  );
};