import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";
import { Clock } from "../../Shared/Clock";
import Divider from "../../Shared/Divider";
import styles from "./../Home.module.scss";

export const Footer = () => {
  return (
    <>
      <Divider />
      <footer className={`footer ${styles['home-footer']}`}>
        <DownUpAnimate>
          <div className={`${styles['home-footer__data']}`}>
            <div className="grid">
              <p>© 2023</p>
              <Clock />
              <p className="blinking-text">[Work in progress]</p>
            </div>
          </div>
        </DownUpAnimate>
      </footer>
    </>
  );
};