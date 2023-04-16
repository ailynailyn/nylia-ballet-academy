import { React } from "react";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import enrollmentImg from "../assets/enrollmentImg.jpeg";

import NyliaStudentRegistration from "../assets/NyliaStudentRegistration.pdf";
import TuitionPackages from "../assets/TuitionPackages.pdf";

import "./Enroll.css";

function Enroll() {
  return (
    <div class="enroll-container">
      <div className="registration-section">
        <h1>Registration</h1>
        <p>
          New students are accepted throughout the year. All new students are
          given a trial class to determine proper class placement.
          <br />
          <br />
          Stop by today to complete your registration! Download our registration
          packet below.
        </p>
        <a
          href={NyliaStudentRegistration}
          without
          rel="noopener noreferrer"
          target="_blank"
        >
          <NyliaButton
            // handleClick={() => setClassInfo("preBallet1")}
            label={"Registration Form"}
          ></NyliaButton>
        </a>
      </div>
      <img src={enrollmentImg} />

      <div className="tuition-section">
        <h1>Tuition</h1>
        <p>
          Tuition is due on the 1st of each month. A late fee of $15 is charged
          for late tuition payments.
          <br />
          <br />
          An annual registration fee of $45 is due at the time of registration
          and every January thereafter.
        </p>
        <a
          href={TuitionPackages}
          without
          rel="noopener noreferrer"
          target="_blank"
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
