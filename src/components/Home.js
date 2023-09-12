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
          Now offering Beginner Adult Ballet classes on Tuesdays & Pre-Ballet
          and Pilates classes on Thursdays!
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
