import { React, useState } from "react";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import "./Classes.css";

import preBallet1Sm from "../assets/evanButterfly300.JPG";
import preBallet1Md from "../assets/evanButterfly768.JPG";
import preBallet1Lg from "../assets/evanButterfly1280.JPG";
import preBallet1XL from "../assets/evanButterfly2000.JPG";
import preBallet1SmWebp from "../assets/evanButterfly300.webp";
import preBallet1MdWebp from "../assets/evanButterfly768.webp";
import preBallet1LgWebp from "../assets/evanButterfly1280.webp";
import preBallet1XLWebp from "../assets/evanButterfly2000.webp";
import preBallet2Sm from "../assets/mabelAndAilyn300.JPG";
import preBallet2Md from "../assets/mabelAndAilyn768.JPG";
import preBallet2Lg from "../assets/mabelAndAilyn1280.JPG";
import preBallet2XL from "../assets/mabelAndAilyn2000.JPG";
import preBallet2SmWebp from "../assets/mabelAndAilyn300.webp";
import preBallet2MdWebp from "../assets/mabelAndAilyn768.webp";
import preBallet2LgWebp from "../assets/mabelAndAilyn1280.webp";
import preBallet2XLWebp from "../assets/mabelAndAilyn2000.webp";
import ballet1Sm from "../assets/keinaPose300.JPG";
import ballet1Md from "../assets/keinaPose768.JPG";
import ballet1Lg from "../assets/keinaPose1280.JPG";
import ballet1XL from "../assets/keinaPose2000.JPG";
import ballet1SmWebp from "../assets/keinaPose300.webp";
import ballet1MdWebp from "../assets/keinaPose768.webp";
import ballet1LgWebp from "../assets/keinaPose1280.webp";
import ballet1XLWebp from "../assets/keinaPose2000.webp";
import ballet2Sm from "../assets/barreStretch300.JPG";
import ballet2Md from "../assets/barreStretch768.JPG";
import ballet2Lg from "../assets/barreStretch1280.JPG";
import ballet2XL from "../assets/barreStretch2000.JPG";
import ballet2SmWebp from "../assets/barreStretch300.webp";
import ballet2MdWebp from "../assets/barreStretch768.webp";
import ballet2LgWebp from "../assets/barreStretch1280.webp";
import ballet2XLWebp from "../assets/barreStretch2000.webp";
import ballet3Sm from "../assets/zoePose300.JPG";
import ballet3Md from "../assets/zoePose768.JPG";
import ballet3Lg from "../assets/zoePose1280.JPG";
import ballet3XL from "../assets/zoePose2000.JPG";
import ballet3SmWebp from "../assets/zoePose300.webp";
import ballet3MdWebp from "../assets/zoePose768.webp";
import ballet3LgWebp from "../assets/zoePose1280.webp";
import ballet3XLWebp from "../assets/zoePose2000.webp";
import ballet4Sm from "../assets/terePose300.JPG";
import ballet4Md from "../assets/terePose768.JPG";
import ballet4Lg from "../assets/terePose1280.JPG";
import ballet4XL from "../assets/terePose2000.JPG";
import ballet4SmWebp from "../assets/terePose300.webp";
import ballet4MdWebp from "../assets/terePose768.webp";
import ballet4LgWebp from "../assets/terePose1280.webp";
import ballet4XLWebp from "../assets/terePose2000.webp";
import pointe1Sm from "../assets/pointeTendu300.JPG";
import pointe1Md from "../assets/pointeTendu768.JPG";
import pointe1Lg from "../assets/pointeTendu1280.JPG";
import pointe1XL from "../assets/pointeTendu2000.JPG";
import pointe1SmWebp from "../assets/pointeTendu300.webp";
import pointe1MdWebp from "../assets/pointeTendu768.webp";
import pointe1LgWebp from "../assets/pointeTendu1280.webp";
import pointe1XLWebp from "../assets/pointeTendu2000.webp";
import pointe2Sm from "../assets/pointeTrio300.JPG";
import pointe2Md from "../assets/pointeTrio768.JPG";
import pointe2Lg from "../assets/pointeTrio1280.JPG";
import pointe2XL from "../assets/pointeTrio2000.JPG";
import pointe2SmWebp from "../assets/pointeTrio300.webp";
import pointe2MdWebp from "../assets/pointeTrio768.webp";
import pointe2LgWebp from "../assets/pointeTrio1280.webp";
import pointe2XLWebp from "../assets/pointeTrio2000.webp";
import adultBalletSm from "../assets/marianaAdultBallet300.JPG";
import adultBalletMd from "../assets/marianaAdultBallet768.JPG";
import adultBalletLg from "../assets/marianaAdultBallet1280.JPG";
import adultBalletXL from "../assets/marianaAdultBallet2000.JPG";
import adultBalletSmWebp from "../assets/marianaAdultBallet300.webp";
import adultBalletMdWebp from "../assets/marianaAdultBallet768.webp";
import adultBalletLgWebp from "../assets/marianaAdultBallet1280.webp";
import adultBalletXLWebp from "../assets/marianaAdultBallet2000.webp";
import flexibilitySm from "../assets/ailynKeinaFold300.JPG";
import flexibilityMd from "../assets/ailynKeinaFold768.JPG";
import flexibilityLg from "../assets/ailynKeinaFold1280.JPG";
import flexibilityXL from "../assets/ailynKeinaFold2000.JPG";
import flexibilitySmWebp from "../assets/ailynKeinaFold300.webp";
import flexibilityMdWebp from "../assets/ailynKeinaFold768.webp";
import flexibilityLgWebp from "../assets/ailynKeinaFold1280.webp";
import flexibilityXLWebp from "../assets/ailynKeinaFold2000.webp";

import ClassSchedule from "../assets/NyliaSchedule.pdf";
import ClassDescriptionBrochure from "../assets/Class Descriptions Brochure.pdf";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Classes() {
  const rgstrRqd = "Registration Required";
  const dropInWlcm = "Drop-Ins Welcome";

  var classInfo = {
    preBallet1: {
      classTitle: "PRE-BALLET I",
      classAges: "Ages 3 - 4",
      classImg: preBallet1Sm,
      imgSet: `${preBallet1Sm} 300w, ${preBallet1Md} 768w, ${preBallet1Lg} 1280w, ${preBallet1XL} 2000w`,
      webpSet: `${preBallet1SmWebp} 300w, ${preBallet1MdWebp} 768w, ${preBallet1LgWebp} 1280w, ${preBallet1XLWebp} 2000w`,
      classSched1: "THURSDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "SATURDAY",
      classSched4: "9:00 - 10:00 AM",
      classDesc:
        "Designed for 3-4 year olds. Students are introduced to ballet vocabulary and class etiquette, focusing on the development of coordination, strength, flexibility, and musicality during their early development stages. It is important to us to maintain a creative and accepting learning environment to keep our tiny dancers motivated and engaged in the art of ballet.",
      classRgstr: rgstrRqd,
    },
    preBallet2: {
      classTitle: "PRE-BALLET II",
      classAges: "Ages 5 - 6",
      classImg: preBallet2Sm,
      imgSet: `${preBallet2Sm} 300w, ${preBallet2Md} 768w, ${preBallet2Lg} 1280w, ${preBallet2XL} 2000w`,
      webpSet: `${preBallet2SmWebp} 300w, ${preBallet2MdWebp} 768w, ${preBallet2LgWebp} 1280w, ${preBallet2XLWebp} 2000w`,
      classSched1: "THURSDAY",
      classSched2: "5:30 - 6:30 PM",
      classSched3: "SATURDAY",
      classSched4: "10:00 - 11:00 AM",
      classDesc:
        "Designed for 5-6 year olds. Pre-Ballet II is a class designed to introduce the fundamentals of classical ballet technique. The class begins with conditioning, strengthening and stretching exercises to help students use, and isolate, certain muscle groups pertaining to dance. This class will enhance the student’s coordination, balance and flexibility, as well as musicality.",
      classRgstr: rgstrRqd,
    },
    ballet1: {
      classTitle: "BALLET I",
      classAges: "Placement by Evaluation",
      classImg: ballet1Sm,
      imgSet: `${ballet1Sm} 300w, ${ballet1Md} 768w, ${ballet1Lg} 1280w, ${ballet1XL} 2000w`,
      webpSet: `${ballet1SmWebp} 300w, ${ballet1MdWebp} 768w, ${ballet1LgWebp} 1280w, ${ballet1XLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet I will include basic barre exercises, as well as center work implementing the study of classical ballet vocabulary. Instruction involves strong concentration on correct body alignment, along with the development of attention span, discipline, and musicality.",
      classRgstr: rgstrRqd,
    },
    ballet2: {
      classTitle: "BALLET II",
      classAges: "Placement by Evaluation",
      classImg: ballet2Sm,
      imgSet: `${ballet2Sm} 300w, ${ballet2Md} 768w, ${ballet2Lg} 1280w, ${ballet2XL} 2000w`,
      webpSet: `${ballet2SmWebp} 300w, ${ballet2MdWebp} 768w, ${ballet2LgWebp} 1280w, ${ballet2XLWebp} 2000w`,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet II is for students who have studied the basics and are ready to concentrate on developing a broader ballet vocabulary through barre work, center exercises, and across the floor combinations designed to improve coordination, flexibility, endurance, and musicality. This class will strengthen the feet and ankles to prepare the students for pointe shoes, and more advanced technique.",
      classRgstr: rgstrRqd,
    },
    ballet3: {
      classTitle: "BALLET III",
      classAges: "Placement by Evaluation",
      classImg: ballet3Sm,
      imgSet: `${ballet3Sm} 300w, ${ballet3Md} 768w, ${ballet3Lg} 1280w, ${ballet3XL} 2000w`,
      webpSet: `${ballet3SmWebp} 300w, ${ballet3MdWebp} 768w, ${ballet3LgWebp} 1280w, ${ballet3XLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet III is an intermediate class designed with focus on classical ballet technique through a professional class progression. We highly recommend students at this level take class at least three times a week for optimal growth. Students will build on their skills and strength, and refine their movement with attention to technique, execution and artistry.",
      classRgstr: rgstrRqd,
    },
    ballet4: {
      classTitle: "BALLET IV",
      classAges: "Placement by Evaluation",
      classImg: ballet4Sm,
      imgSet: `${ballet4Sm} 300w, ${ballet4Md} 768w, ${ballet4Lg} 1280w, ${ballet4XL} 2000w`,
      webpSet: `${ballet4SmWebp} 300w, ${ballet4MdWebp} 768w, ${ballet4LgWebp} 1280w, ${ballet4XLWebp} 2000w`,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet IV is an advanced level class with a required placement class prior for enrollment. Students learn advanced technique, while emphasizing musicality, discipline, and professionalism. We highly recommend students at this level to take class at least four times a week for optimal growth.",
      classRgstr: rgstrRqd,
    },
    pointe1: {
      classTitle: "POINTE I",
      classAges: "Placement by Evaluation",
      classImg: pointe1Sm,
      imgSet: `${pointe1Sm} 300w, ${pointe1Md} 768w, ${pointe1Lg} 1280w, ${pointe1XL} 2000w`,
      webpSet: `${pointe1SmWebp} 300w, ${pointe1MdWebp} 768w, ${pointe1LgWebp} 1280w, ${pointe1XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "5:00 - 6:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe I class is by invitation only for our Ballet III & IV students. This class is an introduction to pointe work, requiring students to have very strong ankles, body awareness, core stability, along with basic classical ballet technique.",
      classRgstr: rgstrRqd,
    },
    pointe2: {
      classTitle: "POINTE II",
      classAges: "Placement by Evaluation",
      classImg: pointe2Sm,
      imgSet: `${pointe2Sm} 300w, ${pointe2Md} 768w, ${pointe2Lg} 1280w, ${pointe2XL} 2000w`,
      webpSet: `${pointe2SmWebp} 300w, ${pointe2MdWebp} 768w, ${pointe2LgWebp} 1280w, ${pointe2XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "6:00 - 7:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe II students will be invited to participate on an individual basis when they have the necessary physical and technical development. These classes are perfect for the ballerina who is wanting to take their ballet technique to the next level. This class includes classical variations, the study of solo dances from historically established classical ballet repertoire.",
      classRgstr: rgstrRqd,
    },
    adultBegBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Beginner -",
      classImg: adultBalletSm,
      imgSet: `${adultBalletSm} 300w, ${adultBalletMd} 768w, ${adultBalletLg} 1280w, ${adultBalletXL} 2000w`,
      webpSet: `${adultBalletSmWebp} 300w, ${adultBalletMdWebp} 768w, ${adultBalletLgWebp} 1280w, ${adultBalletXLWebp} 2000w`,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "7:00 - 8:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Adult Ballet class is designed for dancers of all abilities. Participants will strengthen their ballet technique aimed to improve alignment and balance, strengthen muscles, and increase flexibility. In this class, the teacher will make sure to accommodate to participants of all levels in order to create a comfortable environment for growth.",
      classRgstr: dropInWlcm,
    },
    adultAdvBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Intermediate/Advanced -",
      classImg: adultBalletSm,
      imgSet: `${adultBalletSm} 300w, ${adultBalletMd} 768w, ${adultBalletLg} 1280w, ${adultBalletXL} 2000w`,
      webpSet: `${adultBalletSmWebp} 300w, ${adultBalletMdWebp} 768w, ${adultBalletLgWebp} 1280w, ${adultBalletXLWebp} 2000w`,
      classSched1: "MONDAY, TUESDAY & THURSDAY",
      classSched2: "7:00 - 8:30 PM",
      classSched3: "SATURDAY",
      classSched4: "12:00 - 1:30 PM",
      classDesc:
        "This class is designed for intermediate and advanced dancers. Participants will strengthen their ballet technique aimed to improve alignment and balance, strengthen muscles, and increase flexibility.",
      classRgstr: dropInWlcm,
    },
    flexibility: {
      classTitle: "FLEXIBILITY & CONDITIONING",
      classAges: "- All Ages -",
      classImg: flexibilitySm,
      imgSet: `${flexibilitySm} 300w, ${flexibilityMd} 768w, ${flexibilityLg} 1280w, ${flexibilityXL} 2000w`,
      webpSet: `${flexibilitySmWebp} 300w, ${flexibilityMdWebp} 768w, ${flexibilityLgWebp} 1280w, ${flexibilityXLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "6:00 - 7:00 PM",
      classSched3: "SATURDAY",
      classSched4: "11:00 AM - 12:00 PM",
      classDesc:
        "Flexibility classes introduce various techniques of flexibility training as well as techniques that are especially designed to improve your range of movement and mobility. The focus of the class is to stretch and lengthen the muscles of the body, and to strengthen them to be able to better execute ballet technique or simply utilize in one’s own daily routine.",
      classRgstr: dropInWlcm,
    },
  };

  const setClassInfo = (curClass) => {
    document.getElementById("dropdown-item-button").innerHTML =
      "☰ " + classInfo[curClass].classTitle;
    document.getElementById("cur-class-image").src =
      classInfo[curClass].classImg;
    document.getElementById("cur-class-jpeg").srcset =
      classInfo[curClass].imgSet;
    document.getElementById("cur-class-webp").srcset =
      classInfo[curClass].webpSet; // todo
    document.getElementById("class-title-header").innerHTML =
      classInfo[curClass].classTitle;
    document.getElementById("cur-class-ages").innerHTML =
      classInfo[curClass].classAges;
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
            handleClick={() => setClassInfo("adultBegBallet")}
            label={"Adult Ballet - Beginner"}
          ></NyliaButton>
          <NyliaButton
            handleClick={() => setClassInfo("adultAdvBallet")}
            label={"Adult Ballet - Advanced"}
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
            onClick={() => setClassInfo("adultBegBallet")}
          >
            Adult Ballet - Beginner
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => setClassInfo("adultAdvBallet")}
          >
            Adult Ballet - Advanced
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
            aria-label="Download Nylia Ballet Academy Class Schedule"
          >
            <NyliaButton
              addtClassName="class-schedule-button"
              handleClick={() => setClassInfo("Download Class Schedule")}
              label={"Download Class Schedule"}
            ></NyliaButton>
          </a>
        </div>
        <div className="class-desc-box">
          <div className="class-title">
            <h1 id="class-title-header">{classInfo.preBallet1.classTitle}</h1>
            <p id="cur-class-ages">{classInfo.preBallet1.classAges}</p>
          </div>
          <div className="class-image">
            <picture>
              <source
                id="cur-class-webp"
                srcSet={classInfo.preBallet1.imgSet}
                type="image/webp"
              />
              <source
                id="cur-class-jpeg"
                srcSet={classInfo.preBallet1.imgSet}
                type="image/jpeg"
              />
              <img
                id="cur-class-image"
                src={classInfo.preBallet1.classImg}
                alt="El Paso dancers in Ballet class."
              ></img>
            </picture>
          </div>
          <div className="class-info"></div>
          <div className="class-schedule">
            <p id="cur-class-sched1">{classInfo.preBallet1.classSched1}</p>
            <p id="cur-class-sched2">{classInfo.preBallet1.classSched2}</p>
            <p id="cur-class-sched3">{classInfo.preBallet1.classSched3}</p>
            <p id="cur-class-sched4">{classInfo.preBallet1.classSched4}</p>
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
            aria-label="Download Nylia Ballet Academy Class Descriptions"
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
