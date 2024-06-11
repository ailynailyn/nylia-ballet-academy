import { React } from "react";

import adultBalletSm from "../assets/summerIntensivesPage/claudia-and-linda-300.jpg";
import adultBalletMd from "../assets/summerIntensivesPage/claudia-and-linda-768.jpg";
import adultBalletLg from "../assets/summerIntensivesPage/claudia-and-linda-1280.jpg";
import adultBalletXL from "../assets/summerIntensivesPage/claudia-and-linda-2000.jpg";

import nybcAlondraSm from "../assets/nybc/nybc-alondra-300.jpg";
import nybcAlondraMd from "../assets/nybc/nybc-alondra-768.jpg";
import nybcAlondraLg from "../assets/nybc/nybc-alondra-1280.jpg";
import nybcAlondraXL from "../assets/nybc/nybc-alondra-2000.jpg";
import nbcCinRehearsalsSm from "../assets/nbc/nbcCinRehearsals-300.jpg";
import nbcCinRehearsalsMd from "../assets/nbc/nbcCinRehearsals-768.jpg";
import nbcCinRehearsalsLg from "../assets/nbc/nbcCinRehearsals-1280.jpg";
import nbcCinRehearsalsXL from "../assets/nbc/nbcCinRehearsals-2000.jpg";

import PopupModal from "./popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
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
            At Nylia Ballet Company, we aspire to inspire and cultivate a
            vibrant community of dancers and enthusiasts by embracing ballet's
            transformative power. Our Company consists of dancers who work
            full-time, non-dance jobs but still train professionally. We believe
            ballet is for everyone. Thus, by offering diverse artistic
            performances and outreach programs, we strive to share the beauty of
            dance and enrich the cultural heritage of the El Paso Borderland
            community. Our mission is to foster a community that reflects the
            diversity of our world, welcoming anyone who wishes to participate,
            regardless of age, skills, or experience.
          </p>
          <a onClick={() => goToSection("auditions-nbc")}>
            <NyliaButton label={"Join the company"}></NyliaButton>
          </a>
          <p>
            <br />
            <br />
            Interested in pre-professional training? Join our Youth Company, who
            performs alongside Nylia Ballet Company!
          </p>
          <a onClick={() => goToSection("nybc-section")}>
            <NyliaButton label={"Nylia Youth Ballet Company"}></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-img-bkg" id="nbc-section">
        <div className="main-box">
          <img
            src={nbcCinRehearsalsSm}
            srcSet={`${nbcCinRehearsalsSm} 300w, ${nbcCinRehearsalsMd} 768w, ${nbcCinRehearsalsLg} 1280w, ${nbcCinRehearsalsXL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Adult ballett students for Nylia Ballet Academy"
          />
          <h1 id="highlightTitle">NYLIA BALLET COMPANY</h1>
          <h2>Nylia Ballet's Performing Company</h2>

          <p>
            <br />
            Founded in 2024, the Company operates on a three-season calendar,
            each season providing the region with the highest-quality
            productions. NBC offers a repertoire of classical and contemporary
            ballets, with specialized instructors using Balanchine and Vaganova
            methods. As we embark on this programming, in our positionality as
            Borderland City, we collaborate with other area performing arts and
            cultural groups, always centering educational outreach.
            <br /> <br />
            Newly led by Artistic Director Grace McCoy, who has trained at the
            Tulsa Ballet, The Kirov Academy, Boston Ballet, Ellison Ballet, and
            the Marais Ballet School in Paris, the El Paso-based Company looks
            to instill impeccable technique through staple classical and
            contemporary works during its 2024- 2025 season. We look forward to
            demonstrating our focus in our inaugural performance of Dracula,
            scheduled for Fall 2024.
            <br /> <br />
            In all of our endeavors, we are hyperaware of the historical
            violence that has plagued the ballet world and actively work to
            rectify injustices. Through our inclusive approach, we seek to
            create a safe and supportive environment where everyone feels valued
            and empowered to pursue their passion for dance.
            <br /> <br />
          </p>
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
                        Comprehensive curriculum. <br />
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
                        Select Company members are invited to compete in
                        nationwide competitions, including the Youth America
                        Grand Prix (YAGP).
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
                      Nylia Ballet Company members must be enrolled in at least
                      X classes a week - depending on dancer individually.
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
                    <b>Nylia Ballet Company: 2024 - 2025 Season</b>
                    <ul>
                      <li>August 3rd, 2024 - June 20, 2025</li>
                    </ul>
                    <b>Nylia Ballet Company Auditions</b>
                    <ul>
                      <li>
                        August 3rd, 2024 at 1:30 pm - Nylia Ballet Academy
                      </li>
                    </ul>
                    <b>Dracula</b>
                    <ul>
                      <li>August - October 2024</li>
                    </ul>
                    <b>Swan Lake</b>
                    <ul>
                      <li>October 2024 - February 2025</li>
                    </ul>
                    <b>Sleeping Beauty</b>
                    <ul>
                      <li>February - June 2025</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <a href="">
            <NyliaButton label={"Apply Now"}></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-img-bkg" id="auditions-nbc">
        <div className="main-box">
          <h1>AUDITIONS</h1>
          <h2>Join the Company</h2>
          <p>
            <br />
            Nylia Ballet Company is thrilled to present Dracula this Fall of
            2024! Company Auditions will be at Nylia Ballet Academy following
            Dracula auditions.
            <br /> <br />
            <b>NYLIA BALLET COMPANY AUDITIONS</b>
            <br />
            August 3rd, 2024
            <br />
            1:30 - 2:30 pm
            <br /> <br />
            <b>NYLIA YOUTH BALLET COMPANY AUDITIONS</b>
            <br />
            August 3rd, 2024
            <br />
            10:30 am - 11:30 pm
            <br /> <br />
            <b>AUDITION REQUIREMENTS</b>
            <br />
            <li>A $20 audition fee is due prior to the Company audition.</li>
            <br />
          </p>

          <a href="">
            <NyliaButton label={"Apply Now"}></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-img-bkg" id="nybc-section">
        <div className="main-box">
          <img
            src={nybcAlondraSm}
            srcSet={`${nybcAlondraSm} 300w, ${nybcAlondraMd} 768w, ${nybcAlondraLg} 1280w, ${nybcAlondraXL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Adult ballett students for Nylia Ballet Academy"
          />
          <h1 id="highlightTitle">NYLIA YOUTH BALLET COMPANY</h1>
          <h2>July 15 - 19</h2>

          <p>
            <br />
            Through collaborations that expand the accessibility and
            appreciation of the arts, we cultivate a rich tapestry of creativity
            within our community. We believe in providing the highest level of
            classical ballet training and performance opportunities, nurturing
            each individual to reach their unique potential in an environment of
            self-discipline, creativity, and respect. Nylia Youth Ballet Company
            dancers perform throughout the year, on our main stage, at outreach
            events, festivals, workshops and other events around the El Paso
            area and beyond. Weekly schedules will include company classes,
            rehearsals, coaching, career/professionalism counseling and
            training, resume/audition packet creation, technique class, pointe,
            variations, partnering, and modern, as well as other classes,
            performances, appearances and events.
            <br /> <br />
            <div className="shadow-box">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b id="highlightTitle">
                      NYLIA YOUTH BALLET COMPANY - MEMBER EXCLUSIVES
                    </b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
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
                          Comprehensive curriculum. <br />
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
                          In all our performances, young dancers are given
                          opportunities to work with professionals to learn
                          about the world of classical ballet and performing.{" "}
                          <br />
                        </li>
                      </ul>
                      <u>COMPETITION</u>
                      <ul>
                        <li>
                          Select Youth Company members are invited to compete in
                          nationwide competitions, including YAGP.
                        </li>
                      </ul>
                      <u>Extra Perks</u>
                      <ul>
                        <li>
                          Participate in Nylia Ballet Company marketing
                          photoshoots. <br />
                        </li>
                        <li>
                          Headshot featured in every program for Nylia Ballet
                          Company productions. <br />
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
                      <li>Ages 7 - 18</li>
                      <li>
                        Must be enrolled in at least X classes a week at Nylia
                        Ballet Academy - depending on dancer individually.
                      </li>
                      <li>
                        All Nylia Youth Ballet Company members must take Company
                        class once a week.
                      </li>
                      <li>
                        As leaders of the school, company members are expected
                        to take part in assistant teaching younger levels &
                        costume/set-work as needed.
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
                      Company fees help the company fulfill its commitment to
                      pay for the costs of our operating budget, performance
                      expenses, etc. As such, they are vitally important to the
                      existence of our organization.
                      <br />
                      <br />
                      <li>
                        Youth Company members receive a 5% discount on their
                        tuition for Nylia Ballet Academy.
                      </li>
                      <li>
                        Company members are not charged for time spent in
                        rehearsals.
                      </li>
                      <li>
                        Company members are charged a $40 registration fee.
                      </li>
                      <li>
                        Company members are required to pay a monthly Nylia
                        Youth Ballet Company fee of $33.
                      </li>
                      <li>
                        Limited merit-based scholarships are available and
                        distributed in conjunction with acceptance.
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
                      <b>Nylia Youth Ballet Company: 2024 - 2025 Season</b>
                      <ul>
                        <li>August 3rd, 2024 - June 20, 2025</li>
                      </ul>
                      <b>Nylia Youth Ballet Company Auditions</b>
                      <ul>
                        <li>
                          August 3rd, 2024 at 10:30 am - Nylia Ballet Academy
                        </li>
                      </ul>
                      <b>Dracula</b>
                      <ul>
                        <li>August - October 2024</li>
                      </ul>
                      <b>Swan Lake</b>
                      <ul>
                        <li>October 2024 - February 2025</li>
                      </ul>
                      <b>Sleeping Beauty</b>
                      <ul>
                        <li>February - June 2025</li>
                      </ul>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </p>
          <a href="">
            <NyliaButton label={"Apply Now"}></NyliaButton>
          </a>
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
            collaboration, Nylia Ballet Company seeks to enrich the lives of our
            audience members, performers, and community alike. Together we
            aspire to create moments of beauty, inspiration, and joy that
            resonate far beyond the stage.
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
    </div>
  );
}

export default NBC;
