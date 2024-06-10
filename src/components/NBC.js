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

import "./NBC.css";

function NBC() {
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
            vibrant community of dancers and enthusiasts by embracing the
            transformative power of ballet. Our company consists of dancers who
            work full-time, non-dance jobs, but we train in a professional
            environment. By offering diverse artistic performance and outreach
            programs, we strive to share the beauty of dance and enrich the
            cultural heritage of the El Paso Borderland community. We believe
            that ballet is for everyone, and our mission is to foster a
            community that reflects the diversity of our world, welcoming anyone
            who wishes to participate, regardless of age, skills, or experience.
          </p>
          <a href="https://form.jotform.com/241348049445156">
            <NyliaButton label={"Join the company"}></NyliaButton>
          </a>
          <p>
            <br />
            <br />
            Interested in doing this for your kids? Sign them up for the youth
            company
          </p>
          <a href="https://form.jotform.com/241348049445156">
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
            Founded in 2024, Nylia Ballet's talented company of dancers perform
            a year long three-program season, providing the region with the
            highest quality dance performances. NBC offers a wide repertory from
            traditional classics to creative contemporary ballets. The company
            also collaborates with other area performing arts groups and is
            active in educational outreach.
            <br /> <br />
            Newly led by Artistic Director Grace McCoy, the El Paso-based
            company will present stunning technique, impressive range, and
            iconic contemporary works during their 2024-2025 season. The company
            will make their first public appearance during their Fall 2024
            performance of Dracula.
            <br /> <br />
            We acknowledge and strive to rectify the injustices and violence
            that have historically plagued the ballet world. Through our
            inclusive approach, we seek to create a safe and supportive
            environment where everyone feels valued and empowered to pursue
            their passion for dance.
            <br /> <br />
            <div className="shadow-box">
              <b id="highlightTitle">
                NYLIA BALLET COMPANY - MEMBER EXCLUSIVES
              </b>
              <br></br>
              We know that our dancers are busy working full-time jobs, so we
              offer the following incentives in order to:
              <br />
              <u>TRAINING</u>
              <ul>
                <li>
                  Receive professionalization and mock training for interviews,
                  auditions, etc. <br />
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
                  Gain access to a company staging new and notable repertory.
                </li>
                <li>
                  Company dancers gain exposure to creative processes through
                  new original works while fine-tuning foundational and
                  historical classical ballets. <br />
                </li>
              </ul>
              <u>COMPETITION</u>
              <ul>
                <li>
                  Select Company members are invited to compete in nationwide
                  competitions, including YAGP.
                </li>
              </ul>
              <u>STIPENDS</u>
              <br />
              Nylia Ballet Company members are eligible to receive limited
              stipends for exceptional candidates, including:
              <ul>
                <li>Seasonal stipend for handmade Nylia Dancewear products.</li>
                <li>Pay after every performance.</li>
              </ul>
              <u>EXTRA PERKS</u>
              <ul>
                <li>
                  Participate in Nylia Ballet Company marketing photoshoots.
                </li>
                <li>Receive free headshots.</li>
                <li>
                  Are featured in every program for Nylia Ballet Company
                  productions, including headshot on Company page.
                </li>
                <li>5% discount on Academy tuition.</li>
              </ul>
              <p>
                <b id="highlightTitle">REQUIREMENTS</b>
                <li>Ages 18+</li>
                <li>
                  Company members are evaluated each year on their proactivity
                  and dedication to furthering the mission of the company and
                  must sign a commitment contract.
                </li>
                <li>
                  Nylia Ballet Company members must be enrolled in at least X
                  classes a week - depending on dancer individually.
                </li>
                <br />
                <b id="highlightTitle">FEES</b>
                <br />
                Company members are charged a $40 registration fee.
                <br /> <br />
                <li>
                  Limited merit-based scholarships are available and distributed
                  in conjunction with acceptance.
                </li>
                <br />{" "}
                <li>
                  Company members are not charged for time spent in rehearsals.{" "}
                </li>
                <br />
                <b id="highlightTitle">IMPORTANT DATES</b> <br />
                <b>Nylia Ballet Company: 2024 - 2025 Season</b>
                <ul>
                  <li>August 3rd, 2024 - June 20, 2025</li>
                </ul>
                <b>Nylia Ballet Company Auditions</b>
                <ul>
                  <li>August 3rd, 2024 at 1:30 pm - Nylia Ballet Academy</li>
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
              <a href="">
                <NyliaButton label={"Apply Now"}></NyliaButton>
              </a>
            </div>
          </p>
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
            Nylia Ballet Company is thrilled to present Dracula this Fall 2024!
            Company Auditions will be at Nylia Ballet Academy following Dracula
            auditions.
            <br /> <br />
            <b>NYLIA BALLET COMPANY AUDITIONS</b>
            <br />
            August 3rd, 2024
            <br />
            8:00 am - 2:00 pm
            <br /> <br />
            <b>NYLIA YOUTH BALLET COMPANY AUDITIONS</b>
            <br />
            August 3rd, 2024
            <br />
            8:00 am - 2:00 pm
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
            <b id="highlightTitle">
              NYLIA YOUTH BALLET COMPANY - MEMBER EXCLUSIVES
            </b>
            <br />
            <u>TRAINING</u>
            <ul>
              <li>
                Receive professionalization and mock training for interviews,
                auditions, etc. <br />
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
                Gain access to a company staging new and notable repertory.
              </li>
              <li>
                Company dancers gain exposure to creative processes through new
                original works while fine-tuning foundational and historical
                classical ballets. <br />
              </li>
              <li>
                In all our performances, young dancers are given opportunities
                to work with professionals to learn about the world of classical
                ballet and performing. <br />
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
                Participate in Nylia Ballet Company marketing photoshoots.{" "}
                <br />
              </li>
              <li>
                Headshot featured in every program for Nylia Ballet Company
                productions. <br />
              </li>
              <li>5% discount on Academy tuition.</li>
            </ul>
            <b id="highlightTitle">REQUIREMENTS</b>
            <br />
            <li>Ages 7 - 18</li>
            <li>
              Must be enrolled in at least X classes a week at Nylia Ballet
              Academy - depending on dancer individually.
            </li>
            <li>
              All Nylia Youth Ballet Company members must take Company class
              once a week.
            </li>
            <li>
              As leaders of the school, company members are expected to take
              part in assistant teaching younger levels & costume/set-work as
              needed.
            </li>
            <br />
            <b id="highlightTitle">FEES</b>
            <br />
            Company fees help the company fulfill its commitment to pay for the
            costs of our operating budget, performance expenses, etc. As such,
            they are vitally important to the existence of our organization.
            <br />
            <br />
            <li>
              Youth Company members receive a 5% discount on their tuition for
              Nylia Ballet Academy.
            </li>
            <li>
              Company members are not charged for time spent in rehearsals.
            </li>
            <li>Company members are charged a $40 registration fee.</li>
            <br />
            $175
            <br />
            <li>
              Limited merit-based scholarships are available and distributed in
              conjunction with acceptance.
            </li>
            <br /> <br />
            <br />
            <b id="highlightTitle">IMPORTANT DATES</b> <br />
            <b>Nylia Youth Ballet Company: 2024 - 2025 Season</b>
            <ul>
              <li>August 3rd, 2024 - June 20, 2025</li>
            </ul>
            <b>Nylia Youth Ballet Company Auditions</b>
            <ul>
              <li>August 3rd, 2024 at 1:30 pm - Nylia Ballet Academy</li>
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
          <a href="https://form.jotform.com/241351892390155">
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
