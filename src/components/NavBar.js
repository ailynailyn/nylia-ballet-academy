import { React } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import NyliaButton from "./nyliaButton/NyliaButton";

import "./NavBar.css";

import logo from "../assets/NYLIA.png";
import logoTransparent from "../assets/Nylia_Logo_500px.png";
import logoShort from "../assets/NYLIA.png";

// TODO AILYN: Navbar exit button https://codepen.io/ilkeryilmaz/pen/obEMNo

function NavBar() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    // let path = newPath;
    navigate(path);
  };

  var expand = false;

  return (
    <div class="navbar-container">
      <Navbar key={expand} expand={expand} className="mb-3" id="nylia-navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="nylia-logo"
              src={logoTransparent}
              alt="Nylia Ballet Academy Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <a href="/">
                  <img
                    className="nylia-logo"
                    src={logoTransparent}
                    width="400px"
                    height="400px"
                    alt="Nylia Ballet Academy Logo"
                  ></img>
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                id="navigation-body"
                className="justify-content-end flex-grow-1 pe-3"
                style={{ height: "100%" }}
              >
                <Nav.Link href="/team" style={{ height: "11.11%" }}>
                  <NyliaButton label={"THE TEAM"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/classes" style={{ height: "11.11%" }}>
                  <NyliaButton label={"CLASSES"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/enroll" style={{ height: "11.11%" }}>
                  <NyliaButton label={"ENROLL"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/scholarships" style={{ height: "11.11%" }}>
                  <NyliaButton label={"SCHOLARSHIPS"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/performances" style={{ height: "11.11%" }}>
                  <NyliaButton label={"PERFORMANCES"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/academyevents" style={{ height: "11.11%" }}>
                  <NyliaButton label={"ACADEMY EVENTS"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/summerintensives" style={{ height: "11.11%" }}>
                  <NyliaButton label={"SUMMER INTENSIVES"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/gallery" style={{ height: "11.11%" }}>
                  <NyliaButton label={"GALLERY"}></NyliaButton>
                </Nav.Link>
                <Nav.Link href="/contact" style={{ height: "11.11%" }}>
                  <NyliaButton label={"CONTACT"}></NyliaButton>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
