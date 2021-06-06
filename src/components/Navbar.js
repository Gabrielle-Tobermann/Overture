import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
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
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
         {user && authenticated()}
            </Nav>
          <div>
          {
            user !== null
            && <NavItem>
              {
                user
                  ? <Button onClick={signOutUser}>Sign Out</Button>
                  : <Button onClick={signInUser}>Sign In</Button>
              }
              </NavItem>
          }
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
