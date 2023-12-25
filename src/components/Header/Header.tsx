import { Link } from "react-router-dom";
import "./Header.scss";
import { Nav } from "../Nav";
import { imagePath } from "../../helpers/constants";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={`${imagePath}images/logo.png`} alt="Roshel logo" />
      </Link>
      <input
        className="header__input input"
        type="text"
        name=""
        id=""
        placeholder="Search"
      />
      <Nav />
    </div>
  );
};
