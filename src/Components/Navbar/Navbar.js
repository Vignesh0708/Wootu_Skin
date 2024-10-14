"use client";  // This makes the Navbar component a Client Component

import { useEffect, useState } from 'react';  // Only keep this correct import
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import bootstrap from 'bootstrap';
import css from "./Navbar.css";
import logo from "../../../Public/Assets/Wootlogo.png"
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);

  return (
    
    <Navbar expand="lg" bg="light" variant="light">
      <Container className='navbar-container'>
        {/* Left Side - Logo */}
        <Navbar.Brand href="/" className='col-lg-4'>
          <img src="/Assets/Wootlogo.png" alt="Logo" width="80" height="80" />
        </Navbar.Brand>

        {/* Center - Menu */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center col-lg-4">
          <Nav>
            <Nav.Link as={Link} href="/" className='active'>Home</Nav.Link>
            <NavDropdown 
              title="Treatment" 
              id="treatment-dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              show={showDropdown}
            >
              <NavDropdown.Item href="/treatment/general">General Treatment</NavDropdown.Item>
              <NavDropdown.Item 
                onMouseEnter={() => setShowSubDropdown(true)}
                onMouseLeave={() => setShowSubDropdown(false)}
              >
                Advanced Treatment
                <NavDropdown 
                  show={showSubDropdown} 
                  onMouseEnter={() => setShowSubDropdown(true)} 
                  onMouseLeave={() => setShowSubDropdown(false)}
                  id="advanced-treatment-dropdown" 
                >
                  <NavDropdown.Item href="/treatment/laser">Laser Treatment</NavDropdown.Item>
                  <NavDropdown.Item href="/treatment/botox">Botox Treatment</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/about">About Us</Nav.Link>
            <Nav.Link as={Link} href="/career">Career</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right Side - Book a Consultant */}
        <Navbar.Collapse className="justify-content-end col-lg-4">
          <Nav>
            <Nav.Link as={Link} href="/book-consultant" className="nav-btn">
              Book a Consultant
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;