import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
// import Logo from "./WordPlace.jpeg"

export const NavBar = () => {
  const history = useHistory();

  return (
    <header class="nav__header">
      <h1 class="logo">WordPlace</h1>
      <ul className="main-nav">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" id="myProfile__link " to="/myprofile">
            My Profile
          </Link>
        </li>

        <li className="navbar__item">
          <Link
            className="navbar__link"
            to="/login"
            onClick={
              //allows the user to logout by removing the current user from the local storage
              () => {
                localStorage.removeItem("wordplace_token");
              }
            }
          >
            Logout
          </Link>
        </li>
      </ul>
    </header>
  );
};
