import { React } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import NyliaButton from "./nyliaButton/NyliaButton";

import "./NavBar.css";

import logo from "../assets/logos/NYLIA.png";
import logoTransparent from "../assets/logos/Nylia_Logo_500px.png";
import logoWhiteTransparent from "../assets/logos/Nylia_Logo_White_500px.png";
import logoShort from "../assets/logos/NYLIA.png";

// TODO AILYN: Navbar exit button https://codepen.io/ilkeryilmaz/pen/obEMNo

function NavBar() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    // let path = newPath;
    navigate(path);
  };

  var expand = false;

  function checkMatchInList(str, regexList) {
    for (let regex of regexList) {
      console.log(regex);
      if (regex.test(str)) {
        console.log("success");
        return true;
      }
    }
    return false;
  }

  /////////////////////////////////////////////////////
  // PAGES THAT NEED A WHITE LOGO MUST BE ADDED HERE //
  /////////////////////////////////////////////////////

  const whiteLogoPagesRegex = [
    new RegExp(".*/team/?$"),
    new RegExp(".*/performances/?$"),
    new RegExp(".*/performances/unanottesilenziosa2023/?$"),
    new RegExp(".*/performances/dracula2024/?$"),
    new RegExp(".*/performances/cinderella2024/?$"),
    new RegExp(".*/performances/swanlake2025/?$"),
    new RegExp(".*/nyliaballetyouthcompany/?$"),
  ];

  var logoUsed = checkMatchInList(useLocation().pathname, whiteLogoPagesRegex) //()
    ? // var logoUsed = true //checkMatchInList(useLocation().pathname, whiteLogoPagesRegex) //()
      logoWhiteTransparent
    : logoTransparent;

  return (
    <div class="navbar-container">
      <Navbar key={expand} expand={expand} className="mb-3" id="nylia-navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              id="nyliaNavbarLogoImg"
              className="nylia-logo"
              src={logoUsed}
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
                    src={logoWhiteTransparent}
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
                <Nav.Link href="/team" style={{ height: "10%" }}>
                  <h1>THE TEAM</h1>
                </Nav.Link>
                <Nav.Link href="/classes" style={{ height: "10%" }}>
                  <h1>CLASSES</h1>
                </Nav.Link>
                <Nav.Link href="/enroll" style={{ height: "10%" }}>
                  <h1>ENROLL</h1>
                </Nav.Link>
                <Nav.Link href="/scholarships" style={{ height: "10%" }}>
                  <h1>SCHOLARSHIPS</h1>
                </Nav.Link>
                <Nav.Link
                  href="/nyliaballetcompany"
                  style={{ height: "10%", width: "100%" }}
                >
                  <h1>NYLIA BALLET COMPANY</h1>
                </Nav.Link>
                <Nav.Link href="/performances" style={{ height: "10%" }}>
                  <h1>PERFORMANCES</h1>
                </Nav.Link>
                <Nav.Link href="/calendar" style={{ height: "10%" }}>
                  <h1>CALENDAR</h1>
                </Nav.Link>
                <Nav.Link href="/summerintensives" style={{ height: "10%" }}>
                  <h1>SUMMER INTENSIVES</h1>
                </Nav.Link>
                <Nav.Link href="/gallery" style={{ height: "10%" }}>
                  <h1>GALLERY</h1>
                </Nav.Link>
                <Nav.Link href="/contact" style={{ height: "10%" }}>
                  <h1>CONTACT</h1>
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
