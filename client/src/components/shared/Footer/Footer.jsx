import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <NavLink to="/contact">
        <button>contact</button>
      </NavLink>
    </div>
  );
}

export default Footer;
