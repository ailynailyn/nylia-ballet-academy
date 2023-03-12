import { React } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./NavBar.css";

import logo from "../assets/nylia-logo.png";
import logoShort from "../assets/nylia-logo-short.png";

function NavBar() {
  var expand = false;
  return (
    <div class="navbar-container">
      <Navbar key={expand} expand={expand} className="mb-3" id="nylia-navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logoShort}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo}></img>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{ height: "100%" }}
              >
                <Nav.Link href="/team">Team</Nav.Link>
                <Nav.Link href="/schedule">Schedule</Nav.Link>
                <NavDropdown
                  title="Enroll"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="/enroll">Enroll</NavDropdown.Item>
                  <NavDropdown.Item href="/tuition">Tuition</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
