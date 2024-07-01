// https://codepen.io/perry_nt/pen/eVboze
// https://codepen.io/Shinobis/pen/yLNgWGM
// https://codepen.io/Azragh/pen/GGwQvB
import { React } from "react";

import "./NyliaButton.css";

function NyliaButton({ handleClick, label, link }) {
  return (
    <div class="nyliabutton-container">
      <a href={link}>
        <div class="btn from-left" onClick={handleClick}>
          {label}
        </div>
      </a>
    </div>
  );
}

export default NyliaButton;
