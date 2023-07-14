import { React } from "react";

import PopupModal from "../components/popupModal/PopupModal";

import "./Home.css";

function Home() {
  return (
    <div class="home-container">
      <div className="description">
        <p>
          East El Paso's Center for Classical Ballet Training
          <br />
          <br />
          Nylia Ballet Academy is thrilled to present our Student Showcase,
          "Terra", on September 10, 2023
          <br />
          <br />
        </p>
        <div>
          <PopupModal />
        </div>
      </div>
    </div>
  );
}

export default Home;
