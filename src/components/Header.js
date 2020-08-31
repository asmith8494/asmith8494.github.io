import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          Anthony Smith
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <LinkContainer to='/portfolio'><Nav.Link>Portfolio</Nav.Link></LinkContainer>
        <LinkContainer to='/contact'><Nav.Link>Get In Touch</Nav.Link></LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Header;