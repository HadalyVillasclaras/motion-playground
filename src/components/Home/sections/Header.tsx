import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";
import styles from "./../Home.module.scss";

export const Header = () => {
  return (
    <header className={`header  ${styles['home-header']}`}>
      <DownUpAnimate>
        <div className="grid">
          <span>
            <a className="link" href="/">Hadaly Villasclaras</a>
          </span>
          <p>[Work in progress]</p>
          <p className="">Motion Playground</p>
        </div>
      </DownUpAnimate>
    </header>
  );
};