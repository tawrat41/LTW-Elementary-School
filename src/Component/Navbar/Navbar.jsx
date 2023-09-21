/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll'; // Import ScrollLink and Element
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
          <Image id='nav-brand-img' src='/media/logo.png' width={60} className='mx-3' alt="Logo" />
          LEAD THE WAY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink to="banner" spy={true} smooth={true} offset={-100} duration={300}  activeClass="active-link">
              <Nav.Link id='nav-item' className="text-success">Home</Nav.Link>
            </ScrollLink>
            <ScrollLink to="about-us" spy={true} smooth={true} offset={-100} duration={300}  activeClass="active-link">
              <Nav.Link id='nav-item' className="text-success">About US</Nav.Link>
            </ScrollLink>
            <ScrollLink to="our-classroom" spy={true} smooth={true} offset={-60} duration={300}  activeClass="active-link">
              <Nav.Link id='nav-item' className="text-success">Classroom</Nav.Link>
            </ScrollLink>
            <ScrollLink to="our-teachers" spy={true} smooth={true} offset={-50} duration={300}  activeClass="active-link">
              <Nav.Link id='nav-item' className="text-success">Teachers</Nav.Link>
            </ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-50} duration={300}  activeClass="active-link">
              <Nav.Link id='nav-item' className="text-success">Contact</Nav.Link>
            </ScrollLink>
            <ScrollLink to="get-admission" spy={true} smooth={true} offset={-70} duration={300}  activeClass="active-link">
              <Nav.Link><Button id='nav-btn' className='btn btn-success mx-2'>Admission</Button></Nav.Link>
            </ScrollLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
