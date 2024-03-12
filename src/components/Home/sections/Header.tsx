import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";
import styles from "./../Home.module.scss";

export const Header = () => {
  return (
    <header className={`header  ${styles['home-header']}`}>
      <DownUpAnimate>
        <div className="grid">
          <span>
            <a className="link" href="/motion-playground/">Hadaly Villasclaras</a>
          </span>
          <p className={`${styles["in-progress"]}`}>[Work in progress]</p>
          <p>Motion Playground</p>
        </div>
      </DownUpAnimate>
    </header>
  );
};