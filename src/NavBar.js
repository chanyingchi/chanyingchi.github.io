import "./NavBar.css";

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

import { NAME } from "./links";

const ITEMS = {
  home: "Home",
  news: "News",
  publications: "Publications",
  multimedia: "Multimedia",
};

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen((open) => !open);
  };

  return (
    <MDBNavbar className="App-NavBar" color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">{NAME}</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          {Object.keys(ITEMS).map((key) => (
            <MDBNavItem key={key} className="NavBar-link">
              <a href={`#${key}`} className="white-text">
                {ITEMS[key]}
              </a>
            </MDBNavItem>
          ))}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}
