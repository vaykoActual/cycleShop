import { NavLink } from "react-router-dom";
import "./Nav.css";
import React from 'react'
import { signUp } from "../../../services/users";


const signUpIn = (
  <>
    <NavLink className="nav-navlinks-item" to="/signup">
      Sign Up
    </NavLink>
    <NavLink className="nav-navlinks-item" to="/account">
      Sign In
    </NavLink>
  </>
)
const signout = (
  <>
    <NavLink to="/signout">
      Sign Out
    </NavLink>
  </>
)



function Nav({ user }) {
  console.log(user)

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <NavLink to="/"><h1>Cycle Shop</h1></NavLink>
      </div>
      {/* <Search /> */}
      <div className="nav-search">Search</div>
      <div className="nav-navlinks-container">
        <NavLink className="nav-navlinks-item" to="/brand/Harley Davidson">
          Harley Davidson
        </NavLink>
        <NavLink className="nav-navlinks-item" to="/brand/Ducati">
          Ducati
        </NavLink>
        <NavLink className="nav-navlinks-item" to="/brand/Yamaha">
          Yamaha
        </NavLink>
        <NavLink className="nav-navlinks-item" to="/brand/Arch">
          Arch
        </NavLink>
        <NavLink className="nav-navlinks-item" to="/brand/BMW">
          BMW
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        {user ? <>Hello,&nbsp;&nbsp; { user.username.toUpperCase()}</> : null}
        {user ? signout : signUpIn }
      </div>
    </div>
  );
}

export default Nav;
