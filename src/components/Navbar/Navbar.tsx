import { NavLink, useNavigate } from "react-router-dom";

import { signOut } from "../../utils/apiCalls";

import "./Navbar.scss";
import { useEffect, useState } from "react";

export default function Navbar() {
  const jwtToken = !!window.sessionStorage.getItem("Token");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("storageUser"));
  const [isLoggedIn, setIsLoggedIn] = useState(jwtToken);

  useEffect(() => {
    try {
      if (jwtToken) setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }, [jwtToken, isLoggedIn]);

  const handleClick = () => {
    signOut();
    setIsLoggedIn(false);
    navigate("/");
  };
  
  return (
    <nav className="navbar">
      {isLoggedIn ? (
        <>
          {user ? (
            <NavLink className="navbar__li" to={`/users/${user.username}`}>
              My Profile
            </NavLink>
          ) : (
            ""
          )}

          <NavLink className="navbar__li" to="/threads">
            Threads
          </NavLink>

          <NavLink className="navbar__li" to="/expo">
            Expo
          </NavLink>

          <NavLink className="navbar__li" to="/chat">
            Chat
          </NavLink>
          <NavLink className="navbar__li" to="/yearbook">
            Yearbook
          </NavLink>
          <span className="navbar__li" onClick={handleClick}>
            Sign Out
          </span>
        </>
      ) : (
        <NavLink className="navbar__li" to="/login">
          Log In
        </NavLink>
      )}
      <NavLink className="navbar__li" to="/about">
        About
      </NavLink>
    </nav>
  );
}
