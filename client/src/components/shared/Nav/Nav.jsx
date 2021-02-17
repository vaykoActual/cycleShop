import { NavLink } from "react-router-dom";
import searchIcon from "../../../assets/icons/search-icon.svg";
import logo from "../../../assets/icons/logo.svg";
import hamburger from "../../../assets/icons/hamburger-menu.svg";

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
    <NavLink className="nav-navlinks-signout"to="/signout">Sign Out</NavLink>
  </>
);

function Nav({ user }) {
  console.log(user);

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
          <img src={searchIcon} alt="Search" />
        </div>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        {user ? <div className="nav-navlinks-account">Hello,&nbsp;&nbsp; {user.username.toUpperCase()}</div> : null}
        {user ? signout : signUpIn}
        <div className="hamburger-menu"><img src={hamburger} alt="hamburger-menu"/></div>
      </div>
  );
}

export default Nav;
