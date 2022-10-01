import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav, NavLink } from "reactstrap";
import "./NavBar.css";
import { Search } from "./Search";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="main">
        <Nav className="nav">
          <NavItem>
            <Link to="/" className="links" style={{ marginLeft: "30px" }}>
              Image
            </Link>
          </NavItem>
          <div className="nav-links">
            <NavItem>
              <div
                className="links"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Search
              </div>
            </NavItem>
            <NavItem>
              <Link to="/about" className="links">
                About
              </Link>
            </NavItem>
          </div>
        </Nav>
      </div>
      <div id="search">{isOpen && <Search />}</div>
    </div>
  );
};
