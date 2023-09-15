import { NavLink, useNavigate } from "react-router-dom";

import { signOut } from "../../utils/apiCalls";

import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("storageUser"));
  console.log(user.username);

  const handleClick = () => {
    signOut();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <NavLink className="navbar__li" to={`/users/${user.username}`}>
        My Profile
      </NavLink>
      <NavLink className="navbar__li" to="/yearbook">
        Yearbook
      </NavLink>
      <NavLink className="navbar__li" to="/threads">
        Threads
      </NavLink>
      <NavLink className="navbar__li" to="/chat">
        Chat
      </NavLink>
      <NavLink className="navbar__li" to="/expo">
        Expo
      </NavLink>
      <span className="navbar__li" onClick={handleClick}>
        Sign Out
      </span>
    </nav>
  );
}
