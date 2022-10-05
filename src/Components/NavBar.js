import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";
import "./NavBar.css";
import logorecipe4u from "../images/logorecipe4u.png"
export const NavBar = () => {

  return (
    <div>
      <div className="main">
        <Nav className="nav">
          <NavItem>
            <Link to="/" className="links" style={{ marginLeft: "30px" }}>
             <img  style={{width:120, height:120, marginTop: -20  }}src={logorecipe4u} alt={logorecipe4u}/>
            </Link>
          </NavItem>
          <div className="nav-links">
            <NavItem>
              <Link to="/search" className="links">
                Search
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="links">
                About
              </Link>
            </NavItem>
          </div>
        </Nav>
      </div>
    </div>
  );
};
