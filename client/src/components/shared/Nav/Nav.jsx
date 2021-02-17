import { NavLink } from "react-router-dom";
import searchicon from "../../../assets/icons/search-icon.svg";
import logo from "../../../assets/icons/logo.svg";
import menuIcon from "../../../assets/icons/hamburger-menu.svg";
import exitIcon from "../../../assets/icons/exit-icon.svg";
import { useState } from "react";

import "./Nav.css";
import React from "react";
import { signUp } from "../../../services/users";

const signUpIn = (
  <>
    <NavLink className="nav-navlinks-account" to="/account">
      Account
    </NavLink>
  </>
);
const signout = (
  <>
    <NavLink className="nav-navlinks-signout" to="/signout">
      Sign Out
    </NavLink>
  </>
);

function Nav({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="nav-container">
      <NavLink className="nav-logo" to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <NavLink className="nav-navlinks-harley" to="/brand/Harley Davidson">
        HARLEY DAVISON
      </NavLink>
      <NavLink className="nav-navlinks-ducati" to="/brand/Ducati">
        DUCATI
      </NavLink>
      <NavLink className="nav-navlinks-yamaha" to="/brand/Yamaha">
        YAMAHA
      </NavLink>
      <NavLink className="nav-navlinks-arch" to="/brand/Arch">
        ARCH
      </NavLink>
      <NavLink className="nav-navlinks-bmw" to="/brand/BMW">
        BMW
      </NavLink>
      <div className="nav-search">
        <img src={searchicon} alt="Search" />
      </div>
      {user ? (
        <div className="nav-auth-navlinks-account">
          Hello,&nbsp;{user.username.toUpperCase()}
        </div>
      ) : null}
      {user ? signout : signUpIn}
      <div className="hamburger-menu">
        <img
          src={menuIcon}
          alt="menu"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <div className={`exit-icon ${menuActive ? "active-menu" : ""}`}>
        <img
          src={exitIcon}
          alt="exit"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <div className={`nav-ham-list ${menuActive ? "active-menu" : ""}`}>
        <NavLink className="nav-contact" to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="nav-contact" to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="nav-contact" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
