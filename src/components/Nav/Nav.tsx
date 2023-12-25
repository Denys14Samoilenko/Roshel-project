import { useState } from "react";
import { Menu } from "../Menu";
import "./Nav.scss";
import classNames from "classnames";

export const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav
        className={classNames("nav", {
          active: menuActive,
        })}
      >
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>

      <Menu active={menuActive} setActive={setMenuActive} />
    </>
  );
};
