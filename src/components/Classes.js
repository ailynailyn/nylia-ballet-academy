import { React, useState } from "react";
import Curtain from "./curtain/Curtain.js";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import "./Classes.css";

import tempClass5 from "../assets/temp-classes5.jpeg";
import preBallet1Img from "../assets/preBallet1Img.JPG";
import preBallet2Img from "../assets/preBallet2Img.JPG";
import ballet1Img from "../assets/ballet1Img.JPG";
import ballet2Img from "../assets/ballet2Img.JPG";
import ballet3Img from "../assets/ballet3Img.JPG";
import ballet4Img from "../assets/ballet4Img.jpeg";
import pointe1Img from "../assets/pointe1Img.jpeg";
import pointe2Img from "../assets/pointe2Img.JPG";
import adultBalletImg from "../assets/adultBalletImg.jpeg";
import flexibilityImg from "../assets/flexibilityImg.JPG";
import ClassSchedule from "../assets/NyliaSchedule.pdf";
import ClassDescriptionBrochure from "../assets/Class Descriptions Brochure.pdf";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Classes() {
  const rgstrRqd = "Registration Required";
  const dropInWlcm = "Drop-Ins Welcome";

  var classInfo = {
    preBallet1: {
      classTitle: "☰ Pre-Ballet I",
      classImg: preBallet1Img,
      classSched1: "SATURDAY",
      classSched2: "9:00 - 10:00 AM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Students are introduced to ballet vocabulary and class etiquette, focusing on the development of coordination, strength, flexibility, and musicality during their early development stages. It is important to us to maintain a creative and accepting learning environment to keep our tiny ballerinas motivated and engaged in the art of ballet.",
      classRgstr: rgstrRqd,
    },
    preBallet2: {
      classTitle: "☰ Pre-Ballet II",
      classImg: preBallet2Img,
      classSched1: "SATURDAY",
      classSched2: "10:00 - 11:00 AM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pre-Ballet II is a class designed to introduce the fundamentals of classical ballet technique. The class begins with conditioning, strengthening and stretching exercises to help students use, and isolate, certain muscle groups pertaining to dance. This class will enhance the student’s coordination, balance and flexibility, as well as musicality.",
      classRgstr: rgstrRqd,
    },
    ballet1: {
      classTitle: "☰ Ballet I",
      classImg: ballet1Img,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet I will include basic barre exercises, as well as center work implementing the study of classical ballet vocabulary. Instruction involves strong concentration on correct body alignment, along with the development of attention span, discipline, and musicality.",
      classRgstr: rgstrRqd,
    },
    ballet2: {
      classTitle: "☰ Ballet II",
      classImg: ballet2Img,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet II is for students who have studied the basics and are ready to concentrate on developing a broader ballet vocabulary through barre work, center exercises, and across the floor combinations designed to improve coordination, flexibility, endurance, and musicality. This class will strengthen the feet and ankles to prepare the students for pointe shoes, and more advanced technique.",
      classRgstr: rgstrRqd,
    },
    ballet3: {
      classTitle: "☰ Ballet III",
      classImg: ballet3Img,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet III is an intermediate class designed with focus on classical ballet technique through a professional class progression. We highly recommend students at this level take class at least three times a week for optimal growth. Students will build on their skills and strength, and refine their movement with attention to technique, execution and artistry.",
      classRgstr: rgstrRqd,
    },
    ballet4: {
      classTitle: "☰ Ballet IV",
      classImg: ballet4Img,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet IV is an advanced level class with a required placement class prior for enrollment. Students learn advanced technique, while emphasizing musicality, discipline, and professionalism. We highly recommend students at this level to take class at least four times a week for optimal growth.",
      classRgstr: rgstrRqd,
    },
    pointe1: {
      classTitle: "☰ Pointe I",
      classImg: pointe1Img,
      classSched1: "FRIDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe I class is by invitation only for our Ballet III & IV students. This class is an introduction to pointe work, requiring students to have very strong ankles, body awareness, core stability, along with basic classical ballet technique.",
      classRgstr: rgstrRqd,
    },
    pointe2: {
      classTitle: "☰ Pointe II",
      classImg: pointe2Img,
      classSched1: "FRIDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "SATURDAY",
      classSched4: "11:00 - 12:30 PM",
      classDesc:
        "Pointe II students will be invited to participate on an individual basis when they have the necessary physical and technical development. These classes are perfect for the ballerina who is wanting to take their ballet technique to the next level. This class includes classical variations, the study of solo dances from historically established classical ballet repertoire.",
      classRgstr: rgstrRqd,
    },
    adultBallet: {
      classTitle: "☰ Adult Ballet",
      classImg: adultBalletImg,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "SATURDAY",
      classSched4: "12:00 - 1:30 PM",
      classDesc:
        "Adult Ballet class is designed for dancers of all abilities. Participants will strengthen their ballet technique aimed to improve alignment and balance, strengthen muscles, and increase flexibility. In this class, the teacher will make sure to accommodate to participants of all levels in order to create a comfortable environment for growth.",
      classRgstr: dropInWlcm,
    },
    flexibility: {
      classTitle: "☰ Flexibility",
      classImg: flexibilityImg,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "SATURDAY",
      classSched4: "11:00 AM - 12:00 PM",
      classDesc:
        "Flexibility classes introduce various techniques of flexibility training as well as techniques that are especially designed to improve your range of movement and mobility. The focus of the class is to stretch and lengthen the muscles of the body, and to strengthen them to be able to better execute ballet technique or simply utilize in one’s own daily routine.",
      classRgstr: dropInWlcm,
    },
  };

  const setClassInfo = (curClass) => {
    document.getElementById("dropdown-item-button").innerHTML =
      classInfo[curClass].classTitle;
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

  const classPageDesc =
    "We offer classes from Monday to Saturday for children and adults, ages 3+. Look through the classes we offer below for more information.";

  return (
    <div className="classes-container">
      <div className="left-listings">
        <div className="class-buttons">
          <NyliaButton
            handleClick={() => setClassInfo("preBallet1")}
            label={"Pre-Ballet I"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("preBallet2")}
            label={"Pre-Ballet II"}
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
            handleClick={() => setClassInfo("pointe1")}
            label={"Pointe I"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("pointe2")}
            label={"Pointe II"}
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
      <div className="page-title">
        <h1>CLASSES</h1>
        <p>{classPageDesc}</p>
      </div>
      <div className="mobile-class-dropdown">
        <DropdownButton id="dropdown-item-button" title="☰ Pre-Ballet I">
          <Dropdown.Item as="button" onClick={() => setClassInfo("preBallet1")}>
            Pre-Ballet I
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("preBallet2")}>
            Pre-Ballet II
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("ballet1")}>
            Ballet I
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("ballet2")}>
            Ballet II
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("ballet3")}>
            Ballet III
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("ballet4")}>
            Ballet IV
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("pointe1")}>
            Pointe I
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setClassInfo("pointe2")}>
            Pointe II
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => setClassInfo("adultBallet")}
          >
            Adult Ballet
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => setClassInfo("flexibility")}
          >
            Flexibility
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="right-info">
        <div className="desktop-page-title">
          <h1>CLASSES</h1>
          <p>{classPageDesc}</p>
        </div>
        <div className="class-schedule-button">
          <a
            href={ClassSchedule}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <NyliaButton
              addtClassName="class-schedule-button"
              handleClick={() => setClassInfo("Download Class Schedule")}
              label={"Download Class Schedule"}
            ></NyliaButton>
          </a>
        </div>
        <div className="class-desc-box">
          <div className="class-image">
            <img id="cur-class-image" src={classInfo.preBallet1.classImg}></img>
          </div>
          <div className="class-info"></div>
          <div className="class-schedule">
            <p id="cur-class-sched1">{classInfo.preBallet1.classSched1}</p>
            <p id="cur-class-sched2">{classInfo.preBallet1.classSched2}</p>
            <p id="cur-class-sched3"></p>
            <p id="cur-class-sched4"></p>
            <p id="cur-class-rgstr">{classInfo.preBallet1.classRgstr}</p>
          </div>
          <div className="class-description">
            <p id="cur-class-description">{classInfo.preBallet1.classDesc}</p>
          </div>
        </div>
        <div className="class-descriptions-button">
          <a
            href={ClassDescriptionBrochure}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <NyliaButton
              addtClassName="class-descriptions-button"
              handleClick={() => setClassInfo("Download Class Descriptions")}
              label={"Download Class Descriptions"}
            ></NyliaButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Classes;
