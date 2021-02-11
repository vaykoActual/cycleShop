import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-logo">LOGO</div>
      {/* <Search /> */}
      <div className="nav-search">Search</div>
      <div className="nav-navlinks-container">
        <NavLink className="nav-navlinks-item" to="#">SHOP</NavLink>
        <NavLink className="nav-navlinks-item" to="#">SELL</NavLink>
        <NavLink className="nav-navlinks-item" to="#">LEARN MORE</NavLink>
        <NavLink className="nav-navlinks-item" to="#">CONTACT</NavLink>
        <NavLink className="nav-navlinks-item" to="#">Login</NavLink>
        <NavLink className="nav-navlinks-item" to="#">Logout</NavLink>
      </div>
    </div>
  );
}

export default Nav;
