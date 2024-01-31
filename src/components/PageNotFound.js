import { React } from "react";

import PopupModal from "./popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import Nav from "react-bootstrap/Nav";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div class="pagenotfound-container">
      <div className="notfound-description">
        <p>Sorry! We couldn't find that page.</p>
      </div>
      <div className="description">
        <div className="home-page-button">
          <Nav.Link href="/" style={{ height: "16.66%" }}>
            <NyliaButton label={"Nylia Ballet Academy Homepage"}></NyliaButton>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
