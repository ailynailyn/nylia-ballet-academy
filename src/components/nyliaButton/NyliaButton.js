// https://codepen.io/perry_nt/pen/eVboze
// https://codepen.io/Shinobis/pen/yLNgWGM
// https://codepen.io/Azragh/pen/GGwQvB
import { React } from "react";

import "./NyliaButton.css";

function NyliaButton({ handleClick, label }) {
  return (
    <div class="nyliabutton-container">
      {/* <div class="btn from-top">From Top</div> */}
      <div class="btn from-left" onClick={handleClick}>
        {label}
      </div>
      {/* <div class="btn from-right">From Right</div> */}
      {/* <div class="btn from-center">From Center</div> */}
      {/* <div class="btn from-bottom">From Bottom</div> */}
    </div>
  );
}

export default NyliaButton;
