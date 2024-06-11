import { React } from "react";

import fairySm from "../assets/scholarshipsPage/Spring-Fairy-300.png";
import fairyMd from "../assets/scholarshipsPage/Spring-Fairy-768.png";
import fairyLg from "../assets/scholarshipsPage/Spring-Fairy-1280.png";
import fairyXL from "../assets/scholarshipsPage/Spring-Fairy-2000.png";

import PopupModal from "./popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";

import "./Scholarships.css";

function Scholarships() {
  return (
    <div class="scholarship-container">
      <div className="scholarship-title">
        <h1>SCHOLARSHIPS</h1>
        <img
          src={fairySm}
          srcSet={`${fairySm} 300w, ${fairyMd} 768w, ${fairyLg} 1280w, ${fairyXL} 2000w`}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Ballerina Anahid Aguirre posing in fairy blue tutu for Nylia Ballet Academy"
        />
      </div>

      <div className="scholarship-box centered">
        <p>
          The Nylia Ballet Academy is delighted to serve the El Paso - Fort
          Bliss - Juárez Borderlands. In serving our diverse communities and
          providing high-quality technical training, we are keenly aware of the
          varied backgrounds our students come from. We firmly believe that
          ballet should be accessible, and those who want to study and perform
          the art form should have the opportunity to do so regardless of
          background and/or financial ability.
          <br></br>
          <br></br>
          Thus, to fulfill our mission, and to reach as many students as
          possible, the Academy is proud to offer scholarships and partial
          tuition waivers: the <i>Aurora Piñon Memorial Scholarship</i>, the{" "}
          <i>ADA Family Scholarship</i>, and the <i>ADA Tuition Fund</i>. The
          scholarships will waive monthly tuition for the span of one year, and
          will waive the annual registration fee for the recipient. Whereas the
          tuition waiver will partially waive monthly tuition running from the
          span of one year for the recipient.
          <br></br>
        </p>
        <h3>
          The deadline for all applications and materials is Saturday, December
          7, 2024, at 5:00 pm MST.
        </h3>
      </div>

      <div className="scholarship-box">
        <h1>Aurora Piñon Memorial Scholarship</h1>
        <p>
          <br />
          In loving memory of our director’s grandmother, Aurora, the{" "}
          <i>Aurora Piñon Memorial Scholarship</i> is merit-based. In accordance
          with her knack for storytelling and fierce independence in
          transnationally raising her children as a single mother, we look to
          award this scholarship to dancers who seek to uncover the narrative
          power of the art form, dancers who have actively worked to hone their
          skills, and dancers who have exhibited remarkable leadership ability.
          <br />
          <br />
          This scholarship is eligible to dancers and prospective dancers ages
          12 and up upon completion of the application. We ask for the
          following:
          <br />
          <ul class="scholarship-bullets">
            <li>
              Upload a 2-3 minute video of a variation of choice or original
              choreography. Should you choose to attach the video from your
              Google Drive please ensure that your share settings are open to
              all those with the link. If your settings are not set to public,
              you risk us not being able to view your video and will not be
              considered for the scholarship.
            </li>
            <li>
              An essay ranging from 750-1,000 words elaborating on your artistic
              choices for your video, what you deem the impact and purpose of
              ballet to be, and why you study or would like to study at Nylia.
              AI generated essays will not be tolerated, and each essay will be
              checked for authenticity.
            </li>
            <li>
              Three letters of recommendation from a non-family member,
              preferably a teacher, employer, or someone who you have worked
              with in a professional capacity, who can speak to the applicant’s
              artistic inclination, leadership ability, and passion for ballet.
              Should your recommender want to directly send their letter to us,
              they may email it to <b>info@nyliaballetacademy.com</b>.
            </li>
            <li>
              An unofficial academic transcript from the applicant’s current
              school, or last attended academic institution if graduated in the
              last five years. Should it be more than five years since the
              applicant has last attended a K-12 or higher educational
              institution, please indicate “N/A”.
            </li>
          </ul>
        </p>
        <a href="https://docs.google.com/forms/d/1Eu1W3H361G0JB-3oxVeoCJ5c2TLDmuELgml6r_fiWJY/viewform?edit_requested=true">
          <NyliaButton label={"Apply Now"}></NyliaButton>
        </a>
      </div>
      <div className="scholarship-box">
        <h1>ADA Family Scholarship</h1>
        <p>
          <br />
          The <i>ADA Family Scholarship</i> and the tuition waivers from the{" "}
          <i>ADA Tuition Fund</i> are eligible for all dancers and prospective
          dancers ages 7 and up upon completion of application materials. ADA
          funding is an ode to our Director and her family. We understand that
          while we have individual students, ballet is a communal act, and our
          dancers are supported through their respective households. The
          scholarship and tuition waivers will be judged on the same criteria
          listed below.
          <br />
          <br />
          We ask for the following:
          <br />
          <ul class="scholarship-bullets">
            <li>
              An essay ranging from 700-900 words answering the questions, “What
              does ballet mean to you, and what do you envision its role to be
              for your community?”, “What compels you to learn ballet?”, “How do
              you see ballet impacting your future?”, and “How would funding
              assist you in your long-term goals?”. AI generated essays will not
              be tolerated, and each essay will be checked for authenticity.
            </li>
            <li>
              Three letters of recommendation from a non-family member,
              preferably a teacher, employer, or someone who you have worked
              with in a professional capacity, who can speak to the applicant’s
              artistic inclination, leadership ability, and passion for ballet.
              Should your recommender want to directly send their letter to us,
              they may email it to <b>info@nyliaballetacademy.com</b>.
            </li>
            <li>
              An unofficial academic transcript from the applicant’s current
              school, or last attended academic institution if graduated in the
              last five years. Should it be more than five years since the
              applicant has last attended a K-12 or higher educational
              institution, please indicate “N/A”.
            </li>
            <li>Total household income as indicated on 2023 taxes.</li>
          </ul>
        </p>
        <a href="https://docs.google.com/forms/d/14dDt5_BEc1FoErtj94G7uQzddAvtJkEXrLqFztDUzgw/viewform?edit_requested=true">
          <NyliaButton label={"Apply Now"}></NyliaButton>
        </a>
      </div>
      <div className="scholarship-box centered">
        <p>
          While all of our dancers are representative of our Academy, we expect
          the recipients of our awards to act as liaisons between the Academy
          and the larger community. They will be expected to join Academy
          personnel in no less than five community engagement events throughout
          the duration of their award. Furthermore, recipients are to operate by
          our code of conduct and have no more than two unexcused absences.
          <br />
          <br />
          For more information please contact our team, at{" "}
          <b>info@nyliaballetacademy.com</b>.<br></br>
          <br></br>
        </p>
        <h3>
          The deadline for all applications and materials is Saturday, December
          7, 2024, at 5:00 pm MST.
        </h3>
      </div>
    </div>
  );
}

export default Scholarships;
