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
          At Nylia Ballet Academy we focus on high quality training, emphasizing
          character building and personal growth. Call or visit us today!
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
