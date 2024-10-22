import { React } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import NyliaButton from "./nyliaButton/NyliaButton.js";
import Footer from "../components/Footer";

import sleepingBeautyXL from "../assets/performances/SleepingBeauty.png";
// import swanLakeXL from "../assets/performances/SwanLake.png";
import swanLakeXL from "../assets/performances/Swan Lake Auditions 2024 Poster.png";
import swanLakeHandbook from "../assets/performances/Swan Lake Handbook 2024-2025.pdf";

import DraculaHandbook from "../assets/performances/Dracula Handbook 2024.pdf";
import draculaXL from "../assets/performances/Dracula Poster-Bride 2024.png";
import DraculaCastList from "../assets/performances/Dracula Cast List.png";

import CinderellaHandbook from "../assets/performances/Cinderella Handbook 2024.pdf";
import cinderellaXL from "../assets/performances/Cinderella2024IG-Cinderella.png";
import cinderellaProgram from "../assets/performances/Cinderella2024Program.pdf";
// import cinderellaSchedule from "../assets/performances/CinderellaWeeklySchedule2024.pdf";

import unsXL from "../assets/galleryImages/kristina-2000.png";
import UNSHandbook from "../assets/performances/UNSHandbook2023.pdf";
import UNSProgram from "../assets/performances/UNSProgram2023.pdf";

// import terraSm from "../assets/galleryImages/FridaKahlo-2Sm.png";
// import terraMd from "../assets/galleryImages/FridaKahlo-2Md.png";
// import terraLg from "../assets/galleryImages/FridaKahlo-2Lg.png";
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
        <div>
          <div className="performance-cards">
            <Card>
              <Card.Img variant="top" src={swanLakeXL} />
              <Card.Body>
                <Card.Title>SWAN LAKE</Card.Title>
                <Card.Text>
                  Immerse yourself in the enchanting love story of{" "}
                  <i>Swan Lake</i>. Witness Prince Siegfried's fateful encounter
                  with the Swan Queen, Odette, as he pledges his undying love
                  and loyalty to her. However, a cruel curse by the evil
                  sorcerer Baron von Rothbart only allows Odette to take human
                  form at night. Only true love and unwavering fidelity can
                  break this powerful spell.
                  <br /> <br />
                  <b>AUDITIONS: OCTOBER 26, 2024</b>
                  <p>
                    All auditions will be held at Nylia Ballet Academy.
                    <br></br>
                    Audition Fee: $15
                    <br></br>
                    <br></br>
                    <b>Youth Cast Auditions</b>
                    <br></br>10:00 - 10:30 am:{" "}
                    <i>Check-in for all Youth auditions</i>
                    <br></br>10:30 - 11:00 am: <i>4-9 year olds</i>
                    <br></br>11:00 - 11:30 am: <i>10-13 year olds</i>
                    <br></br>11:30 - 12:00 pm: <i>14-18 year olds</i>
                    <br></br>
                    <br></br>
                    <b>Mandatory Youth Parent Meeting:</b> 12 - 12:30 pm
                    <br></br>
                    <br></br>
                    <b>Adult Cast Auditions</b>
                    <br></br>11:30 - 12:00 pm:{" "}
                    <i>Check-in for all Adult auditions</i>
                    <br></br>12:00 - 12:30 pm: <i>Beginner Adults</i>
                    <br></br>12:30 - 1:00 pm:{" "}
                    <i>Intermediate & Advanced Adults</i>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="performance-date">
                <small className="text-muted">FEBRUARY 2025</small>
              </Card.Footer>

              <Card.Footer>
                <a id="performances-button" href={swanLakeHandbook}>
                  <NyliaButton label={"Swan Lake Handbook"}></NyliaButton>
                </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={sleepingBeautyXL} />
              <Card.Body>
                <Card.Title>SLEEPING BEAUTY</Card.Title>
                <Card.Text>
                  Visit an enchanting world of princesses, fairy godmothers, and
                  magical spells!
                  <br /> <br />
                  <b>AUDITIONS: FEBRUARY 8, 2025</b>
                  <p>
                    All auditions will be held at Nylia Ballet Academy.
                    <br></br>
                    <br></br>
                    <b>Youth Cast Auditions:</b> 9 am - 10:30 am<br></br>
                    <b>Mandatory Parent Meeting:</b> 9 am - 9:30 am<br></br>
                    <b>Adult Cast Auditions:</b> 10:30 am - 12:00 pm
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="performance-date">
                <small className="text-muted">JUNE 2025</small>
              </Card.Footer>

              <Card.Footer>
                <a id="performances-button">
                  <NyliaButton
                    label={"Sleeping Beauty Handbook - Coming Soon"}
                  ></NyliaButton>
                </a>
              </Card.Footer>
            </Card>

            <h1>
              <br />
              <br />
              <br />
              PAST PERFORMANCES
              <br />
              <br />
              <br />
            </h1>
            <Card>
              <Card.Img variant="top" src={draculaXL} />
              <Card.Body>
                <Card.Title>DRACULA</Card.Title>
                <Card.Text>
                  Experience the mesmerizing world of Dracula, a Ballet set in
                  Transylvania. Dracula and his brides seek to regain their
                  waning power. Dracula targets a young girl named Flora and
                  later sets his sights on Svetlana, the daughter of a village
                  innkeeper. Despite the vampire's attempts to take Svetlana as
                  his bride, the villagers ultimately band together to defeat
                  Dracula, with Svetlana ultimately foiling the vampire's plan,
                  leading to his demise.
                  <br /> <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="performance-date">
                <small className="text-muted">October 20, 2024</small>
              </Card.Footer>
              <Card.Footer>
                <a id="performances-button" href={DraculaCastList}>
                  <NyliaButton label={"Dracula Cast List"}></NyliaButton>
                </a>
              </Card.Footer>
              <Card.Footer>
                <a id="performances-button" href={DraculaHandbook}>
                  <NyliaButton label={"Dracula Handbook"}></NyliaButton>
                </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={cinderellaXL} />
              <Card.Body>
                <Card.Title>CINDERELLA</Card.Title>
                <Card.Text>
                  Nylia Ballet Academy is thrilled to present our first public
                  production of Cinderella! This ballet tells the classic story
                  of Cinderella, taking us on a journey of emotions as she
                  discovers unexpected support, friendships and, ultimately, her
                  true love.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="performance-date">
                <small className="text-muted">June 15, 2024</small>
              </Card.Footer>
              <Card.Footer>
                <a
                  id="performances-button"
                  href="https://www.pinterest.com/nyliaballetacademy/cinderella-2024/"
                >
                  <NyliaButton label={"Gallery"}></NyliaButton>
                </a>
              </Card.Footer>
              <Card.Footer>
                <a id="performances-button" href={cinderellaProgram}>
                  <NyliaButton label={"Cinderella Program"}></NyliaButton>
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
                  Our special production of Una Notte Silenziosa had special
                  class pieces and solos with original choreography by Nylia
                  Ballet Academy instructors. Our Winter 2023 production also
                  featured excerpts from Tchaikovsky's "The Nutcracker", telling
                  the magical story of Clara's adventures with the Nutcracker
                  Prince through the Land of Snow and Sweets.
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
      <Footer />
    </div>
  );
}

export default Performances;
