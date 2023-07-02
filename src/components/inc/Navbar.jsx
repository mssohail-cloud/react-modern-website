import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-dark text-white bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            React Course
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
