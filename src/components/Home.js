import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";

import "./Home.css";

function Home() {
  return (
    <div class="main-container home-container">
      <div className="description-event">
        <h1>El Paso's Center for Classical Ballet Training</h1>
        <p>
          <br />
          <i id="NyliaMotto">
            At Nylia Ballet Academy we focus on high quality training,
            emphasizing character building and personal growth. Call or visit us
            today!
          </i>
          <br />
          <br />
        </p>
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
          />
        </div>
      </div>
      <div className="description">
        <br></br>
        <h3>NYLIA BALLET COMPANY PRESENTS</h3>
        <h1>
          <b>SWAN LAKE</b>
        </h1>
        <br></br>
        <h3>February 1, 2025</h3>
        <h3>UTEP's Magoffin Auditorium</h3>
        <br></br>
        <p>
          Experience Prince Siegfried’s journey from the joyous revelry of his
          21st birthday to the haunting shores of Swan Lake, where he encounters
          the ethereal Swan Queen, Odette. Captivated by her beauty, Siegfried
          faces a powerful test of love against the sinister sorceress Von
          Rothbart, in a world where illusions blur the line between truth and
          deception. As fate unfolds under moonlit skies, watch as love,
          loyalty, and sacrifice entwine in a mesmerizing battle for freedom.
          <br></br>
          <br></br>
          This is the ballet event of the season—an unforgettable masterpiece
          too enchanting to miss. Let Swan Lake sweep you into a world where
          destiny dances on enchanted waters!
        </p>{" "}
        <br></br>
        <a
          id="description-event-button"
          href="https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F"
        >
          <NyliaButton label={"SWAN LAKE TICKETS"}></NyliaButton>
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
