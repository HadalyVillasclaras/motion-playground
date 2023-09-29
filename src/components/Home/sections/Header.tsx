import styles from "../Home.module.scss";
import Divider from "../../Shared/Divider";
import { InfoContainer } from "../../Shared/InfoContainer";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <Divider/>
      <InfoContainer>
        <div>
          <p>Hadaly Villasclaras</p>
        </div>
        <div>
          <p>Web dev</p>
        </div>
        <div>
          <p>Motion Playground</p>
        </div>
        <div>
          <p className="blinking-text">[ Work in progress ]</p>
        </div>
      </InfoContainer>
    </header>
  );
};
