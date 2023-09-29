import Divider from "../../Shared/Divider";
import { InfoContainer } from "../../Shared/InfoContainer";
import styles from "../Home.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider />
      <InfoContainer>
        <div>
          <p>work in progress</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p>hv</p>
        </div>
        <div>
          <p>Copyright © 2023</p>
        </div>
      </InfoContainer>
    </footer>
  );
};