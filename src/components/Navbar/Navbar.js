import { NavLink, useNavigate } from "react-router-dom";

import { signOut } from "../../utils/apiCalls";

import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    navigate("/");
  };
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
      <span
        activeClassName="navbar__li--active"
        className="navbar__li"
        onClick={handleClick}
      >
        Sign Out
      </span>
    </nav>
  );
}
