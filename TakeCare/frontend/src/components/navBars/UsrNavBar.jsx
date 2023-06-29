import React from 'react'
import '../styles/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function UsrNav() {
    return (    
    <Navbar className='navBar'  expand="lg">
      <Container >
        <Navbar.Brand href="/"><h1><strong>TakeCare</strong></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/signup-patient">registra paciente</Nav.Link>
            <Nav.Link href="/patient-check">Revision diaria Paciente</Nav.Link>
            <Nav.Link href="/cp">Panel de control</Nav.Link>
                    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UsrNav;