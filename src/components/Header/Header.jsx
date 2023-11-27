import { NavLink, Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import menu from "../../assets/images/icons/menu.png";

export default function Header() {

  return (
    <div className="header">
      <img className="header__menubutton" src={menu} alt="menu button" />
      {<Navbar />}
      <Link className="header__logo" to="/">
        The <br/>BOX!
      </Link>
    </div>
  );
}
