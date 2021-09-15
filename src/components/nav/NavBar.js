import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
// import Logo from "./WordPlace.jpeg"

export const NavBar = () => {
  const history = useHistory();

  return (
    <ul className="navbar">
      <li className="navbar__item">
        {/* <img className="navbar__logo" src={Logo} /> */}
        <div className="navbar__name"> WordPlace</div>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/profile">
          My Profile
        </Link>
      </li>

      <li className="navbar__item">
        <Link
          className="navbar__link"
          to="/login"
          onClick={
            //allows the user to logout by removing the current user from the local storage
            (event) => {
              localStorage.removeItem("rare_token");
            }
          }
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};
