import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";

import "./Home.css";

function Home() {
  return (
    <div class="home-container">
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
        <h1>DRACULA</h1>
        <h4>10.20.2024</h4>
        <p>
          Experience the mesmerizing world of Dracula, a Ballet set in
          Transylvania. Dracula and his brides seek to regain their waning
          power. Dracula targets a young girl named Flora and later sets his
          sights on Svetlana, the daughter of a village innkeeper. Despite the
          vampire's attempts to take Svetlana as his bride, the villagers
          ultimately band together to defeat Dracula, with Svetlana ultimately
          foiling the vampire's plan, leading to his demise.
        </p>{" "}
        <br></br>
        <a
          id="description-event-button"
          href="https://www.ticketmaster.com/dracula-el-paso-texas-10-20-2024/event/0C00610DCC433581"
        >
          <NyliaButton label={"DRACULA TICKETS"}></NyliaButton>
        </a>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Home;
