import { React } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import NyliaButton from "./nyliaButton/NyliaButton.js";

import CinderellaHandbook from "../assets/performances/Cinderella Handbook 2024.pdf";
import cinderellaXL from "../assets/performances/cinderella.png";
import cinderellaScheduleXL from "../assets/CinderellaWeeklySchedule2024-2000.png";

import unsSm from "../assets/galleryImages/kristina300.png";
import unsMd from "../assets/galleryImages/kristina-768.png";
import unsLg from "../assets/galleryImages/kristina-1280.png";
import unsXL from "../assets/galleryImages/kristina-2000.png";
import UNSHandbook from "../assets/performances/UNSHandbook2023.pdf";
import UNSProgram from "../assets/performances/UNSProgram2023.pdf";

import terraSm from "../assets/galleryImages/FridaKahlo-2Sm.png";
import terraMd from "../assets/galleryImages/FridaKahlo-2Md.png";
import terraLg from "../assets/galleryImages/FridaKahlo-2Lg.png";
import terraXL from "../assets/galleryImages/FridaKahlo-2XL.png";
import TerraProgram from "../assets/performances/Terra2023Program.pdf";
import TerraHandbook from "../assets/performances/TerraHandbook2023.pdf";

import "./Performances.css";

function Performances() {
  return (
    <div class="performances-container">
      <div className="performances-section">
        <h1>PERFORMANCES</h1>
        <p>
          At Nylia Ballet Academy, we want to create performing opportunities to
          dancers in order for them to gain self- confidence and independence,
          as well as foster in them a love and appreciation for the art of
          dance.
          <br />
          <br />A major component of dance training is learning through
          performance. While performance opportunities can help prepare some
          students for a possible career in dance, they also contribute to
          children’s success in non-dance activities. The performing experience
          helps build self-esteem and self- confidence and can result in better
          in-school presentations, improved social skills, and strong interview
          skills for future college or job opportunities.
        </p>

        <div className="performance-cards">
          {/* <CardGroup> */}
          <Card>
            <Card.Img variant="top" src={cinderellaXL} />
            <Card.Body>
              <Card.Title>CINDERELLA</Card.Title>
              <Card.Text>
                Nylia Ballet Academy is thrilled to present our first public
                production of Cinderella at UTEP's Magoffin Auditorium! This
                ballet tells the classic story of Cinderella, taking us on a
                journey of emotions as she discovers unexpected support,
                friendships and, ultimately, her true love.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="performance-date">
              <small className="text-muted">June 15, 2024</small>
            </Card.Footer>
            <Card.Footer>
              <a
                id="performances-button"
                href="https://www.ticketmaster.com/cinderella-el-paso-texas-06-15-2024/event/0C006056FECF5021"
              >
                <NyliaButton label={"Buy Tickets"}></NyliaButton>
              </a>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={cinderellaScheduleXL}>
                <NyliaButton
                  label={"Cinderella Rehearsal Schedule"}
                ></NyliaButton>
              </a>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={CinderellaHandbook}>
                <NyliaButton label={"Cinderella Handbook"}></NyliaButton>
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={unsXL} />
            <Card.Body>
              <Card.Title>UNA NOTTE SILENZIOSA</Card.Title>
              <Card.Title>
                <small>Ft. Excerpts from "The Nutcracker"</small>
              </Card.Title>
              <Card.Text>
                Our special production of Una Notte Silenziosa had special class
                pieces and solos with original choreography by Nylia Ballet
                Academy instructors. Our Winter 2023 production also featured
                excerpts from Tchaikovsky's "The Nutcracker", telling the
                magical story of Clara's adventures with the Nutcracker Prince
                through the Land of Snow and Sweets.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="performance-date">
              <small className="text-muted">December 16, 2023</small>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={UNSHandbook}>
                <NyliaButton
                  label={"Una Notte Silenziosa Handbook"}
                ></NyliaButton>
              </a>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={UNSProgram}>
                <NyliaButton
                  label={"Una Notte Silenziosa Program"}
                ></NyliaButton>
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={terraXL} />
            <Card.Body>
              <Card.Title>TERRA</Card.Title>
              <Card.Text>
                Nylia Ballet Academy proudly hosted our first Student Showcase
                on September 10, 2023. Terra paid tribute to nature and the
                Earth. The showcase featured different variations of Ballet
                styles that demonstrated our dedicated students' hardwork and
                progress.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="performance-date">
              <small className="text-muted">September 10, 2023</small>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={TerraHandbook}>
                <NyliaButton label={"Terra Handbook"}></NyliaButton>
              </a>
            </Card.Footer>
            <Card.Footer>
              <a id="performances-button" href={TerraProgram}>
                <NyliaButton label={"Terra Program"}></NyliaButton>
              </a>
            </Card.Footer>
          </Card>
          {/* </CardGroup> */}
        </div>
      </div>
    </div>
  );
}

export default Performances;
