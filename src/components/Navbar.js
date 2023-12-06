import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './AppNavbar.css'; // Import a CSS file for custom styles
import Logo from './images/Logo.jpeg'; // Replace 'Logo.jpeg' with your actual logo file

function AppNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-custom-color">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bar' />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className='mr-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#brokers">Brokers</Nav.Link>
          <Nav.Link href="#contact_us">Contact Us</Nav.Link>
          <Nav.Link href="#mentorship">Mentorship</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
