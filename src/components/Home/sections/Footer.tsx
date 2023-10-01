import Divider from "../../Shared/Divider";
import { InfoContainer } from "../../Shared/InfoContainer";
import styles from "../Home.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider />
      <InfoContainer>
        <div>
          <p>Web dev</p>
        </div>
        <div>
          <p>Motion Playground</p>
        </div>
        <div>
        </div>
        <div>
          <p>Copyright © 2023</p>
        </div>
      </InfoContainer>
    </footer>
  );
};