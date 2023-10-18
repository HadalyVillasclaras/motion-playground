import { useContext } from "react";
import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";
import { Clock } from "../../Shared/Clock";
import Divider from "../../Shared/Divider";
import styles from "./../Home.module.scss";
import { ThemeContext } from "../../../context/theme/ThemeContext";

export const Footer = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Divider />
      <footer className={`footer ${styles['home-footer']}`}>
        <DownUpAnimate>
          <div className={`${styles['home-footer__data']}`}>
            <div className="grid">
              <p>Last update: october 2023</p>
              <Clock />
              <p>Press [L] or <button onClick={toggleTheme} className="btn link">here</button> for theme switch</p>
            </div>
          </div>
        </DownUpAnimate>
      </footer>
    </>
  );
};