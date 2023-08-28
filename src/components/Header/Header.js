import { NavLink } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import menu from "../../assets/images/icons/menu.png";

export default function Header() {
  return (
    <div className="header">
      <img className="header__menubutton" src={menu} alt="menu button" />
      <Navbar />
      <NavLink className="header__logo" to="/">
        The BOX!
      </NavLink>
    </div>
  );
}
