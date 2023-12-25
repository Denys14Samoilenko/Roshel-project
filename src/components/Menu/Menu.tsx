import { NavLink } from "react-router-dom";
import "./Menu.scss";
import classNames from "classnames";
import { items } from "../../helpers/constants";

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export const Menu: React.FC<Props> = ({ active, setActive }) => {
  const getActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames("menu__link", {
      activeLink: isActive,
    });
  return (
    <div
      className={classNames("menu", {
        active,
      })}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className="blur">
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <ul className="menu__list">
            {items.map((item) => (
              <li key={item.href} className="menu__item">
                <NavLink className={getActiveLinkClass} to={item.href} end>
                  {item.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
