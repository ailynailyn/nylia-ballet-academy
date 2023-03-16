import { React, useState } from "react";
import Curtain from "./curtain/Curtain.js";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import "./Classes.css";

import tempClass1 from "../assets/temp-classes1.jpeg";
import tempClass2 from "../assets/temp-classes2.jpeg";
import tempClass3 from "../assets/temp-classes3.jpeg";
import tempClass4 from "../assets/temp-classes4.jpeg";
import tempClass5 from "../assets/temp-classes5.jpeg";

// function afterr() {
//   document.getElementById("myImage").src = "img/photo2.jpg";
//   document.getElementById("message").innerHTML = "Bye! GeeksforGeeks people";
// }
function Classes() {
  // const [active, setActive] = useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };

  const balletI = () => {
    document.getElementById("cur-class-image").src = tempClass1;
    document.getElementById("cur-class-schedule").innerHTML =
      "Monday & Wednesday 4:30 - 5:30pm";
    document.getElementById("cur-class-description").innerHTML =
      "Designed for 6 - 8 year olds, this class teaches the elements of classical ballet. The course introduces basic terminology and training.";
  };

  const balletII = () => {
    document.getElementById("cur-class-image").src = tempClass2;
    document.getElementById("cur-class-description").innerHTML =
      "TODO Description for balletII";
  };

  const balletIII = () => {
    document.getElementById("cur-class-image").src = tempClass3;
    document.getElementById("cur-class-description").innerHTML =
      "TODO Description for ballet III";
  };

  const balletIV = () => {
    document.getElementById("cur-class-image").src = tempClass4;
    document.getElementById("cur-class-description").innerHTML =
      "TODO Description for ballet IV";
  };

  const pointeIAndII = () => {
    document.getElementById("cur-class-image").src = tempClass5;
    document.getElementById("cur-class-description").innerHTML =
      "TODO Description for pointe i and 2";
  };

  const flexibilityAndConditioning = () => {
    document.getElementById("cur-class-image").src = tempClass1;
    document.getElementById("cur-class-description").innerHTML =
      "TODO Description for flexibility and conditioning";
  };

  return (
    <div className="classes-container">
      <div className="left-listings">
        <div className="class-buttons">
          <NyliaButton handleClick={balletI} label={"Ballet I"}></NyliaButton>
          <NyliaButton handleClick={balletII} label={"Ballet II"}></NyliaButton>
          <NyliaButton
            handleClick={balletIII}
            label={"Ballet III"}
          ></NyliaButton>
          <NyliaButton handleClick={balletIV} label={"Ballet IV"}></NyliaButton>
          <NyliaButton
            handleClick={pointeIAndII}
            label={"Pointe I/II"}
          ></NyliaButton>
          <NyliaButton
            handleClick={flexibilityAndConditioning}
            label={"Flexibility"}
          ></NyliaButton>
        </div>
      </div>

      <div className="right-info">
        <div className="class-spacer"></div>
        <div className="class-image">
          <img id="cur-class-image" src={tempClass1}></img>
        </div>
        <div className="class-info">
          <div className="class-schedule">
            <p id="cur-class-schedule">
              Mondays & Wednesdays <br></br>4:30 - 5:30 PM
            </p>
          </div>
          <div className="class-description">
            <p id="cur-class-description">
              Designed for 6 - 8 year olds, this class teaches the elements of
              classical ballet. The course introduces basic terminology and
              training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
