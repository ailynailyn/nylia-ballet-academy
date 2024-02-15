import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import auditions from "../assets/CinderellaAuditions-2000.png";

import "./Home.css";

function Home() {
  return (
    <div class="home-container">
      <div className="description-event">
        <p>
          Auditions for our upcoming production of Cinderella will be held
          Sunday, February 25, at the academy from 9:00 am to 2:30 pm.
        </p>
        <a id="description-event-button" href={auditions}>
          <NyliaButton label={"Audition Details"}></NyliaButton>
        </a>
      </div>
      <div className="description">
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
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
