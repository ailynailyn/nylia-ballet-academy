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
          We are currently on Winter break until January 2nd! Classes resume
          Wednesday, January 3rd. Contact us to schedule your free trial class
          for January. See you soon, dancers!
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
