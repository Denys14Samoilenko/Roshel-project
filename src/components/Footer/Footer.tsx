import { NavLink } from "react-router-dom";
import { items } from "../../helpers/constants";
import classNames from "classnames";

import "./Footer.scss";

export const Footer = () => {
  const getActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames("footer__link", {
      activeLink: isActive,
    });

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          {items.map((item) => (
            <li key={item.href} className="footer__item">
              <NavLink className={getActiveLinkClass} to={item.href} end>
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
