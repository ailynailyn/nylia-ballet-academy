import { React, useState } from "react";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import "./Classes.css";
import Footer from "../components/Footer";

import preBallet1Sm from "../assets/classesPage/evanButterfly300.JPG";
import preBallet1Md from "../assets/classesPage/evanButterfly768.JPG";
import preBallet1Lg from "../assets/classesPage/evanButterfly1280.JPG";
import preBallet1XL from "../assets/classesPage/evanButterfly2000.JPG";
import preBallet1SmWebp from "../assets/classesPage/evanButterfly300.webp";
import preBallet1MdWebp from "../assets/classesPage/evanButterfly768.webp";
import preBallet1LgWebp from "../assets/classesPage/evanButterfly1280.webp";
import preBallet1XLWebp from "../assets/classesPage/evanButterfly2000.webp";
import preBallet2Sm from "../assets/classesPage/preballetII-300.JPG";
import preBallet2Md from "../assets/classesPage/preballetII-768.JPG";
import preBallet2Lg from "../assets/classesPage/preballetII-1280.JPG";
import preBallet2XL from "../assets/classesPage/preballetII-2000.JPG";
import preBallet2SmWebp from "../assets/classesPage/preballetII-300.webp";
import preBallet2MdWebp from "../assets/classesPage/preballetII-768.webp";
import preBallet2LgWebp from "../assets/classesPage/preballetII-1280.webp";
import preBallet2XLWebp from "../assets/classesPage/preballetII-2000.webp";
import ballet1Sm from "../assets/classesPage/balletI-300.JPG";
import ballet1Md from "../assets/classesPage/balletI-768.JPG";
import ballet1Lg from "../assets/classesPage/balletI-1280.JPG";
import ballet1XL from "../assets/classesPage/balletI-2000.JPG";
import ballet1SmWebp from "../assets/classesPage/balletI-300.webp";
import ballet1MdWebp from "../assets/classesPage/balletI-768.webp";
import ballet1LgWebp from "../assets/classesPage/balletI-1280.webp";
import ballet1XLWebp from "../assets/classesPage/balletI-2000.webp";
import ballet2Sm from "../assets/classesPage/barreStretch300.JPG";
import ballet2Md from "../assets/classesPage/barreStretch768.JPG";
import ballet2Lg from "../assets/classesPage/barreStretch1280.JPG";
import ballet2XL from "../assets/classesPage/barreStretch2000.JPG";
import ballet2SmWebp from "../assets/classesPage/barreStretch300.webp";
import ballet2MdWebp from "../assets/classesPage/barreStretch768.webp";
import ballet2LgWebp from "../assets/classesPage/barreStretch1280.webp";
import ballet2XLWebp from "../assets/classesPage/barreStretch2000.webp";
import ballet3Sm from "../assets/classesPage/balletIII-300.JPG";
import ballet3Md from "../assets/classesPage/balletIII-768.JPG";
import ballet3Lg from "../assets/classesPage/balletIII-1280.JPG";
import ballet3XL from "../assets/classesPage/balletIII-2000.JPG";
import ballet3SmWebp from "../assets/classesPage/balletIII-300.webp";
import ballet3MdWebp from "../assets/classesPage/balletIII-768.webp";
import ballet3LgWebp from "../assets/classesPage/balletIII-1280.webp";
import ballet3XLWebp from "../assets/classesPage/balletIII-2000.webp";
import ballet4Sm from "../assets/classesPage/balletIV-300.JPG";
import ballet4Md from "../assets/classesPage/balletIV-768.JPG";
import ballet4Lg from "../assets/classesPage/balletIV-1280.JPG";
import ballet4XL from "../assets/classesPage/balletIV-2000.JPG";
import ballet4SmWebp from "../assets/classesPage/balletIV-300.webp";
import ballet4MdWebp from "../assets/classesPage/balletIV-768.webp";
import ballet4LgWebp from "../assets/classesPage/balletIV-1280.webp";
import ballet4XLWebp from "../assets/classesPage/balletIV-2000.webp";

import ballet5Sm from "../assets/classesPage/balletV-300.JPG";
import ballet5Md from "../assets/classesPage/balletV-768.JPG";
import ballet5Lg from "../assets/classesPage/balletV-1280.JPG";
import ballet5XL from "../assets/classesPage/balletV-2000.JPG";
import ballet5SmWebp from "../assets/classesPage/balletV-300.webp";
import ballet5MdWebp from "../assets/classesPage/balletV-768.webp";
import ballet5LgWebp from "../assets/classesPage/balletV-1280.webp";
import ballet5XLWebp from "../assets/classesPage/balletV-2000.webp";

import pointe1Sm from "../assets/classesPage/pointeI-300.JPG";
import pointe1Md from "../assets/classesPage/pointeI-768.JPG";
import pointe1Lg from "../assets/classesPage/pointeI-1280.JPG";
import pointe1XL from "../assets/classesPage/pointeI-2000.JPG";
import pointe1SmWebp from "../assets/classesPage/pointeI-300.webp";
import pointe1MdWebp from "../assets/classesPage/pointeI-768.webp";
import pointe1LgWebp from "../assets/classesPage/pointeI-1280.webp";
import pointe1XLWebp from "../assets/classesPage/pointeI-2000.webp";
import pointe2Sm from "../assets/classesPage/pointeII-300.JPG";
import pointe2Md from "../assets/classesPage/pointeII-768.JPG";
import pointe2Lg from "../assets/classesPage/pointeII-1280.JPG";
import pointe2XL from "../assets/classesPage/pointeII-2000.JPG";
import pointe2SmWebp from "../assets/classesPage/pointeII-300.webp";
import pointe2MdWebp from "../assets/classesPage/pointeII-768.webp";
import pointe2LgWebp from "../assets/classesPage/pointeII-1280.webp";
import pointe2XLWebp from "../assets/classesPage/pointeII-2000.webp";

import pointe3Sm from "../assets/classesPage/pointeIII-300.JPG";
import pointe3Md from "../assets/classesPage/pointeIII-768.JPG";
import pointe3Lg from "../assets/classesPage/pointeIII-1280.JPG";
import pointe3XL from "../assets/classesPage/pointeIII-2000.JPG";
import pointe3SmWebp from "../assets/classesPage/pointeIII-300.webp";
import pointe3MdWebp from "../assets/classesPage/pointeIII-768.webp";
import pointe3LgWebp from "../assets/classesPage/pointeIII-1280.webp";
import pointe3XLWebp from "../assets/classesPage/pointeIII-2000.webp";

import begAdultBalletSm from "../assets/classesPage/begAdultBallet-300.jpg";
import begAdultBalletMd from "../assets/classesPage/begAdultBallet-768.jpg";
import begAdultBalletLg from "../assets/classesPage/begAdultBallet-1280.jpg";
import begAdultBalletXL from "../assets/classesPage/begAdultBallet-2000.jpg";
import begAdultBalletSmWebp from "../assets/classesPage/begAdultBallet-300.webp";
import begAdultBalletMdWebp from "../assets/classesPage/begAdultBallet-768.webp";
import begAdultBalletLgWebp from "../assets/classesPage/begAdultBallet-1280.webp";
import begAdultBalletXLWebp from "../assets/classesPage/begAdultBallet-2000.webp";

import adultBalletSm from "../assets/classesPage/advAdultBallet-300.jpg";
import adultBalletMd from "../assets/classesPage/advAdultBallet-768.jpg";
import adultBalletLg from "../assets/classesPage/advAdultBallet-1280.jpg";
import adultBalletXL from "../assets/classesPage/advAdultBallet-2000.jpg";
import adultBalletSmWebp from "../assets/classesPage/advAdultBallet-300.webp";
import adultBalletMdWebp from "../assets/classesPage/advAdultBallet-768.webp";
import adultBalletLgWebp from "../assets/classesPage/advAdultBallet-1280.webp";
import adultBalletXLWebp from "../assets/classesPage/advAdultBallet-2000.webp";

import advAdultSm from "../assets/classesPage/adultBallet-300.jpg";
import advAdultMd from "../assets/classesPage/adultBallet-768.jpg";
import advAdultLg from "../assets/classesPage/adultBallet-1280.jpg";
import advAdultXL from "../assets/classesPage/adultBallet-2000.jpg";
import advAdultSmWebp from "../assets/classesPage/adultBallet-300.webp";
import advAdultMdWebp from "../assets/classesPage/adultBallet-768.webp";
import advAdultLgWebp from "../assets/classesPage/adultBallet-1280.webp";
import advAdultXLWebp from "../assets/classesPage/adultBallet-2000.webp";

import allAdultSm from "../assets/classesPage/AllLevels-300.jpg";
import allAdultMd from "../assets/classesPage/AllLevels-2000.jpg";

import flexibilitySm from "../assets/classesPage/ailynKeinaFold300.JPG";
import flexibilityMd from "../assets/classesPage/ailynKeinaFold768.JPG";
import flexibilityLg from "../assets/classesPage/ailynKeinaFold1280.JPG";
import flexibilityXL from "../assets/classesPage/ailynKeinaFold2000.JPG";
import flexibilitySmWebp from "../assets/classesPage/ailynKeinaFold300.webp";
import flexibilityMdWebp from "../assets/classesPage/ailynKeinaFold768.webp";
import flexibilityLgWebp from "../assets/classesPage/ailynKeinaFold1280.webp";
import flexibilityXLWebp from "../assets/classesPage/ailynKeinaFold2000.webp";

import WeeklyCalendar from "../assets/classesPage/2024-2025 Weekly Schedule.png";
import ClassDescriptionBrochure from "../assets/classesPage/Class Descriptions Brochure.pdf";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function Classes() {
  const rgstrRqd = "Registration Required";
  const dropInWlcm = "Drop-Ins Welcome";

  var classInfo = {
    preBallet1: {
      classTitle: "PRE-BALLET I",
      classAges: "Ages 4",
      classImg: preBallet1Sm,
      imgSet: `${preBallet1Sm} 300w, ${preBallet1Md} 768w, ${preBallet1Lg} 1280w, ${preBallet1XL} 2000w`,
      webpSet: `${preBallet1SmWebp} 300w, ${preBallet1MdWebp} 768w, ${preBallet1LgWebp} 1280w, ${preBallet1XLWebp} 2000w`,
      classSched1: "THURSDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "SATURDAY",
      classSched4: "9:00 - 10:00 AM",
      classDesc:
        "Designed for 4 year olds. Students are introduced to ballet vocabulary and class etiquette, focusing on the development of coordination, strength, flexibility, and musicality during their early development stages. It is important to us to maintain a creative and accepting learning environment to keep our tiny dancers motivated and engaged in the art of ballet.",
      classRgstr: rgstrRqd,
    },
    preBallet2: {
      classTitle: "PRE-BALLET II",
      classAges: "Age 5-6",
      classImg: preBallet2Sm,
      imgSet: `${preBallet2Sm} 300w, ${preBallet2Md} 768w, ${preBallet2Lg} 1280w, ${preBallet2XL} 2000w`,
      webpSet: `${preBallet2SmWebp} 300w, ${preBallet2MdWebp} 768w, ${preBallet2LgWebp} 1280w, ${preBallet2XLWebp} 2000w`,
      classSched1: "TUESDAY",
      classSched2: "4:30 - 5:30 PM",
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
      classSched1: "MONDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "WEDNESDAY",
      classSched4: "4:30 - 6:00 PM",
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
        "Ballet IV is an advanced-level class with a required placement class prior to enrollment. Students continue developing advanced technique with a strong focus on musicality, discipline, and professionalism. At this advanced level, students are given extended barre exercises that incorporate increasing demi-pointe work, as well as stretching and strengthening exercises. Classical ballet lines should be well established, and students are introduced to new vocabulary for traveling steps, elevation, and pirouettes. The use of arms and upper back continues to build on the foundation established in the previous level, further refining their expression and fluidity.<br /><br />Students at this level should have a strong grasp of classical ballet vocabulary and can now adequately demonstrate correct use of line and musical performance in their movements.<br /><br /><i>We highly recommend that students take class at least four times a week for optimal growth.<i/>",
      classRgstr: rgstrRqd,
    },
    ballet5: {
      classTitle: "BALLET V",
      classAges: "Placement by Evaluation",
      classImg: ballet5Sm,
      imgSet: `${ballet5Sm} 300w, ${ballet5Md} 768w, ${ballet5Lg} 1280w, ${ballet5XL} 2000w`,
      webpSet: `${ballet5SmWebp} 300w, ${ballet5MdWebp} 768w, ${ballet5LgWebp} 1280w, ${ballet5XLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Ballet V is an advanced-level class with a required placement class prior to enrollment. Students must demonstrate a thorough understanding of all positions, arabesque, and épaulement placement, as well as mastery of pirouette preparation and execution. Proper technique is critical at this level—students must show no signs of sickling, hip raising, or loss of control over their body, core, and limbs.<br/><br/>In this class, dancers continue to develop spatial awareness, body orientation, and full-body coordination, with an added focus on fluidity of movement. The curriculum includes advanced steps such as multiple pirouettes, turns in à la seconde, and beating jumps.<br/><br/><i>Material is taught quickly at this level, and students are expected to pick it up at a fast rate. We highly recommend that students take class at least four times a week for optimal growth.<i/>",
      classRgstr: rgstrRqd,
    },
    pointe1: {
      classTitle: "POINTE I",
      classAges: "Placement by Evaluation",
      classImg: pointe1Sm,
      imgSet: `${pointe1Sm} 300w, ${pointe1Md} 768w, ${pointe1Lg} 1280w, ${pointe1XL} 2000w`,
      webpSet: `${pointe1SmWebp} 300w, ${pointe1MdWebp} 768w, ${pointe1LgWebp} 1280w, ${pointe1XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "4:30 - 5:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe I is an invitation-only class for select Ballet III and IV students. This class serves as a preparation for pointe work and requires students to demonstrate very strong ankles, excellent body awareness, core stability, and a solid foundation in basic classical ballet technique. Emphasis is placed on ensuring that students are physically prepared to safely begin pointe work, with a focus on proper alignment, strength, and control to prevent injury.",
      classRgstr: rgstrRqd,
    },
    pointe2: {
      classTitle: "POINTE II",
      classAges: "Placement by Evaluation",
      classImg: pointe2Sm,
      imgSet: `${pointe2Sm} 300w, ${pointe2Md} 768w, ${pointe2Lg} 1280w, ${pointe2XL} 2000w`,
      webpSet: `${pointe2SmWebp} 300w, ${pointe2MdWebp} 768w, ${pointe2LgWebp} 1280w, ${pointe2XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "5:30 - 6:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe II is designed for students who have successfully completed Pointe I and have demonstrated the necessary strength, technique, and control to advance their pointe work. This class continues to build on the foundation established in Pointe I, focusing on increasing strength, stability, and endurance en pointe. Students will work on more complex combinations at the barre and in center, incorporating elements such as sustained balances, turns, and linking steps.<br/><br/>A strong emphasis is placed on precision, alignment, and fluidity of movement as students begin to explore more advanced pointe repertoire. In addition, this class prepares students for more demanding choreography, requiring a heightened sense of body awareness, coordination, and musicality. Safety remains a priority as students advance in their technical abilities.",

      classRgstr: rgstrRqd,
    },
    pointe3: {
      classTitle: "POINTE III",
      classAges: "Placement by Evaluation",
      classImg: pointe3Sm,
      imgSet: `${pointe3Sm} 300w, ${pointe3Md} 768w, ${pointe3Lg} 1280w, ${pointe3XL} 2000w`,
      webpSet: `${pointe3SmWebp} 300w, ${pointe3MdWebp} 768w, ${pointe3LgWebp} 1280w, ${pointe3XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "6:30 - 7:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Pointe III is for students who have progressed beyond Pointe II and are ready for more demanding work en pointe. This class focuses on developing greater stamina, precision, and artistry. Students will work on intricate combinations at the barre and in the center, incorporating more challenging turns, extended balances, and petit allegro movements en pointe.<br/><br/>The class emphasizes seamless transitions between steps, improving foot articulation and strength, and expanding the range of movement en pointe. Students also begin to focus on performance quality and expression, integrating musicality and dynamics into their pointe work. Pointe III prepares dancers for pre-professional level pointe technique, with attention to both technical and artistic development.",
      classRgstr: rgstrRqd,
    },
    pointeAdv: {
      classTitle: "ADVANCED POINTE",
      classAges: "Placement by Evaluation",
      classImg: pointe2Sm,
      imgSet: `${pointe2Sm} 300w, ${pointe2Md} 768w, ${pointe2Lg} 1280w, ${pointe2XL} 2000w`,
      webpSet: `${pointe2SmWebp} 300w, ${pointe2MdWebp} 768w, ${pointe2LgWebp} 1280w, ${pointe2XLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "6:00 - 7:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Advanced Pointe is the highest level of pointe training, designed for experienced dancers who have mastered the technical requirements of pointe work and are ready to refine their performance abilities. This class pushes students to achieve greater control, strength, and fluidity in advanced movements. Dancers will execute complex sequences with multiple pirouettes, sustained balances, and intricate footwork, both at the barre and in the center.<br/><br/>There is a strong emphasis on the artistry of pointe work, with students expected to demonstrate a high level of musicality, grace, and expression in their movements. Dancers in Advanced Pointe will work on classical variations and repertoire, preparing for performances or auditions. This class also focuses on building the endurance necessary for full-length ballets and complex pointe choreography.",
      classRgstr: rgstrRqd,
    },
    absBegAdultBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Absolute Beginner -",
      classImg: begAdultBalletSm,
      imgSet: `${begAdultBalletSm} 300w, ${begAdultBalletMd} 768w, ${begAdultBalletLg} 1280w, ${begAdultBalletXL} 2000w`,
      webpSet: `${begAdultBalletSmWebp} 300w, ${begAdultBalletMdWebp} 768w, ${begAdultBalletLgWebp} 1280w, ${begAdultBalletXLWebp} 2000w`,
      classSched1: "FRIDAY",
      classSched2: "7:30 - 8:30 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Learn the fundamentals of the ballet technique in a welcoming and supportive environment! This workshop is designed for students to learn the basics of ballet terminology and class etiquette through detailed explanations and practice. Students will gain an understanding of correct body alignment, footwork coordination, and musicality while dancing easy-to-follow combinations.",
      classRgstr: dropInWlcm,
    },
    begAdultBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Beginner -",
      classImg: begAdultBalletSm,
      imgSet: `${begAdultBalletSm} 300w, ${begAdultBalletMd} 768w, ${begAdultBalletLg} 1280w, ${begAdultBalletXL} 2000w`,
      webpSet: `${begAdultBalletSmWebp} 300w, ${begAdultBalletMdWebp} 768w, ${begAdultBalletLgWebp} 1280w, ${begAdultBalletXLWebp} 2000w`,
      classSched1: "TUESDAY & THURSDAY",
      classSched2: "7:00 - 8:00 PM",
      classSched3: "",
      classSched4: "",
      classDesc:
        "Come enjoy the beauty and grace of classical ballet! This class will cover basic ballet positions, steps and vocabulary with a focus on the student's awareness of proper posture and body alignment. Standing barre work and center floor exercises will be given to enhance coordination, strength, balance and flexibility. Participants will also develop a sense of musical awareness and movement quality. No prior ballet experience necessary. ",
      classRgstr: dropInWlcm,
    },
    adultIntBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Intermediate -",
      classImg: adultBalletSm,
      imgSet: `${adultBalletSm} 300w, ${adultBalletMd} 768w, ${adultBalletLg} 1280w, ${adultBalletXL} 2000w`,
      webpSet: `${adultBalletSmWebp} 300w, ${adultBalletMdWebp} 768w, ${adultBalletLgWebp} 1280w, ${adultBalletXLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "7:00 - 8:30 PM",
      classSched3: "SATURDAY",
      classSched4: "12:00 - 1:30 PM",
      classDesc:
        "This class is designed for intermediate ballet dancers. Participants will strengthen their ballet technique aimed to improve alignment and balance, strengthen muscles, and increase flexibility.",
      classRgstr: dropInWlcm,
    },
    adultAdvBallet: {
      classTitle: "ADULT BALLET",
      classAges: "- Advanced -",
      classImg: advAdultSm,
      imgSet: `${advAdultSm} 300w, ${advAdultMd} 768w, ${advAdultLg} 1280w, ${advAdultXL} 2000w`,
      webpSet: `${advAdultSmWebp} 300w, ${advAdultMdWebp} 768w, ${advAdultLgWebp} 1280w, ${advAdultXLWebp} 2000w`,
      classSched1: "MONDAY & THURSDAY",
      classSched2: "5:30 - 7:00 PM",
      classSched3: "SATURDAY",
      classSched4: "12:00 - 1:30 PM",
      classDesc:
        "This class is designed for advanced ballet dancers. Extensive prior ballet experience is required. We will focus on classical ballet technique through a professional class progression. Barre work, center and across the floor exercises are designed to better your technique, as well as performance quality and confidence. With quality and knowledgeable teaching, and an encouraging environment, these classes will be a perfect fit for those who aspire to improve their dancing, and artistry!",
      classRgstr: dropInWlcm,
    },
    // adultAllLevelsBallet: {
    //   classTitle: "ADULT BALLET",
    //   classAges: "- All Levels -",
    //   classImg: allAdultSm,
    //   imgSet: `${allAdultSm} 300w, ${allAdultMd} 768w, ${allAdultMd} 1280w, ${allAdultMd} 2000w`,
    //   webpSet: `${allAdultSm} 300w, ${allAdultMd} 768w, ${allAdultMd} 1280w, ${allAdultMd} 2000w`,
    //   classSched1: "TUESDAY & THURSDAY",
    //   classSched2: "10:00 - 11:30 AM",
    //   classSched3: "",
    //   classSched4: "",
    //   classDesc:
    //     "These class is for all dancers, regardless of any past experience! Our instructor caters to a broad spectrum of students. Whether you become a dedicated student who graduates to pointe work, or you’re content to fly under the radar, each level has it’s own benefits and challenges. No matter what level you’re in, remember, the ultimate goal of adult ballet class is to have fun!",
    //   classRgstr: dropInWlcm,
    // },
    flexibility: {
      classTitle: "FLEXIBILITY",
      classAges: "- All Ages -",
      classImg: flexibilitySm,
      imgSet: `${flexibilitySm} 300w, ${flexibilityMd} 768w, ${flexibilityLg} 1280w, ${flexibilityXL} 2000w`,
      webpSet: `${flexibilitySmWebp} 300w, ${flexibilityMdWebp} 768w, ${flexibilityLgWebp} 1280w, ${flexibilityXLWebp} 2000w`,
      classSched1: "MONDAY & WEDNESDAY",
      classSched2: "6:00 PM - 7:00 PM",
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
    window.scrollTo(0, 0);
  };

  const classPageDesc =
    "We offer classes from Monday to Saturday for children and adults, ages 4+. Look through the classes we offer below for more information.";

  return (
    <div className="classes-container">
      <div className="page-title">
        <h1>CLASSES</h1>
        <p>{classPageDesc}</p>
      </div>

      <div className="right-info">
        <div className="desktop-page-title">
          <h1>CLASSES</h1>
          <p>{classPageDesc}</p>
        </div>

        <div className="class-desc-box">
          <div className="mobile-class-dropdown">
            <DropdownButton id="dropdown-item-button" title="☰ SELECT CLASS">
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("preBallet1")}
              >
                Pre-Ballet I
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("preBallet2")}
              >
                Pre-Ballet II
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("ballet1")}
              >
                Ballet I
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("ballet2")}
              >
                Ballet II
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("ballet3")}
              >
                Ballet III
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("ballet4")}
              >
                Ballet IV
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("ballet5")}
              >
                Ballet V
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("pointe1")}
              >
                Pointe I
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("pointe2")}
              >
                Pointe II
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("pointe3")}
              >
                Pointe III
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("pointeAdv")}
              >
                Advanced Pointe
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("begAdultBallet")}
              >
                Adult Ballet - Beg
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("adultIntBallet")}
              >
                Adult Ballet - Int
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("adultAdvBallet")}
              >
                Adult Ballet - Adv
              </Dropdown.Item>

              <Dropdown.Item
                as="button"
                onClick={() => setClassInfo("flexibility")}
              >
                Flexibility
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="class-title">
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
          <div className="class-title">
            <h1 id="class-title-header">{classInfo.preBallet1.classTitle}</h1>
          </div>

          <div className="class-info"></div>
          <div className="class-description">
            <p id="cur-class-description">{classInfo.preBallet1.classDesc}</p>
          </div>
          <div className="class-schedule">
            <p id="cur-class-sched1">{classInfo.preBallet1.classSched1}</p>
            <p id="cur-class-sched2">{classInfo.preBallet1.classSched2}</p>
            <p id="cur-class-sched3">{classInfo.preBallet1.classSched3}</p>
            <p id="cur-class-sched4">{classInfo.preBallet1.classSched4}</p>
            <p id="cur-class-rgstr">{classInfo.preBallet1.classRgstr}</p>
          </div>
        </div>
        <div className="learn-more-classes">
          <h2>Learn about our class offerings</h2>
          <p>
            Our mission is to inspire students and cultivate a love for dance.
            We exist to nurture creativity and encourage each student to reach
            their respective goals while at the same educating our community
            about the narrative power of the art form.
          </p>
          <ButtonToolbar>
            <ButtonGroup vertical>
              <DropdownButton
                as={ButtonGroup}
                title="Pre-Ballet"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item
                  eventKey="1"
                  as="button"
                  onClick={() => setClassInfo("preBallet1")}
                >
                  Pre-Ballet I
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("preBallet2")}
                >
                  Pre-Ballet II
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                title="Ballet"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item
                  eventKey="1"
                  as="button"
                  onClick={() => setClassInfo("ballet1")}
                >
                  Ballet I
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("ballet2")}
                >
                  Ballet II
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  as="button"
                  onClick={() => setClassInfo("ballet3")}
                >
                  Ballet III
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  as="button"
                  onClick={() => setClassInfo("ballet4")}
                >
                  Ballet IV
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="5"
                  as="button"
                  onClick={() => setClassInfo("ballet5")}
                >
                  Ballet V
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                title="Pointe"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item
                  eventKey="1"
                  as="button"
                  onClick={() => setClassInfo("pointe1")}
                >
                  Pointe I
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("pointe2")}
                >
                  Pointe II
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("pointe3")}
                >
                  Pointe III
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("pointeAdv")}
                >
                  Advanced Pointe
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                title="Adult Ballet"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item
                  eventKey="2"
                  as="button"
                  onClick={() => setClassInfo("begAdultBallet")}
                >
                  Beginner
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  as="button"
                  onClick={() => setClassInfo("adultIntBallet")}
                >
                  Intermediate
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  as="button"
                  onClick={() => setClassInfo("adultAdvBallet")}
                >
                  Advanced
                </Dropdown.Item>
              </DropdownButton>

              <Button as="button" onClick={() => setClassInfo("flexibility")}>
                Flexibility
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <p>
            <br></br>
            <b>Select a class to learn more</b>
          </p>
        </div>
        <div className="full-schedule">
          <h1>WEEKLY SCHEDULE</h1>
          <img
            alt="Nylia Ballet Academy teacher helps adult student with posture."
            src={WeeklyCalendar}
            srcSet={`${WeeklyCalendar} 300w, ${WeeklyCalendar} 768w, ${WeeklyCalendar} 1280w, ${WeeklyCalendar} 2000w`}
          />
          <div className="class-schedule-button">
            <a
              href={WeeklyCalendar}
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Classes;
