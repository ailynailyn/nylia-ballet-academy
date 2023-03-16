import { React } from "react";
import Curtain from "./curtain/Curtain.js";
import "./Classes.css";

import tempClass1 from "../assets/temp-classes1.jpeg";

function Classes() {
  return (
    <div className="classes-container">
      <div className="left-listings">hello temp class listings go here</div>

      <div className="right-info">
        <div className="class-spacer"></div>
        <div className="class-image">
          <img src={tempClass1}></img>
        </div>
        <div className="class-info">
          <div className="class-schedule">
            <p>
              Mondays & Wednesdays <br></br>4:30 - 5:30 PM
            </p>
          </div>
          <div className="class-description">
            <p>
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
