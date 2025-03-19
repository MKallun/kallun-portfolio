import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Mishaal Shariff Kallun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={50}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={50}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={50}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={5}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={50}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
