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
import competitionHandbook from "../assets/competitions/CompetitionHandbook25-26.pdf";

import NyliaButton from "./nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";

import "./NBC.css";

function NBYC() {
  var jotformLink = "https://form.jotform.com/252657673602159";

  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(false);
  };

  return (
    <div class="main-container" id="nbyc">
      <div className="main-img-bkg" id="mission-section">
        <div className="main-title">
          <h1>NYLIA BALLET YOUTH COMPANY</h1>
        </div>
        <div className="main-box">
          <h1>Nylia Ballet's Youth Performing Company</h1>
          <h2>Our Mission</h2>
          <p>
            <br />
            At Nylia Ballet Youth Company, we inspire and cultivate a vibrant
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
          {/* <a href="/companydancers">
            <NyliaButton label={"Our Dancers"}></NyliaButton>
          </a> */}
          <p>
            <br />
            <br />
            Turning 18? Join our parent company, Nylia Ballet Company!
          </p>
          <a href="/nyliaballetcompany">
            <NyliaButton label={"Nylia Ballet Company"}></NyliaButton>
          </a>
        </div>
      </div>

      <div className="main-img-bkg" id="nybc-section">
        <div className="main-box">
          <div className="main-img">
            <img
              src={nybcAlondraSm}
              srcSet={`${nybcAlondraSm} 300w, ${nybcAlondraMd} 768w, ${nybcAlondraLg} 1280w, ${nybcAlondraXL} 2000w`}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="El Paso Ballet Nylia Ballet Academy School for Classical Ballet performing in nylia ballet company productions"
            />
          </div>
          <h1 id="highlightTitle">NYLIA BALLET YOUTH COMPANY</h1>

          <p>
            <br />
            Through collaborations that expand the accessibility and
            appreciation of the arts, we cultivate a rich tapestry of creativity
            within our community. We believe in providing the highest level of
            classical ballet training and performance opportunities, nurturing
            each individual to reach their unique potential in an environment of
            self-discipline, creativity, and respect. Nylia Ballet Youth Company
            dancers perform throughout the year, on our main stage, at outreach
            events, festivals, workshops and other events around the El Paso
            area and beyond. Weekly schedules will include company classes,
            rehearsals, coaching, career/professionalism counseling and
            training, resume/audition packet creation, technique class, pointe,
            variations, partnering, and modern, as well as other classes,
            performances, appearances and events.
            <br /> <br />
            <NyliaButton
              label={"YOUTH COMPANY MEMBER HANDBOOK"}
              link={nbycHandbook}
            ></NyliaButton>
            <br></br>
            <div className="shadow-box">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b id="highlightTitle">
                      NYLIA BALLET YOUTH COMPANY - MEMBER EXCLUSIVES
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
                          In all our performances, young dancers are given
                          opportunities to work with professionals to learn
                          about the world of classical ballet and performing.{" "}
                          <br />
                        </li>
                      </ul>
                      <u>COMPETITION</u>
                      <ul>
                        <li>
                          Select and eligible Youth Company members are invited
                          to compete in nationwide competitions, including YAGP.
                        </li>
                      </ul>
                      <u>EXTRA PERKS</u>
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
                        Nylia Ballet Youth Company members must be enrolled in
                        2-5 classes a week. Specifics will be outlined in offer
                        letter determined by age and skill level.
                      </li>
                      <li>
                        All Nylia Ballet Youth Company members must take Company
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
                      In an effort to keep tuition costs consistent, additional
                      fees are required in order to produce and present high
                      quality productions for Youth company dancers to
                      participate in.
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
                        Ballet Youth Company fee of $33.
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
                      <b>Nylia Ballet Youth Company: 2025 - 2026 Season</b>
                      <ul>
                        <li>May 12th, 2025 - May 2nd, 2026</li>
                      </ul>
                      <b>Nylia Ballet Youth Company Auditions</b>
                      <ul>
                        <li>
                          April 27th, 2025 at 11:00 am - Nylia Ballet Academy
                        </li>
                      </ul>
                      <b>The Little Mermaid</b>
                      <ul>
                        <li>June - September 2025</li>
                      </ul>
                      <b>Nylia Ballet Youth Company Trainee Auditions</b>
                      <ul>
                        <li>
                          September 28th, 2025 at 10:00 am - Nylia Ballet
                          Academy
                        </li>
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
          </p>
          <NyliaButton label={"Apply Now"} link={jotformLink}></NyliaButton>
        </div>
      </div>
      <div className="main-img-bkg" id="auditions-nbc">
        <div className="main-box">
          <h1>YOUTH COMPANY AUDITIONS</h1>
          <h2>Join the Nylia Ballet Youth Company!</h2>
          <p>
            <br /> <hr></hr>
            <b>NYLIA BALLET YOUTH COMPANY AUDITIONS</b>
            <br />
            April 27, 2025
            <br />
            <br />
            11:00 am - 12:30 pm
            <br /> <hr></hr>
            <b>NYLIA BALLET YOUTH COMPANY TRAINEE AUDITIONS</b>
            <br />
            September 28, 2025
            <br />
            <br />
            10:00 am - 12:30 pm
            <hr></hr>
            <b>AUDITION REQUIREMENTS</b>
            <br />
            <li>
              A $10 Youth Company audition fee is due prior to the audition.
            </li>
            <li>
              A <b>mandatory</b> parent meeting will take place at Nylia Ballet
              Academy during the audition from 12:00 pm - 12:30 pm.
            </li>
            <br />
          </p>

          <NyliaButton
            label={"Register for Youth Company Auditions"}
            link={jotformLink}
          ></NyliaButton>
        </div>
      </div>
      <div className="main-img-bkg" id="nbc-section">
        <div className="main-box">
          <h1 id="highlightTitle">CLASSICAL BALLET COMPETITIONS</h1>
          <h2>Nylia Ballet Company's Competition Team</h2>

          <p>
            <br />
            The Nylia Ballet Youth Company’s Competition Program is comprised of
            select Nylia Ballet Company & Youth Company students chosen to
            represent the Company with excellence and professionalism. Dancers
            are invited to join based on their level, age, and their ability to
            meet the technical, physical, and emotional standards required for
            competitive performance. These dedicated students participate in
            focused one-on-one and group coaching sessions with experienced
            faculty, designed to enhance their technique, refine their artistry,
            and build performance confidence under high-pressure conditions.
            Through this rigorous training process, participants prepare to
            compete at renowned regional and national ballet competitions,
            gaining invaluable stage experience and exposure to the broader
            dance community.
            <br /> <br />
          </p>

          <NyliaButton
            label={"COMPETITION PROGRAM HANDBOOK"}
            link={competitionHandbook}
          ></NyliaButton>
          <br></br>
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

export default NBYC;
