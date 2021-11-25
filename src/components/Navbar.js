import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <p>Dominika Lipka - Web Developer</p>
      </div>
      <div className='links'>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>{" "}
        <Link to="/projects" style={{ textDecoration: "none" }}>
          Projects
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
