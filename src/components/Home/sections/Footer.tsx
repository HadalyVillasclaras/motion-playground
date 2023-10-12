import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";
import { Clock } from "../../Shared/Clock";
import Divider from "../../Shared/Divider";

export const Footer = () => {
  return (
    <>
      <Divider />
      <footer className='footer'>
        <DownUpAnimate>
          <div className="grid sp-side-m">
            <div>
              <p>© 2023</p>
            </div>
            <div>
              <Clock/>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
              <p className="blinking-text">[Work in progress]</p>
            </div>
          </div>
        </DownUpAnimate>
      </footer>
    </>
  );
};