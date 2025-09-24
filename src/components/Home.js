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
        <h1>SWAN LAKE AUDITIONS</h1>
        <h4>Sunday, September 28th</h4>
        <p>
          {" "}
          <br></br>
          Nylia Ballet Company is casting dancers ages 4+ for our upcoming
          production of Swan Lake, the timeless story of love, mystery, and
          transformation. From enchanted lakes to royal courts, this ballet
          invites audiences into a world where grace meets power, and we want
          you to help bring it to life! All backgrounds and experience levels
          are welcome, from absolute beginners to advanced dancers. If you have
          a passion for movement and storytelling, we’d love to see you at
          auditions!
        </p>{" "}
        <br></br>
        <a id="description-event-button" href="/performances/swanlake2026">
          <NyliaButton label={"SWAN LAKE AUDITIONS"}></NyliaButton>
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
