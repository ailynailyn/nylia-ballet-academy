import { React } from "react";

import adultBalletSm from "../assets/summerIntensivesPage/claudia-and-linda-300.jpg";
import adultBalletMd from "../assets/summerIntensivesPage/claudia-and-linda-768.jpg";
import adultBalletLg from "../assets/summerIntensivesPage/claudia-and-linda-1280.jpg";
import adultBalletXL from "../assets/summerIntensivesPage/claudia-and-linda-2000.jpg";

import youthSchedule from "../assets/summerIntensivesPage/YouthSI2024Schedule.pdf";
import adultSchedule from "../assets/summerIntensivesPage/AdultSI2024Schedule.pdf";

import PopupModal from "./popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import Footer from "../components/Footer";

import "./SummerIntensives.css";

function SummerIntensives() {
  return (
    <div class="intensives-container">
      <div className="intensives-bkg">
        <div className="intensives-title">
          <h1>SUMMER INTENSIVES</h1>
        </div>

        <div className="intensives-text centered">
          <p>
            Ballet intensives are immersive training programs that provide
            dedicated dancers with an intensive and focused experience to refine
            their ballet technique, artistry, and performance skills. In
            addition to technical training, ballet intensives often offer
            opportunities for dancers to work with our renowned instructors and
            choreographers from the ballet world. These interactions provide
            invaluable mentorship, feedback, and insights into the professional
            dance industry. Participation in ballet intensives can offer
            numerous benefits for dancers, including accelerated skill
            development, increased strength and flexibility, expanded artistic
            expression, and networking opportunities. Many dancers view
            intensives as a crucial step in their training journey, helping them
            to further their passion for ballet and pursue their aspirations of
            becoming professional dancers.
            <br></br>
            <br></br>
            We are thrilled to offer summer intensives for the youth and adults.
            <br></br>
          </p>
          <h3>
            The deadline for all applications and fees is Saturday, July 13,
            2024, at 2:00 pm MST.
          </h3>
        </div>
      </div>

      <div className="intensives-img-bkg">
        <div className="intensives-box">
          <h1>YOUTH INTENSIVE</h1>
          <h2>JULY 15 - 19</h2>
          <NyliaButton label={"SCHEDULE"} link={youthSchedule}></NyliaButton>
          <p>
            <br />
            Our youth ballet intensive is an immersive and rigorous training
            program designed to accelerate the development of young ballet
            dancers. This intensive offers a focused environment where aspiring
            dancers can hone their skills, expand their repertoire, and refine
            their technique under the guidance of our experienced instructors.
            The youth ballet intensive offers young dancers valuable
            opportunities to immerse themselves in ballet, refine their
            technique, expand their artistic horizons, and form lasting
            connections with their peers and mentors who share their passion for
            dance.
            <br />
            <br />
            <b>PREREQUISITES</b>
            <br />
            Ages 5+
            <br />
            <br />
            <b>DATE & TIME</b>
            <br />
            July 15 - 19
            <br />
            8:00 am - 2:00 pm
            <br />
            <br />
            <b>COST</b>
            <br />
            $175
            <br />
          </p>

          <NyliaButton
            label={"Apply Now"}
            link="https://form.jotform.com/241348049445156"
          ></NyliaButton>
        </div>
      </div>
      <div className="intensives-box" id="adultIntensiveSection">
        <h1>ADULT INTENSIVE</h1>
        <h2>July 15 - 19</h2>
        <NyliaButton label={"SCHEDULE"} link={adultSchedule}></NyliaButton>

        <img
          src={adultBalletSm}
          srcSet={`${adultBalletSm} 300w, ${adultBalletMd} 768w, ${adultBalletLg} 1280w, ${adultBalletXL} 2000w`}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Adult ballett students for Nylia Ballet Academy"
        />
        <p>
          <br />
          Our Adult intensive provides a focused and immersive training
          experience explicitly tailored for adult dancers who are passionate
          about ballet. Our curriculum is carefully crafted to meet the needs
          and goals of adult dancers. Our instructors are experienced
          professionals who understand the unique requirements of adult dancers
          and can provide personalized feedback and guidance. This intensive
          offers adult dancers a valuable opportunity to refine their technique,
          deepen their understanding of ballet, connect with like-minded
          individuals, and rejuvenate their passion for dance in a dedicated and
          inspiring setting.
          <br />
          <br />
          <b>PREREQUISITES</b>
          <br />
          Ages 14+
          <br />
          <br />
          <b>DATE & TIME</b>
          <br />
          July 15 - 19
          <br />
          5:00 pm - 8:30 pm
          <br />
          <br />
          <b>COST</b>
          <br />
          $175
          <br />
        </p>
        <NyliaButton
          label={"Apply Now"}
          link="https://form.jotform.com/241351892390155"
        ></NyliaButton>
      </div>
      <div className="intensives-img-bkg-2">
        <div className="intensives-box centered">
          <p>
            To submit your application for our upcoming summer ballet intensive,
            please use the corresponding link above. Once you’ve completed the
            online application, you will receive an invoice in 3-5 business days
            in order to secure your registration. Kindly note that all payments
            must be finalized online or in person at our academy. This ensures a
            smooth and secure transaction process. We accept various forms of
            payment, including cash, credit/debit cards, and Apple/Google Pay.
            If you have any questions or need assistance with your application
            or payment, please contact our administrative team at
            <b> info@nyliaballetacademy.com</b>. We look forward to welcoming
            you to our intensive program and embarking on this enriching ballet
            journey together!
            <br />
            <br />
            For more information please contact us at{" "}
            <b>info@nyliaballetacademy.com</b>.<br></br>
            <br></br>
          </p>
          <h3>
            The deadline for all applications and fees is Saturday, July 13,
            2024, at 2:00 pm MST.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SummerIntensives;
