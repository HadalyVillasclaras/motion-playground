import { ThemeSwitcher } from "../../Shared/ThemeSwitcher";
import { DownUpAnimate } from "../../Shared/animations/DownUpAnimate";

export const Header = () => {
  return (
    <header className="header">
      <DownUpAnimate>
        <div className="grid">
          <div>
            <a className="link" href="/">Hadaly Villasclaras</a>
          </div>
          <div>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <ThemeSwitcher/>
          </div>
          <div>
            <p className="">Motion Playground</p>
          </div>
        </div>
      </DownUpAnimate>
    </header>
  );
};
