import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-sm bg-secondary">
        <div className="container-fluid">
          <span className="navbar-brand">My blog</span>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-post" className="nav-link">
                  Add
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;