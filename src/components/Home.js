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
          We are thrilled to present the ballet Cinderella on June 15th at the
          Magoffin Auditiorium! Join us for a memorable, enchanting evening of
          love and transformation! Get your tickets now at UTEP's box offices or
          Ticketmaster!
        </p>
        <a
          id="description-event-button"
          href="https://www.ticketmaster.com/cinderella-el-paso-texas-06-15-2024/event/0C006056FECF5021"
        >
          <NyliaButton label={"Buy Cinderella tickets"}></NyliaButton>
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
