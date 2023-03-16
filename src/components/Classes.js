import { React, useState } from "react";
import Curtain from "./curtain/Curtain.js";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import "./Classes.css";

import tempClass1 from "../assets/temp-classes1.jpeg";
import tempClass2 from "../assets/temp-classes2.jpeg";
import tempClass3 from "../assets/temp-classes3.jpeg";
import tempClass4 from "../assets/temp-classes4.jpeg";
import tempClass5 from "../assets/temp-classes5.jpeg";

function Classes() {
  const setClassInfo = (curClass) => {
    var rgstrRqd = "Registration Required";
    var dropInWlcm = "Drop-Ins Welcome";

    var classInfo = {
      preBallet: {
        classImg: tempClass3,
        classSched: "Saturday 9:30 - 10:30 AM",
        classDesc: "Designed for 3-5 year olds.",
        classRgstr: rgstrRqd,
      },
      ballet1: {
        classImg: tempClass1,
        classSched: "Monday & Wednesday 4:30 - 5:30 PM",
        classDesc:
          "Designed for 6 - 8 year olds, this class teaches the elements of classical ballet. The course introduces basic terminology and training.",
        classRgstr: rgstrRqd,
      },
      ballet2: {
        classImg: tempClass2,
        classSched: "Tuesday & Thursday 4:30 - 5:30pm",
        classDesc: "Designed TODO BALLET II",
        classRgstr: rgstrRqd,
      },
      ballet3: {
        classImg: tempClass3,
        classSched: "Monday & Wednesday 5:30 - 7:00pm",
        classDesc: "Designed TODO BALLET III",
        classRgstr: rgstrRqd,
      },
      ballet4: {
        classImg: tempClass4,
        classSched: "Tuesday & Thursday 5:30 - 7:00pm",
        classDesc: "Designed TODO BALLET IV",
        classRgstr: rgstrRqd,
      },
      pointe1and2: {
        classImg: tempClass5,
        classSched: "Fridays 4:30 & 5:30 PM",
        classDesc: "Designed TODO Pointe I/II",
        classRgstr: rgstrRqd,
      },
      adultBallet: {
        classImg: tempClass4,
        classSched: "Tuesday & Thursday 5:30 - 7:00pm",
        classDesc: "Designed TODO Adult Ballet",
        classRgstr: dropInWlcm,
      },
      flexibility: {
        classImg: tempClass2,
        classSched: "Monday & Wednesday 4:30 - 5:30pm. Saturday 10:30 - 11:30",
        classDesc: "Designed TODO Flexibility",
        classRgstr: dropInWlcm,
      },
    };

    document.getElementById("cur-class-image").src =
      classInfo[curClass].classImg;
    document.getElementById("cur-class-schedule").innerHTML =
      classInfo[curClass].classSched;
    document.getElementById("cur-class-rgstr").innerHTML =
      classInfo[curClass].classRgstr;
    document.getElementById("cur-class-description").innerHTML =
      classInfo[curClass].classDesc;
  };

  return (
    <div className="classes-container">
      <div className="left-listings">
        <div className="class-buttons">
          <NyliaButton
            handleClick={() => setClassInfo("preBallet")}
            label={"Pre-Ballet"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("ballet1")}
            label={"Ballet I"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("ballet2")}
            label={"Ballet II"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("ballet3")}
            label={"Ballet III"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("ballet4")}
            label={"Ballet IV"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("pointe1and2")}
            label={"Pointe I/II"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("adultBallet")}
            label={"Adult Ballet"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("flexibility")}
            label={"flexibility"}
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
            <p id="cur-class-schedule">Mondays & Wednesdays 4:30 - 5:30 PM</p>
            <p id="cur-class-rgstr">todo</p>
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
