import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css';
import Logo from './images/Logo.jpeg';

function AppNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-custom-color">
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bar" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
          <Nav.Link as={Link} to="/courses" className="nav-link">Courses</Nav.Link>
          <Nav.Link as={Link} to="/brokers" className="nav-link">Brokers</Nav.Link>
          <Nav.Link as={Link} to="/contact_us" className="nav-link">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/mentorship" className="nav-link">Mentorship</Nav.Link>
          <Nav.Link as={Link} to="/faq" className="nav-link">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
