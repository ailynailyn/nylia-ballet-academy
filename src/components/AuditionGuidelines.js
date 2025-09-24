import { React } from "react";

import adultBalletSm from "../assets/summerIntensivesPage/claudia-and-linda-300.jpg";
import adultBalletMd from "../assets/summerIntensivesPage/claudia-and-linda-768.jpg";
import adultBalletLg from "../assets/summerIntensivesPage/claudia-and-linda-1280.jpg";
import adultBalletXL from "../assets/summerIntensivesPage/claudia-and-linda-2000.jpg";
import Footer from "../components/Footer";

import nybcAlondraSm from "../assets/nybc/nybc-alondra-300.jpg";
import nybcAlondraMd from "../assets/nybc/nybc-alondra-768.jpg";
import nybcAlondraLg from "../assets/nybc/nybc-alondra-1280.jpg";
import nybcAlondraXL from "../assets/nybc/nybc-alondra-2000.jpg";
import nbcCinRehearsalsSm from "../assets/nbc/nbcCinRehearsals-300.jpg";
import nbcCinRehearsalsMd from "../assets/nbc/nbcCinRehearsals-768.jpg";
import nbcCinRehearsalsLg from "../assets/nbc/nbcCinRehearsals-1280.jpg";
import nbcCinRehearsalsXL from "../assets/nbc/nbcCinRehearsals-2000.jpg";
import nbcHandbook from "../assets/nbc/Nylia Ballet Company Handbook 2024-2025.pdf";
import nbycHandbook from "../assets/nybc/Nylia Ballet Youth Company Handbook 2024-2025.pdf";

import NyliaButton from "./nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";

import "./AuditionGuidelines.css";

function AuditionGuidelines() {
  return (
    <div class="main-container">
      <div className="main-img-bkg" id="mission-section">
        <div className="main-title">
          <h1>AUDITION GUIDELINES</h1>
        </div>
      </div>
      <div className="main-img-bkg" id="nbc-section">
        <div className="main-box">
          <h1 id="highlightTitle">PREPARING TO TAKE THE STAGE</h1>
          <h2>Audition Information & Requirements</h2>

          <p>
            <br />
            We are excited to welcome dancers of all ages and experience levels
            to audition for programs at Nylia Ballet Academy. Please read
            through the following general guidelines to ensure a smooth and
            successful audition experience.
            <br /> <br />
          </p>

          <br></br>
          <div className="shadow-box">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b id="highlightTitle">ARRIVAL & CHECK-IN</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    All dancers should arrive during the designated audition
                    check-in time. This allows enough time to register, pay any
                    remaining audition fees, and properly warm up before the
                    audition begins. Late arrivals may not be able to
                    participate, so we strongly encourage arriving on time.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b id="highlightTitle">ATTIRE</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Dancers are expected to present themselves professionally at
                    auditions.
                    <ul>
                      <li>
                        Hair must be neatly styled and secured away from the
                        face in a classical ballet bun or equivalent tidy style.
                      </li>
                      <li>
                        Please wear clean, form-fitting dancewear that allows
                        instructors to clearly see alignment and movement.
                      </li>
                    </ul>
                    You may choose from one of the following audition outfits:
                    <ul>
                      <li>
                        Option 1: Solid black leotard, ballet pink or nude
                        tights, matching ballet slippers. Pointe shoes if
                        applicable.
                      </li>
                      <li>
                        Option 2: Fitted white t-shirt, black tights,
                        appropriate ballet slippers. All attire should be free
                        of logos or patterns.
                      </li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b id="highlightTitle">WHAT TO BRING</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <ul>
                      <li>A water bottle</li>
                      <li>Clean dancewear</li>
                      <li>A positive attitude</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <b id="highlightTitle">COMMON QUESTIONS</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <b>How do I register for an audition?</b>
                    <br></br>
                    You can pre-register using the registration link listed on
                    the audition page, or simply come in during the check-in
                    time and we will help you get settled. We recommend
                    registering early for a smoother experience.
                    <br></br>
                    <br></br>
                    <b>Is there an audition fee?</b>
                    <br></br>
                    Yes, all auditions require a fee. Please refer to the
                    audition page for current fee information. Payments can be
                    made through our Wellness Living system or in person at the
                    front desk. All fees must be paid prior to the audition,
                    either ahead of time or during the designated check-in
                    period.
                    <br></br>
                    <br></br>
                    <b>How long is the audition?</b>
                    <br></br>
                    Audition length varies by level and age group, typically
                    ranging from 30 minutes to 2 hours.
                    <br></br>
                    <br></br>
                    <b>What level should I audition for?</b>
                    <br></br>
                    <ul>
                      <li>Youth auditions are divided by age groups.</li>
                      <li>
                        Adult dancers may choose between:
                        <ul>
                          <li>Absolute Beginner – Beginner</li>
                          <li>Intermediate – Advanced</li>
                        </ul>
                      </li>
                    </ul>
                    Please refer to the audition listing for specific
                    breakdowns.
                    <br></br>
                    <br></br>
                    <b>Is pointe work required?</b>
                    <br></br>
                    If you are currently on pointe, there will be a pointe
                    section as part of your audition. However, pointe work is
                    not required to participate in our productions or companies.
                    <br></br>
                    <br></br>
                    <b>What if I’m injured or recovering?</b>
                    <br></br>
                    If you are currently on pointe, there will be a pointe
                    section as part of your audition. However, pointe work is
                    not required to participate in our productions or companies.
                    <br></br>
                    <br></br>
                    <b>What if I’m injured or recovering?</b>
                    <br></br>
                    If you are currently injured or recovering, please inform
                    the audition instructor before the audition begins. We
                    understand that every dancer's journey is unique, and we’ll
                    make note of the situation and adjust as needed. <br></br>
                    <br></br>
                    <b>Can parents or guardians watch the audition?</b>
                    <br></br>
                    Auditions are conducted privately. Parents and guardians are
                    welcome to wait in our front lobby or backyard area during
                    the session. <br></br>
                    <br></br>
                    <b>When will I hear back?</b> <br></br>
                    Audition results are typically shared within 1–2 weeks after
                    your audition. Please make sure your contact information is
                    up to date so we can reach you promptly. <br></br> <br></br>
                    <b>Do you offer scholarships or financial aid? </b>
                    <br></br>
                    Yes! We are proud to offer both scholarships and financial
                    assistance to students in our academy. Visit our
                    Scholarships page for more details.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AuditionGuidelines;
