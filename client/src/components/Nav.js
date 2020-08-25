/**
 * implement navbar with reactstrap
 */

import React from "react";

// React strap
import { Navbar, NavbarText, Nav, NavItem } from "reactstrap";

const Nav_ = () => (
  <div>
    <Navbar color="dark" light expand="md">
      <Nav className="mr-auto">
        <NavItem>
          <NavbarText style={{ color: "#fff" }}>
            Click a city to display all available apartments in that cities area
          </NavbarText>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Nav_;
