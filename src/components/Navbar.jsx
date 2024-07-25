import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <button className="menu-toggle" onClick={toggleDrawer}>
          {isDrawerOpen ? "☰" : "☰"}
        </button>
        <ul className={`navbar-links ${isDrawerOpen ? "hidden" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/admissions">Admissions</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className={`menu-drawer ${isDrawerOpen ? "active" : ""}`}>
          <button className="menu-toggle" onClick={toggleDrawer}>
            ×
          </button>
          <ul>
            <li>
              <Link to="/" onClick={toggleDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleDrawer}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" onClick={toggleDrawer}>
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" onClick={toggleDrawer}>
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/faculty" onClick={toggleDrawer}>
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/students" onClick={toggleDrawer}>
                Students
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleDrawer}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleDrawer}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
