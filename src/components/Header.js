import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="blue-grey lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Kitchen
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
