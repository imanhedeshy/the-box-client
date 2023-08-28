import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        activeClassName="navbar__li--active"
        className="navbar__li"
        to="/users/imanhedeshy"
      >
        Your Profile
      </NavLink>
      <NavLink
        activeClassName="navbar__li--active"
        className="navbar__li"
        to="/yearbook"
      >
        Yearbook
      </NavLink>
      <NavLink
        activeClassName="navbar__li--active"
        className="navbar__li"
        to="/threads"
      >
        Threads
      </NavLink>
      <NavLink
        activeClassName="navbar__li--active"
        className="navbar__li"
        to="/chat"
      >
        Chat
      </NavLink>
      <NavLink
        activeClassName="navbar__li--active"
        className="navbar__li"
        to="/expo"
      >
        Expo
      </NavLink>
    </nav>
  );
}
