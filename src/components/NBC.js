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

import "./NBC.css";

function NBC() {
  // var element = ;

  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(false);
  };

  return (
    <div class="main-container">
      <div className="main-img-bkg" id="mission-section">
        <div className="main-title">
          <h1>NYLIA BALLET COMPANY</h1>
        </div>
        <div className="main-box">
          <h1>Nylia Ballet's Performing Company</h1>
          <h2>Our Mission</h2>
          <p>
            <br />
            At Nylia Ballet Company, we inspire and cultivate a vibrant
            community of dancers and enthusiasts by embracing ballet's
            transformative power. Our Company consists of dancers who work
            full-time, non-dance jobs but still train professionally. We believe
            ballet is for everyone. Thus, by offering diverse artistic
            performances and outreach programs, we strive to share the beauty of
            dance and enrich the cultural heritage of the El Paso Borderland
            community. Our mission is to foster a community that reflects the
            diversity of our world, welcoming anyone who wishes to participate,
            regardless of age, skills, or experience.
          </p>
          <a href="/companydancers">
            <NyliaButton label={"Our Dancers"}></NyliaButton>
          </a>
          <p>
            <br />
            <br />
            Interested in pre-professional training? Join our Youth Company, who
            performs alongside Nylia Ballet Company!
          </p>
          <a href="/nyliaballetyouthcompany">
            <NyliaButton label={"Nylia Ballet Youth Company"}></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-img-bkg" id="nbc-section">
        <div className="main-box">
          <div className="main-img">
            <img
              src={nbcCinRehearsalsSm}
              srcSet={`${nbcCinRehearsalsSm} 300w, ${nbcCinRehearsalsMd} 768w, ${nbcCinRehearsalsLg} 1280w, ${nbcCinRehearsalsXL} 2000w`}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="El Paso Ballet Nylia Ballet Academy School for Classical Ballet performing in nylia ballet company productions"
            />
          </div>
          <h1 id="highlightTitle">NYLIA BALLET COMPANY</h1>
          <h2>Nylia Ballet's Performing Company</h2>

          <p>
            <br />
            Founded in 2024, the Company operates on a three-season calendar,
            each season providing the region with the highest-quality
            productions. Nylia Ballet Company (NBC) offers a repertoire of
            classical and contemporary ballets, with specialized instructors
            using Balanchine and Vaganova methods. As we embark on this
            programming, in our positionality as a Borderland City, we
            collaborate with other area performing arts and cultural groups,
            always centering educational outreach.
            <br /> <br />
            The El Paso-based Company instills impeccable technique through
            staple classical ballets and new premieres of contemporary works
            during its 2024 - 2025 season.
            <br /> <br />
            Our inclusive approach to classical ballet is a response to the
            current and historic barriers to excellent dance training in the
            larger field. The Nylia Ballet Company is countercultural to the
            elitism and exclusionary practices commonly seen in the world of
            ballet training. At the Nylia Ballet Academy, all dancers are valued
            and empowered to pursue their passion for dance.
            <br /> <br />
          </p>

          <NyliaButton
            label={"COMPANY MEMBER HANDBOOK"}
            link={nbcHandbook}
          ></NyliaButton>
          <br></br>
          <div className="shadow-box">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b id="highlightTitle">
                    NYLIA BALLET COMPANY - MEMBER EXCLUSIVES
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our Company would be nothing without our talented and
                    dedicated dancers. We take great joy in offering our Company
                    members the following incentives:
                    <br />
                    <u>TRAINING</u>
                    <ul>
                      <li>
                        Receive professionalization and mock training for
                        interviews, auditions, etc. <br />
                      </li>
                      <li>
                        Priority access to private training. <br />
                      </li>
                      <li>
                        Comprehensive ballet curriculum. <br />
                      </li>
                      <li>
                        Access to staff. <br />
                      </li>
                      <li>
                        A remarkable facility. <br />
                      </li>
                    </ul>
                    <u>PERFORMING</u>
                    <ul>
                      <li>
                        Gain access to a company staging new and notable
                        repertory.
                      </li>
                      <li>
                        Company dancers gain exposure to creative processes
                        through new original works while fine-tuning
                        foundational and historical classical ballets. <br />
                      </li>
                      <li>
                        Enhancing the accessibility of accessible high art
                        throughout the El Paso Community.
                      </li>
                    </ul>
                    <u>COMPETITION</u>
                    <ul>
                      <li>
                        Select and eligible Company members are invited to
                        compete in nationwide competitions, including the Youth
                        America Grand Prix (YAGP).
                      </li>
                    </ul>
                    <u>STIPENDS</u>
                    <br />
                    Nylia Ballet Company members are eligible to receive limited
                    stipends for exceptional candidates, including:
                    <ul>
                      <li>
                        Seasonal stipend for handmade Nylia Dancewear products.
                      </li>
                      <li>Pay after every performance.</li>
                    </ul>
                    <u>EXTRA PERKS</u>
                    <ul>
                      <li>
                        Participate in Nylia Ballet Company marketing
                        photoshoots.
                      </li>
                      <li>Receive free headshots.</li>
                      <li>
                        Are featured in every program for Nylia Ballet Company
                        productions, including headshot on Company page.
                      </li>
                      <li>5% discount on Academy tuition.</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b id="highlightTitle">REQUIREMENTS</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <li>Ages 18+</li>
                    <li>
                      Company members are evaluated each year on their
                      proactivity and dedication to furthering the mission of
                      the company and must sign a commitment contract.
                    </li>
                    <li>
                      Nylia Ballet Company members must be enrolled in 3-5
                      classes a week, specifics will be outlined in each
                      dancers’ offer letter.
                    </li>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b id="highlightTitle">FEES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <li>Company members are charged a $40 registration fee.</li>
                    <li>
                      Limited merit-based scholarships are available and
                      distributed in conjunction with acceptance.
                    </li>
                    <li>
                      Company members are not charged for time spent in
                      rehearsals. All non-Company members participating in a
                      Nylia Ballet performance and not enrolled in the Academy
                      are charged a drop-in fee of $15 per rehearsal.
                    </li>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <b id="highlightTitle">IMPORTANT DATES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <b>Nylia Ballet Company: 2025 - 2026 Season</b>
                    <ul>
                      <li>May 12th, 2025 - May 2nd, 2026</li>
                    </ul>
                    <b>Nylia Ballet Company Auditions</b>
                    <ul>
                      <li>
                        April 27th, 2025 at 1:30 pm - Nylia Ballet Academy
                      </li>
                    </ul>
                    <b>The Little Mermaid</b>
                    <ul>
                      <li>June - September 2025</li>
                    </ul>
                    <b>Swan Lake</b>
                    <ul>
                      <li>October 2025 - January 2026</li>
                    </ul>
                    <b>Alice in Wonderland</b>
                    <ul>
                      <li>February - April 2026</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <NyliaButton
            label={"Apply Now"}
            link="https://form.jotform.com/250844795279170"
          ></NyliaButton>
        </div>
      </div>
      <div className="main-img-bkg" id="auditions-nbc">
        <div className="main-box">
          <h1>NYLIA BALLET COMPANY AUDITIONS</h1>
          <h2>Join the Nylia Ballet Company!</h2>
          <p>
            <br></br>
            Join us for auditions! We are accepting dancers of all levels of
            experience, from absolute beginner to advanced!
          </p>
          <p>
            {" "}
            <hr></hr>
            <br />
            <b>NYLIA BALLET COMPANY AUDITIONS</b>
            <br />
            April 27, 2025
            <br />
            1:30 - 3:30 pm
            <br /> <br />
            <hr></hr>
            <b>AUDITION REQUIREMENTS</b>
            <br />
            <li>A $10 Company audition fee is due prior to the audition.</li>
            <br />
          </p>

          <NyliaButton
            label={"Register for Company Auditions"}
            link="https://form.jotform.com/250844795279170"
          ></NyliaButton>
        </div>
      </div>

      <div className="main-img-bkg-2" id="nbc-footer">
        <div className="main-box centered">
          <p>
            At Nylia Ballet Company, we believe in the power of dance to
            inspire, uplift, and connect individuals across all boundaries. Our
            goal is to cultivate a community of dancers and enthusiasts who
            share a passion for artistic excellence and cultural enrichment.
            <br />
            <br />
            With a dedication to artistic integrity, social responsibility, and
            collaboration, Nylia Ballet Company enriches the lives of our
            audience members, performers, and community alike. Together we
            create moments of beauty, inspiration, and joy that resonate far
            beyond the stage.
            <br />
            <br />
            For more information please contact us at{" "}
            <b>info@nyliaballetacademy.com</b>.<br></br>
            <br></br>
          </p>
          <h3>
            Nylia Ballet Company<br></br> Illuminating the El Paso community,
            one dance at a time.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NBC;
