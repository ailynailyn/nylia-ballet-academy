import { React } from "react";
import middleImage from "../assets/temp-contact-middle.jpeg";
import tempPic from "../assets/NYLIA.png";
import "./Team.css";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template
  return (
    <div class="team-container">
      <div className="left-content">
        <div className="left-member">
          <img src={tempPic}></img>
          <h1>Ailyn Aguirre</h1>
          <h2>Instructor</h2>
          <p>
            Enter the description for what it is. This is a sentence that I am
            writing. Seven plus seven is not five.
          </p>
        </div>
      </div>
      <div className="middle">
        <h1 id="team-label">TEAM</h1>
      </div>
      <div className="right-content">
        <div className="right-member">
          <img src={tempPic}></img>
          <h1>Luisa Cuellar</h1>
          <h2>Executive Assistant</h2>
          <p>
            Enter the description for what it is. This is a sentence that I am
            writing. Seven plus seven is not five.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
