import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Button, Image } from 'react-bootstrap';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top py-3" id="school-nav">
      <Container>
        <Navbar.Brand href="#home" id='nav-brand' className="text-success"><Image src='/src/media/logo.png' width={60} className='mx-3'></Image> LEAD THE WAY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id='nav-item' href="#home" className="text-success">Home</Nav.Link>
            <Nav.Link id='nav-item' href="#AboutUS"  className="text-success">About US</Nav.Link>
            <Nav.Link id='nav-item' href="#classroom" className="text-success">Classroom</Nav.Link>
            <Nav.Link id='nav-item' href="#teachers" className="text-success">Teachers</Nav.Link>
            <Nav.Link id='nav-item' href="#contact" className="text-success">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Button className='btn btn-success mx-2'>Admission</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;