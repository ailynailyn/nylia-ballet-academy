import { React } from "react";
import Footer from "../../components/Footer";

import PopupModal from "../popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "../nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";

import "./QuickLinks.css";

function QuickLinks() {
  // var element = ;

  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(false);
  };

  return (
    <div class="main-container">
      <div className="main-img-bkg" id="quicklinks-section">
        <div className="main-title">
          <h1>QUICK LINKS</h1>
        </div>
        <div className="main-box">
          <h1 id="highlightTitle">SWAN LAKE</h1>
          <br></br>
          <h5>
            <b>FEBRUARY 1, 2025</b>
          </h5>
          <h5>7 pm at UTEP's Magoffin Auditorium</h5>

          <br></br>
          <a href="https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F">
            <NyliaButton label={"SWAN LAKE TICKETS"}></NyliaButton>
          </a>
        </div>
        <br></br>
        <br></br>
        <div className="main-box">
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b id="highlightTitle">ACADEMY</b>
              </Accordion.Header>
              <Accordion.Body>
                <a href="/enroll/#academy-uniform">
                  <NyliaButton label={"Academy Uniform"}></NyliaButton>
                </a>
                <br />
                <a href="/classes">
                  <NyliaButton label={"Our Classes"}></NyliaButton>
                </a>
                <br />
                <a href="/enroll/#academy-tuition">
                  <NyliaButton label={"Tuition"}></NyliaButton>
                </a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b id="highlightTitle">NYLIA BALLET COMPANY</b>
              </Accordion.Header>
              <Accordion.Body>
                <a href="/nyliaballetcompany">
                  <NyliaButton label={"Nylia Ballet Company"}></NyliaButton>
                </a>
                <br />
                <a href="/nyliaballetcompany/#nybc-section">
                  <NyliaButton
                    label={"Nylia Ballet Youth Company"}
                  ></NyliaButton>
                </a>
                <br />
                <a href="/performances">
                  <NyliaButton label={"Performances"}></NyliaButton>
                </a>
                <br />
                <a href="/companydancers">
                  <NyliaButton label={"Our dancers"}></NyliaButton>
                </a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b id="highlightTitle">IMPORTANT DATES</b>
              </Accordion.Header>
              <Accordion.Body>
                <a href="/calendar">
                  <NyliaButton label={"CALENDAR"}></NyliaButton>
                </a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default QuickLinks;