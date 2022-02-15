import Logo from "images/logo.png";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function Navigation() {
  return (
    <div>
      <div>
        <Navbar color="primary" container expand="md" fixed="top" light>
          <NavbarBrand href="/">
            <img src={Logo} alt="this is car image" />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Listing
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Pages</NavLink>
              </NavItem>
              <NavbarText>Simple Text</NavbarText>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
