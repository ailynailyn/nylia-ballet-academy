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
  const images = [
    // {
    //   smImg: newYear2024Sm,
    //   imgSet: `${newYear2024Sm} 300w, ${newYear2024Md} 768w, ${newYear2024Lg} 1280w, ${newYear2024Lg} 2000w`,
    // },
    // {
    //   smImg: friendWeek2024Sm,
    //   imgSet: `${friendWeek2024Sm} 300w, ${friendWeek2024Md} 768w, ${friendWeek2024Lg} 1280w, ${friendWeek2024XL} 2000w`,
    // },
    // {
    //   smImg: movieNightSm,
    //   imgSet: `${movieNightSm} 300w, ${movieNightMd} 768w, ${movieNightLg} 1280w, ${movieNightXL} 2000w`,
    // },
    // {
    //   smImg: FarmersMarketSm,
    //   imgSet: `${FarmersMarketSm} 300w, ${FarmersMarketMd} 768w, ${FarmersMarketLg} 1280w, ${FarmersMarketXL} 2000w`,
    // },
    // {
    //   smImg: Valentines2024Sm,
    //   imgSet: `${Valentines2024Sm} 300w, ${Valentines2024Md} 768w, ${Valentines2024Lg} 1280w, ${Valentines2024Lg} 2000w`,
    // },
    // {
    //   smImg: obsSm,
    //   imgSet: `${obsSm} 300w, ${obsMd} 768w, ${obsLg} 1280w, ${obsXL} 2000w`,
    // },
    // {
    //   smImg: assessmentsSm,
    //   imgSet: `${assessmentsSm} 300w, ${assessmentsMd} 768w, ${assessmentsLg} 1280w, ${assessmentsXL} 2000w`,
    // },
    // {
    //   smImg: auditionsSm,
    //   imgSet: `${auditionsSm} 300w, ${auditionsMd} 768w, ${auditionsLg} 1280w, ${auditionsXL} 2000w`,
    // },
    // {
    //   smImg: BallerinaStoryTimeMarch2024Sm,
    //   imgSet: `${BallerinaStoryTimeMarch2024Sm} 300w, ${BallerinaStoryTimeMarch2024Md} 768w, ${BallerinaStoryTimeMarch2024Lg} 1280w, ${BallerinaStoryTimeMarch2024XL} 2000w`,
    // },
    // {
    //   smImg: PaintAndSipMarch2024Sm,
    //   imgSet: `${PaintAndSipMarch2024Sm} 300w, ${PaintAndSipMarch2024Md} 768w, ${PaintAndSipMarch2024Lg} 1280w, ${PaintAndSipMarch2024Lg} 2000w`,
    // },
    // {
    //   smImg: MomWeek2024Sm,
    //   imgSet: `${MomWeek2024Sm} 300w, ${MomWeek2024Md} 768w, ${MomWeek2024Lg} 1280w, ${MomWeek2024XL} 2000w`,
    // },
    // {
    //   smImg: mayObsSm,
    //   imgSet: `${mayObsSm} 300w, ${mayObsMd} 768w, ${mayObsLg} 1280w, ${mayObsXL} 2000w`,
    // },
    // {
    //   smImg: mayAsmntSm,
    //   imgSet: `${mayAsmntSm} 300w, ${mayAsmntMd} 768w, ${mayAsmntLg} 1280w, ${mayAsmntXL} 2000w`,
    // },
    // {
    //   smImg: cinderella2024Sm,
    //   imgSet: `${cinderella2024Sm} 300w, ${cinderella2024Md} 768w, ${cinderella2024Lg} 1280w, ${cinderella2024Lg} 2000w`,
    // },
    // {
    //   smImg: DadWeek2024Sm,
    //   imgSet: `${DadWeek2024Sm} 300w, ${DadWeek2024Md} 768w, ${DadWeek2024Lg} 1280w, ${DadWeek2024XL} 2000w`,
    // },
    // {
    //   smImg: intensive2024Sm,
    //   imgSet: `${intensive2024Sm} 300w, ${intensive2024Md} 768w, ${intensive2024Lg} 1280w, ${intensive2024XL} 2000w`,
    // },
    // {
    //   smImg: sepObsSm,
    //   imgSet: `${sepObsSm} 300w, ${sepObsMd} 768w, ${sepObsLg} 1280w, ${sepObsXL} 2000w`,
    // },
    // {
    //   smImg: sepAsmntSm,
    //   imgSet: `${sepAsmntSm} 300w, ${sepAsmntMd} 768w, ${sepAsmntLg} 1280w, ${sepAsmntXL} 2000w`,
    // },
    // {
    //   smImg: draculaSm,
    //   imgSet: `${draculaSm} 300w, ${draculaMd} 768w, ${draculaLg} 1280w, ${draculaXL} 2000w`,
    // },
    // {
    //   smImg: decObsSm,
    //   imgSet: `${decObsSm} 300w, ${decObsMd} 768w, ${decObsLg} 1280w, ${decObsXL} 2000w`,
    // },
  ];

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
      link: "/performances",
      isLink: true,
    },
    {
      date: "02/01/2025",
      event: "Nylia Ballet Company's Swan Lake",
      note: "SWAN LAKE TICKETS",
      link:
        "https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F",
      isLink: true,
    },
    {
      date: "02/09/2025",
      event: "Sleeping Beauty Auditions",
      note: "SLEEPING BEAUTY",
      link: "/performances",
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
      date: "05/12/2025",
      event: "Start of NBC & NBYC '25-26 Season",
      note: "NBC & NBYC",
    },
    {
      date: "05/12/2025 - 05/17/2025",
      event: "Mom & Me Week",
      note: "SPECIAL EVENT",
    },
    {
      date: "05/26/2025",
      event: "Memorial Day - NO CLASSES",
      note: "HOLIDAY",
    },
    {
      date: "06/04/2025 - 06/07/2025",
      event: "Observation Week",
      note: "OBSERVATION WEEK",
      link: "/observationweek",
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
      date: "06/08/2025",
      event: "The Little Mermaid Auditions",
      note: "THE LITTLE MERMAID",
      link: "/performances",
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
      date: "07/14/2025 - 07/18/2025",
      event: "Youth Summer Intensive",
      note: "SUMMER INTENSIVE",
      link: "/summerintensives",
      isLink: true,
    },
    {
      date: "07/14/2025 - 07/18/2025",
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
      date: "09/28/2025",
      event: "Swan Lake Auditions",
      note: "SWAN LAKE",
      link: "/performances",
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
      date: "01/25/2026",
      event: "Alice in Wonderland Auditions",
      note: "ALICE IN WONDERLAND",
      link: "/performances",
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
