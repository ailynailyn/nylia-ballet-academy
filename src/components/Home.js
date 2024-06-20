import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";

import "./Home.css";

function Home() {
  return (
    <div class="home-container">
      <div className="description-event">
        <p>
          At Nylia, we focus on large scal productions to widely demonstrate how
          ballet operates as an art form that tells stories. Yet, the power of
          art is not accomplishable without high quality technical training. We
          want our dancers, and dancers throughout the city, to always be
          developing their craft.
          <br></br>
          <br></br>
          Thus, we are proud to offer our community this week long opportunity
          to refine their technique and build different genres to enhance
          performance. We invite you to apply for our Summer Intensive, July 15
          - 19, 2024. Both Youth and Adult programs available!
        </p>
        <a
          id="description-event-button"
          href="https://www.nyliaballetacademy.com/summerintensives"
        >
          <NyliaButton label={"Summer intensives"}></NyliaButton>
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
