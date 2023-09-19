/* eslint-disable no-unused-vars */
// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import './Navbar.css';

function CollapsibleExample() {
  // Define state variables to track scroll position and navbar style
  const [scrolled, setScrolled] = useState(false);

  // Add an event listener to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`sticky-top ${scrolled ? 'scrolled' : ''}`}
      id="school-nav"
    >
      <Container>
        <Navbar.Brand href="#home" id="nav-brand" className="text-success">
          <Image id='nav-brand-img' src='/src/media/logo.png' width={60} className='mx-3' alt="Logo" />
          LEAD THE WAY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id='nav-item' href="#home" className="text-success">Home</Nav.Link>
            <Nav.Link id='nav-item' href="#AboutUS"  className="text-success">About US</Nav.Link>
            <Nav.Link id='nav-item' href="#classroom" className="text-success">Classroom</Nav.Link>
            <Nav.Link id='nav-item' href="#teachers" className="text-success">Teachers</Nav.Link>
            <Nav.Link id='nav-item' href="#contact" className="text-success">Contact</Nav.Link>
            <Button id='nav-btn' className='btn btn-success mx-2'>Admission</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
