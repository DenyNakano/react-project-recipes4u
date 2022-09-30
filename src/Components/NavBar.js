
import React from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import "./NavBar.css";
import recipeLogo from '../images/recipeLogo.jpeg'
export const NavBar = () => {
  return (
    <div className="main" >
      <Nav className="nav" >
        <NavItem>
          <NavLink href="/">
            <img id="recipe-logo" src={recipeLogo} alt={recipeLogo}/>
          </NavLink>
        </NavItem>
        <div className="nav-links" >
        <NavItem>
          <NavLink href="/search">
            Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" >
            About
          </NavLink>
        </NavItem>
        </div>
      </Nav>
    </div>
  );
};
