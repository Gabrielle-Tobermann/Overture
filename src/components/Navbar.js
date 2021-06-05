import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link className="nav-link" to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/instrument-inventory'>Instrument Inventory</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/bow-inventory'>Bow Inventory</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/orders'>Orders</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/financial-reports'>Financial Reports</Link>
            </NavItem>
          </Nav>
          <Button>Sign In</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
