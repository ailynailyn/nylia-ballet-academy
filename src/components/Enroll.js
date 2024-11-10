import { React } from "react";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import enrollmentSm from "../assets/enrollPage/ThreeBallerinas-300.JPG";
import enrollmentMd from "../assets/enrollPage/ThreeBallerinas-768.JPG";
import enrollmentLg from "../assets/enrollPage/ThreeBallerinas-1280.JPG";
import enrollmentXL from "../assets/enrollPage/ThreeBallerinas-2000.JPG";

import blueBallerinaSm from "../assets/enrollPage/blueBallerinaPoster-300.png";
import blueBallerinaMd from "../assets/enrollPage/blueBallerinaPoster-768.png";
import blueBallerinaLg from "../assets/enrollPage/blueBallerinaPoster-1280.png";
import blueBallerinaXL from "../assets/enrollPage/blueBallerinaPoster-2000.png";

import NyliaStudentRegistration from "../assets/enrollPage/NyliaStudentRegistration.pdf";
import TuitionPackages from "../assets/enrollPage/TuitionPackages.pdf";
import AcademyEtiquette from "../assets/enrollPage/AcademyEtiquette.pdf";
import AcademyUniform from "../assets/enrollPage/Academy Uniform.pdf";
import Handbook from "../assets/enrollPage/NyliaBalletAcademyHandbook2024.pdf";
import Footer from "../components/Footer";

import "./Enroll.css";

function Enroll() {
  return (
    <div class="enroll-container">
      <div className="registration-section">
        <h1>ENROLLMENT</h1>
        <p>
          New students are accepted throughout the year. All new students are
          given a trial class to determine proper class placement.
          <br />
          <br />
          Stop by today to complete and finalize your registration!
          <br />
          <br />
          Download our registration packet below. Email your registration packet
          to us at info@nyliaballetacademy.com to secure your spot at Nylia
          Ballet Academy and schedule your trial class for class placement!
        </p>
        <a
          id="enrollment-page-button"
          href={NyliaStudentRegistration}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Registration Form"
        >
          <NyliaButton
            // handleClick={() => setClassInfo("preBallet1")}
            label={"Registration Form"}
          ></NyliaButton>
        </a>
      </div>
      <img
        alt="Nylia Ballet Academy teacher helps adult student with posture."
        src={enrollmentSm}
        srcSet={`${enrollmentSm} 300w, ${enrollmentMd} 768w, ${enrollmentLg} 1280w, ${enrollmentXL} 2000w`}
      />

      <div className="tuition-section">
        <h1>TUITION</h1>
        <p>
          Tuition is due on the 1st of each month. A late fee of $10 is charged
          for late tuition payments.
          <br />
          <br />
          An annual registration fee of $45 is due at the time of registration
          and annually thereafter.
        </p>
        <a
          id="enrollment-page-button"
          href={TuitionPackages}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Tuition Information"
        >
          <NyliaButton label={"Tuition Information"}></NyliaButton>
        </a>
      </div>
      <div className="rules-section">
        <h1>RULES AND ETIQUETTE</h1>
        <p>
          <br />
          <p id="quote">
            "Discipline is the bridge between goals and accomplishments."
          </p>
          <br />
          All Nylia Ballet Academy dancers must adhere to the Academy etiquette
          guidelines.
        </p>
        <a
          id="etiquette-page-button"
          href={AcademyEtiquette}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Etiquette"
        >
          <NyliaButton label={"Academy Etiquette"}></NyliaButton>
        </a>
      </div>
      <div className="uniform-section">
        <h1>CLASS ATTIRE</h1>
        <p>
          The Academy uniform is an integral part of the Nylia Ballet Academy
          experience. The uniform indicates that students are in a special
          learning environment and allows teachers to clearly see the student’s
          body. This allows instructors to provide feedback on proper alignment
          and correct positions.
        </p>
        <a
          id="uniform-page-button"
          href={AcademyUniform}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Uniform"
        >
          <NyliaButton label={"Academy Uniform"}></NyliaButton>
        </a>
      </div>
      <div id="ballerinaImg">
        <img
          alt="Nylia Ballet Academy ballerina in blue."
          src={blueBallerinaSm}
          srcSet={`${blueBallerinaSm} 300w, ${blueBallerinaMd} 768w, ${blueBallerinaLg} 1280w, ${blueBallerinaXL} 2000w`}
        />
      </div>

      <div className="handbook-section">
        <h1>STUDENT HANDBOOK</h1>
        <p>
          Thanks for choosing Nylia Ballet Academy! A printable version of the
          Student Handbook is available here.
        </p>
        <a
          id="handbook-page-button"
          href={Handbook}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Student Handbook"
        >
          <NyliaButton label={"Student Handbook"}></NyliaButton>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Enroll;
