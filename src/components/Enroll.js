import { React } from "react";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import enrollmentSm from "../assets/luisaAilynBallet300.JPG";
import enrollmentMd from "../assets/luisaAilynBallet768.JPG";
import enrollmentLg from "../assets/luisaAilynBallet1280.JPG";
import enrollmentXL from "../assets/luisaAilynBallet2000.JPG";

import NyliaStudentRegistration from "../assets/NyliaStudentRegistration.pdf";
import TuitionPackages from "../assets/TuitionPackages.pdf";

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
          and every January thereafter.
        </p>
        <a
          id="enrollment-page-button"
          href={TuitionPackages}
          without
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Nylia Ballet Academy Tuition Information"
        >
          <NyliaButton
            // handleClick={() => setClassInfo("preBallet1")}
            label={"Tuition Information"}
          ></NyliaButton>
        </a>
      </div>
    </div>
  );
}

export default Enroll;
