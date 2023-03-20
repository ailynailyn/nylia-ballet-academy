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
  const rgstrRqd = "Registration Required";
  const dropInWlcm = "Drop-Ins Welcome";

  var classInfo = {
    preBallet: {
      classImg: tempClass3,
      classSched1: "Saturday",
      classSched2: "9:30 - 10:30 AM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed for 3-5 year olds. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: rgstrRqd,
    },
    ballet1: {
      classImg: tempClass1,
      classSched1: "Monday & Wednesday",
      classSched2: "4:30 - 5:30 pm",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed for 6 - 8 year olds, this class teaches the elements of classical ballet. The course introduces basic terminology and training.",
      classRgstr: rgstrRqd,
    },
    ballet2: {
      classImg: tempClass2,
      classSched1: "Tuesday & Thursday",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed TODO BALLET II. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: rgstrRqd,
    },
    ballet3: {
      classImg: tempClass3,
      classSched1: "Monday & Wednesday",
      classSched2: "5:30 - 7:00pm",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed TODO BALLET III. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: rgstrRqd,
    },
    ballet4: {
      classImg: tempClass4,
      classSched1: "Tuesday & Thursday",
      classSched2: "5:30 - 7:00pm",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed BALLET IV. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: rgstrRqd,
    },
    pointe1and2: {
      classImg: tempClass5,
      classSched1: "Friday",
      classSched2: "4:30 PM (I) & 5:30 PM (II)",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Designed Pointe I/II. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: rgstrRqd,
    },
    adultBallet: {
      classImg: tempClass4,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "SATURDAY",
      classSched4: "11:00 - 12:30 PM",
      classDesc:
        "Designed Adult Ballet. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: dropInWlcm,
    },
    flexibility: {
      classImg: tempClass2,
      classSched1: "Monday & Wednesday",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "Saturday",
      classSched4: "10:00 - 11:00 AM",
      classDesc:
        "Designed Flexibility. This is a sentence to fill the space while we create actual info. This should be three sentences max. Or maybe four?",
      classRgstr: dropInWlcm,
    },
  };

  const setClassInfo = (curClass) => {
    document.getElementById("cur-class-image").src =
      classInfo[curClass].classImg;
    document.getElementById("cur-class-sched1").innerHTML =
      classInfo[curClass].classSched1;
    document.getElementById("cur-class-sched2").innerHTML =
      classInfo[curClass].classSched2;
    document.getElementById("cur-class-sched3").innerHTML =
      classInfo[curClass].classSched3;
    document.getElementById("cur-class-sched4").innerHTML =
      classInfo[curClass].classSched4;
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
        <div className="class-spacer">
          <NyliaButton
            addtClassName="class-schedule-button"
            handleClick={() => setClassInfo("Download Class Schedule")}
            label={"Download Class Schedule"}
          ></NyliaButton>
        </div>
        <div className="class-image">
          <img id="cur-class-image" src={classInfo.preBallet.classImg}></img>
        </div>
        <div className="class-info">
          <div className="class-schedule">
            <p id="cur-class-sched1">{classInfo.preBallet.classSched1}</p>
            <p id="cur-class-sched2">{classInfo.preBallet.classSched2}</p>
            <p id="cur-class-sched3"></p>
            <p id="cur-class-sched4"></p>
            <p id="cur-class-rgstr">{classInfo.preBallet.classRgstr}</p>
          </div>
          <div className="class-description">
            <p id="cur-class-description">{classInfo.preBallet.classDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
