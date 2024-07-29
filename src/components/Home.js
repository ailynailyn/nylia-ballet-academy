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
        <p>
          At Nylia, we focus on large scale productions to widely demonstrate
          how ballet operates as an art form that tells stories. Yet, the power
          of art is not accomplishable without high quality technical training.
          We want our dancers, and dancers throughout the city, to always be
          developing their craft. Thus, we are thrilled to announce auditions
          for our premier performing companies: Nylia Ballet Company and Nylia
          Ballet Youth Company!
          <br></br>
          <br></br>
        </p>
        <a
          id="description-event-button"
          href="https://www.nyliaballetacademy.com/nyliaballetcompany"
        >
          <NyliaButton label={"COMPANY AUDITIONS"}></NyliaButton>
        </a>
        <br /> <br />
        <b>COMPANY AUDITIONS: AUGUST 3, 2024</b>
        <p>
          All auditions will be held at Nylia Ballet Academy.
          <br></br>
          <br></br>
          <b>Nylia Ballet Youth Company Auditions:</b> 10:30 am - 11:30 am
          <br></br>
          <b>Nylia Ballet Company Auditions:</b> 1:30 pm - 2:30 pm
        </p>
        <br /> <br />
        <hr></hr>
        <a
          id="description-event-button"
          href="https://www.nyliaballetacademy.com/performances"
        >
          <NyliaButton label={"DRACULA AUDITIONS"}></NyliaButton>
        </a>
        <br></br>
        <p>
          Experience the mesmerizing world of Dracula, a Ballet set in
          Transylvania. Dracula and his brides seek to regain their waning
          power. Dracula targets a young girl named Flora and later sets his
          sights on Svetlana, the daughter of a village innkeeper. Despite the
          vampire's attempts to take Svetlana as his bride, the villagers
          ultimately band together to defeat Dracula, with Svetlana ultimately
          foiling the vampire's plan, leading to his demise.
        </p>
        <br></br>
        <b>DRACULA AUDITIONS: AUGUST 3, 2024</b>
        <p>
          All auditions will be held at Nylia Ballet Academy.
          <br></br>
          <br></br>
          <b>Youth Cast Auditions:</b> 9 am - 10:30 am<br></br>
          <b>Mandatory Parent Meeting:</b> 9 am - 9:30 am<br></br>
          <b>Adult Cast Auditions:</b> 12 pm - 1:30 pm
        </p>
      </div>
    </div>
  );
}

export default Home;
