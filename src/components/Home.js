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
          Visit us during our Grand Opening week May 15 - 20 for special deals
          and raffles!
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
