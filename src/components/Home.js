import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import ABTLogo from "../assets/American_Ballet_Theatre_NTC_logo.png";

import "./Home.css";

function Home() {
  return (
    <div class="main-container home-container">
      <div className="description-event">
        <h1>
          <b>El Paso's Center for Classical Ballet Training</b>
        </h1>
        <p>
          <br />
          <i id="NyliaMotto">
            At Nylia Ballet Academy we focus on high quality training,
            emphasizing character building and personal growth. Call or visit us
            today!
          </i>
        </p>
        <hr></hr>
        <div id="abtSection">
          <p>
            Nylia Ballet Academy is proud to include the AMERICAN BALLET
            THEATRE® National Training Curriculum, a breakthrough 9 level
            program that combines high quality artistic training with the basics
            of dancer health and child development. The ABT® National Training
            Curriculum consists of a comprehensive set of age appropriate,
            outcome-based guidelines to provide the highest quality ballet
            training to dance students of all ages and skill levels.
          </p>
          <img src={ABTLogo}></img>
          <br></br>
          <br></br>
        </div>
        <div>
          <PopupModal />
        </div>
        <div className="homeSocials">
          <SocialIcon
            url="https://www.facebook.com/nyliaballetacademy/"
            network="facebook"
            bgColor="rgb(0, 0, 0, .3)"
            fgColor="white"
            style={{ marginRight: "1rem" }}
          />
          <SocialIcon
            url="https://www.instagram.com/nyliaballetacademy/"
            network="instagram"
            bgColor="rgb(0, 0, 0, .3)"
            fgColor="white"
            style={{ marginRight: "1rem" }}
          />
          <SocialIcon
            url="https://mx.pinterest.com/nyliaballetacademy/"
            network="pinterest"
            bgColor="rgb(0, 0, 0, .3)"
            fgColor="white"
            style={{ marginRight: "1rem" }}
          />
          <SocialIcon
            url="https://www.youtube.com/@NyliaBalletCompany"
            network="youtube"
            bgColor="rgb(0, 0, 0, .3)"
            fgColor="white"
            style={{ marginRight: "1rem" }}
          />
        </div>
      </div>

      <div className="description">
        <br></br>
        <h1>The Little Mermaid Auditions</h1>
        <h4>Sunday, June 8, 2025</h4>
        <p>
          Have you ever imagined dancing beneath the waves? Now’s your chance to
          bring that dream to life!
          <br></br>
          <br></br>
          The Nylia Ballet Company is creating a completely original ballet
          production of The Little Mermaid — inspired by the timeless Hans
          Christian Andersen tale — and we’re looking for passionate performers
          to join the very first cast.
          <br></br>
          <br></br>
          Whether you’ve been dancing for years or you’ve never stepped into a
          studio, you belong here. Open to dancers ages 4 and up. All experience
          levels welcome — even total beginners! We’ll guide and train you every
          step of the way.
          <br></br>
          <br></br>
          This is more than a show — it’s a once-in-a-lifetime chance to create
          something magical from the very beginning. Come be part of the story.
        </p>{" "}
        <br></br>
        <a
          id="description-event-button"
          href="/performances/thelittlemermaid2025"
        >
          <NyliaButton label={"the little mermaid"}></NyliaButton>
        </a>
        <br></br>
        <br></br>
      </div>

      <div className="description">
        <br></br>
        <h1>ENROLL TODAY</h1>
        <h4>Your first class is free!</h4>
        <p>
          Nylia Ballet Academy is proud to be home to the Nylia Ballet Company
          and our Youth Company, elite performing groups that bring captivating
          productions to life. This season, experience the magic of Dracula,
          Swan Lake, and Sleeping Beauty. <br></br> <br></br>
          We offer a comprehensive youth curriculum for ages 4-18, alongside
          adult classes ranging from absolute beginner to advanced levels,
          including Men's Ballet, Pointe, and flexibility classes. Enjoy your
          first class free as a trial, giving you the perfect opportunity to
          experience our welcoming environment. Located in East El Paso, we
          foster a vibrant artistic community where everyone can thrive. Join us
          and be part of the journey!
        </p>{" "}
        <br></br>
        <a
          id="description-event-button"
          href="https://www.nyliaballetacademy.com/classes"
        >
          <NyliaButton label={"OUR CLASSES"}></NyliaButton>
        </a>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Home;
