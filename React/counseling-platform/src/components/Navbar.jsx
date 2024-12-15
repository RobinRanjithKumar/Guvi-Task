// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Counseling Platform</div>
        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/dashboard">Dashboard</Link>


          <Link to="/counselors">Counselors</Link>
          
          <Link to="/appointments">Appointments</Link>

          <Link to="/Login">Login</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
