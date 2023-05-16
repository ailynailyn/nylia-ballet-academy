import { React } from "react";
import middleImage from "../assets/temp-contact-middle.jpeg";
import nyliaOutdoorSign from "../assets/nyliaOutdoorSign.jpeg";
import ailyn from "../assets/ailynTeam.jpg";
import luisa from "../assets/luisaTeam.jpg";
import "./Team.css";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template
  return (
    <div class="team-container">
      <div className="left-content">
        <div className="left-member">
          <img
            src={ailyn}
            alt="Ailyn Aguirre posing for Nylia Ballet Academy"
          ></img>
          <h1>AILYN AGUIRRE</h1>
          <h2>Director</h2>
          <p>
            Ailyn began her ballet training at eleven years old under Andrée
            Harper and Ouisa Davis. After graduating from the University of
            Texas in Austin, Ailyn became a Software Engineer. After teaching
            and creating choreography at multiple studios throughout Texas, she
            returned to her native El Paso roots and founded Nylia Ballet
            Academy to provide an equal opportunity for anyone in the community
            to pursue their dreams in dance.
          </p>
        </div>
      </div>
      <div className="middle">
        <h1 id="team-label">THE TEAM</h1>
      </div>
      <div className="right-content">
        <div className="right-member">
          <img
            src={luisa}
            alt="Luisa Cuellar posing for Nylia Ballet Academy"
          ></img>
          <h1>LUISA CUELLAR</h1>
          <h2>Manager</h2>
          <p>
            A native El Pasoan, Luisa is an accomplished individual and is
            currently studying towards her degree in Computer Science. She
            recently reconnected with her passion for dance and is training in
            ballet as an adult. Luisa is of radiant and friendly energy who is
            excited to grow along Nylia Ballet Academy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
