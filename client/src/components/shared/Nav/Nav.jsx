import { NavLink } from "react-router-dom";
import searchIcon from "../../../assets/icons/search-icon.svg";
import logo from "../../../assets/icons/logo.svg";
import hamburger from "../../../assets/icons/hamburger-menu.svg";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <a className="nav-logo">
        <img src={logo} alt="Logo" />
      </a>
        <NavLink className="nav-navlinks-harley" to="#">
          HARLEY DAVIDSON
        </NavLink>
        <NavLink className="nav-navlinks-ducati" to="#">
          DUCATI
        </NavLink>
        <NavLink className="nav-navlinks-yamaha" to="#">
          YAMAHA
        </NavLink>
        <NavLink className="nav-navlinks-arch" to="#">
          ARCH
        </NavLink>
        <NavLink className="nav-navlinks-bmw" to="#">
          BMW
        </NavLink>
        <div className="nav-search">
          <img src={searchIcon} alt="Search" />
        </div>
        <NavLink className="nav-navlinks-account" to="#">
          ACCOUNT
        </NavLink>
        <div className="hamburger-menu"><img src={hamburger} alt="hamburger-menu"/></div>
      </div>
  );
}

export default Nav;
