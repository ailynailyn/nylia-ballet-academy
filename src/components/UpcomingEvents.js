import { React } from "react";
import Footer from "../components/Footer";

import decObsSm from "../assets/academyEvents/ObsWeekDec2024-300.png";
import decObsMd from "../assets/academyEvents/ObsWeekDec2024-768.png";
import decObsLg from "../assets/academyEvents/ObsWeekDec2024-1280.png";
import decObsXL from "../assets/academyEvents/ObsWeekDec2024-2000.png";

import NyliaButton from "./nyliaButton/NyliaButton.js";

import PhotoGallery from "./photoGallery/PhotoGallery.js";

import "./UpcomingEvents.css";

function UpcomingEvents() {
  const CUREVENTIDX = 18;
  const images = [];

  const renderImages = () => {
    return images.map((imageInfo, index) => (
      <img
        key={index}
        src={imageInfo.smImg}
        srcSet={imageInfo.imgSet}
        alt="Nylia Ballet Academy Dancer from El Paso Texas"
        style={{
          height: "90%",
          objectFit: "cover",
        }}
      />
    ));
  };

  const eventsList = [
    { date: "01/02/2025", event: "1st Day of Classes", note: "CLASSES RESUME" },
    {
      date: "01/12/2025",
      event: "Swan Lake Cast Photoshoot",
      note: "SWAN LAKE",
    },

    { date: "01/25/2025", event: "Swan Lake Movie Night", note: "SWAN LAKE" },
    {
      date: "01/27/2025 - 01/31/2025",
      event: "Swan Lake Full Run-Throughs (ALL CAST)",
      note: "SWAN LAKE",
    },
    {
      date: "02/01/2025",
      event: "Swan Lake Dress Rehearsal",
      note: "SWAN LAKE",
      link: "/performances/swanlake2025",
      isLink: true,
    },
    {
      date: "02/01/2025",
      event: "Nylia Ballet Company's Swan Lake",
      note: "SWAN LAKE TICKETS",
      link:
        "https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F",
      isLink: false,
    },
    {
      date: "02/09/2025",
      event: "Sleeping Beauty Auditions",
      note: "THE SLEEPING BEAUTY",
      link: "/performances/sleepingbeauty2025",
      isLink: true,
    },
    {
      date: "03/05/2025 - 03/08/2025",
      event: "Observation Week",
      note: "OBSERVATION WEEK",
      link: "/observationweek",
      isLink: true,
    },
    {
      date: "03/12/2025 - 03/14/2025",
      event: "Student Assessments",
      note: "ASSESSMENTS",
      link: "/assessments",
      isLink: true,
    },
    {
      date: "03/17/2025 - 03/22/2025",
      event: "Bring a Friend Week",
      note: "SPECIAL EVENT",
    },
    {
      date: "04/27/2025",
      event: "Nylia Ballet Company Auditions",
      note: "NBC",
      link: "/nyliaballetcompany",
      isLink: true,
    },
    {
      date: "04/27/2025",
      event: "Nylia Ballet Youth Company Auditions",
      note: "NBYC",
      link: "/nyliaballetcompany",
      isLink: true,
    },
    {
      date: "05/08/2025",
      event: "The Sleeping Beauty 2025",
      note: "THE SLEEPING BEAUTY",
      link: "/performances/sleepingbeauty2025",
      isLink: true,
    },
    {
      date: "05/12/2025",
      event: "Start of NBC & NBYC '25-26 Season",
      note: "NBC & NBYC",
    },
    {
      date: "05/12/2025 - 05/17/2025",
      event: "Mom & Me Week",
      note: "SPECIAL EVENT",
    },
    // {
    //   date: "05/26/2025",
    //   event: "Memorial Day - NO CLASSES",
    //   note: "HOLIDAY",
    // },
    {
      date: "06/04/2025 - 06/07/2025",
      event: "Observation Week",
      note: "OBSERVATION WEEK",
      link: "/observationweek",
      isLink: true,
    },
    {
      date: "06/08/2025",
      event: "The Little Mermaid Auditions",
      note: "THE LITTLE MERMAID",
      link: "/performances/thelittlemermaid2025",
      isLink: true,
    },
    {
      date: "06/11/2025 - 06/13/2025",
      event: "Student Assessments",
      note: "ASSESSMENTS",
      link: "/assessments",
      isLink: true,
    },

    {
      date: "06/16/2025 - 06/21/2025",
      event: "Dad & Me Week",
      note: "SPECIAL EVENT",
    },
    {
      date: "06/22/2025",
      event: "Nylia Ballet Company & Youth Company Gala",
      note: "NBC & NBYC",
    },
    {
      date: "07/07/2025 - 07/11/2025",
      event: "Youth Summer Intensive",
      note: "SUMMER INTENSIVE",
      link: "/summerintensives",
      isLink: true,
    },
    {
      date: "07/07/2025 - 07/11/2025",
      event: "Adult Summer Intensive",
      note: "SUMMER INTENSIVE",
      link: "/summerintensives",
      isLink: true,
    },
    {
      date: "09/01/2025",
      event: "Labor Day - NO CLASSES",
      note: "HOLIDAY",
    },
    {
      date: "09/03/2025 - 09/06/2025",
      event: "Observation Week",
      note: "OBSERVATION WEEK",
      link: "/observationweek",
      isLink: true,
    },
    {
      date: "09/10/2025 - 09/12/2025",
      event: "Student Assessments",
      note: "ASSESSMENTS",
      link: "/assessments",
      isLink: true,
    },
    {
      date: "09/20/2025",
      event: "The Little Mermaid",
      note: "THE LITTLE MERMAID",
      link: "/performances/thelittlemermaid2025",
      isLink: true,
    },
    {
      date: "09/28/2025",
      event: "Swan Lake Auditions",
      note: "SWAN LAKE",
      link: "/performances/swanlake2026",
      isLink: true,
    },
    {
      date: "11/26/2025 - 11/29/2025",
      event: "Thanksgiving Break - NO CLASSES",
      note: "HOLIDAY",
    },
    {
      date: "12/03/2025 - 12/06/2025",
      event: "Observation Week",
      note: "OBSERVATION WEEK",
      link: "/observationweek",
      isLink: true,
    },
    {
      date: "12/10/2025 - 12/12/2025",
      event: "Student Assessments",
      note: "ASSESSMENTS",
      link: "/assessments",
      isLink: true,
    },
    {
      date: "12/22/2025 - 01/02/2026",
      event: "Winter Break - NO CLASSES",
      note: "HOLIDAY",
    },
    {
      date: "01/17/2026",
      event: "Swan Lake",
      note: "SWAN LAKE",
      link: "/performances/swanlake2026",
      isLink: true,
    },
    {
      date: "01/25/2026",
      event: "Alice in Wonderland Auditions",
      note: "ALICE IN WONDERLAND",
      link: "/performances/aliceinwonderland2026",
      isLink: true,
    },
    {
      date: "04/25/2026",
      event: "Alice in Wonderland",
      note: "ALICE IN WONDERLAND",
      link: "/performances/aliceinwonderland2026",
      isLink: true,
    },
  ];

  const renderCalendar = () => {
    return eventsList.map((eventInfo, index) => (
      <tr>
        <th scope="row" className="date">
          {eventInfo.date}
        </th>
        <td colspan="3" className="event">
          {eventInfo.event}
        </td>
        <td className="note">
          <a
            href={eventInfo.link}
            className={eventInfo.isLink ? "clickableLink" : null}
          >
            {eventInfo.note}
          </a>
        </td>
      </tr>
    ));
  };

  return (
    <div class="upcomingevents-container">
      <div className="calendar">
        <div className="upcomingevents-title">
          <h1>CALENDAR</h1>
          <p>
            <br></br>
            Our mission is to inspire students and cultivate a love for dance.
            We exist to nurture creativity and encourage each student to reach
            their respective goals while at the same educating our community
            about the narrative power of the art form.
            <br></br>
            <br></br>
            As we instill discipline and respect for art form amongst students
            and community, our sights are set to the future and how to
            facilitate the transition from Academy to Company. It is our intent
            to focus on large scale productions and establish El Paso as a
            renowned epicenter for ballet.
          </p>
          {/* <div className="upcomingevents-button">
            <a id="events-button" href="#fullcalendar">
              <NyliaButton label={"SEE FULL CALENDAR"}></NyliaButton>
            </a>
          </div> */}
        </div>
        {/* <hr></hr> */}

        {/* <div className="upcomingevents-images">
          <div id="upcomingevents-gallery">
            <PhotoGallery
              images={images}
              curEventIndex={CUREVENTIDX}
            ></PhotoGallery>
          </div>
        </div> */}
        {/* <div className="upcomingevents-button">
          <a id="events-button" href="">
            <NyliaButton label={"Go to Latest Event"}></NyliaButton>
          </a>
        </div> */}
        <hr></hr>
        <div className="upcomingevents-title" id="fullcalendar">
          <h1>2025 - 2026 CALENDAR</h1>
        </div>
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="date">
                  DATE
                </th>
                <th scope="col" colspan="3" className="event">
                  EVENT
                </th>
                <th scope="col" className="category">
                  DETAILS & LINK
                </th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UpcomingEvents;
