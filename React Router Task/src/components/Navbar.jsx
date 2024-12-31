/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Courses Navigation</h1>
      <div className="links">
        <NavLink to="/" className="link" activeclassname="active">All</NavLink>
        <NavLink to="/full-stack" className="link" activeclassname="active">Full Stack Development</NavLink>
        <NavLink to="/data-science" className="link" activeclassname="active">Data Science</NavLink>
        <NavLink to="/cyber-security" className="link" activeclassname="active">Cyber Security</NavLink>
        <NavLink to="/career" className="link" activeclassname="active">Career</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
