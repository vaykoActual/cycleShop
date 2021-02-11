import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-logo">LOGO</div>
      {/* <Search /> */}
      <div className="nav-search">Search</div>
      <div className="nav-navlinks-container">
        <NavLink className="nav-navlinks-item" to="#">
          Harley Davidson
        </NavLink>
        <NavLink className="nav-navlinks-item" to="#">
          Ducati
        </NavLink>
        <NavLink className="nav-navlinks-item" to="#">
          Yamaha
        </NavLink>
        <NavLink className="nav-navlinks-item" to="#">
          Arch
        </NavLink>
        <NavLink className="nav-navlinks-item" to="#">
          BMW
        </NavLink>
        <NavLink className="nav-navlinks-item" to="#">
          Account
        </NavLink>
        <button>hamburger</button>
      </div>
    </div>
  );
}

export default Nav;
