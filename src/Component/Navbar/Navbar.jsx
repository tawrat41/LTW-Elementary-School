import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Button } from 'react-bootstrap';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top py-3" id="school-nav">
      <Container>
        <Navbar.Brand href="#home" className="text-light">LEAD THE WAY Elementary School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#AboutUS"  className="text-light">About US</Nav.Link>
            <Nav.Link href="#classroom" className="text-light">Classroom</Nav.Link>
            <Nav.Link href="#teachers" className="text-light">Teachers</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
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
          <Button className='btn btn-success'>Admission</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;