import { React } from "react";

import Footer from "../Footer";

// Files used
// import littleMermaidHandbook from "../../assets/nbc/Nylia Ballet Company Handbook 2024-2025.pdf";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-300.png";
import perfSect2ImgMd from "../../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-768.png";
import perfSect2ImgLg from "../../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-1280.png";
import perfSect2ImgXL from "../../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-2000.png";
import handbook from "../../assets/performances/SleepingBeauty2025/SleepingBeautyHandbook2025.pdf";
import castList from "../../assets/performances/SleepingBeauty2025/Sleeping Beauty 2025 Cast List.pdf";
import rehearsalSchedule from "../../assets/performances/SleepingBeauty2025/SleepingBeautyRehearsalSchedule.png";
import rehearsalReqs from "../../assets/performances/SleepingBeauty2025/SwanLake2024RehearsalReqs.png";
import costumeReqs from "../../assets/performances/SleepingBeauty2025/The Sleeping Beauty 2025 - Costume Reqs.pdf";
import program from "../../assets/performances/SleepingBeauty2025/The Sleeping Beauty 2025 Program.pdf";

import PerformanceTemplate from "./templates/PerformanceTemplate";

import "./SleepingBeauty2025.css";

function SleepingBeauty2025() {
  const status = "ACTIVE";
  const showName = "Sleeping Beauty";
  const showDate = "May 8, 2025";
  const headerDescription = `Visit an enchanting world of princesses, fairy godmothers, and magical spells!`;

  const auditionDate = "FEBRUARY 9, 2025";
  const perfSect2ButtonLink =
    "https://www.ticketmaster.com/sleeping-beauty-el-paso-texas-05-08-2025/event/0C006265ED5F32A6"; // TODO: Add tickets link
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  const importantLinks = [
    { buttonLabel: "Cast list", buttonLink: castList },

    {
      buttonLabel: "rehearsal schedule",
      buttonLink: rehearsalSchedule,
    },
    {
      buttonLabel: "Rehearsal Attire",
      buttonLink: rehearsalReqs,
    },
    { buttonLabel: "Costume Requirements", buttonLink: costumeReqs },
    // { buttonLabel: "communications", buttonLink: "" }, //todo
    // { buttonLabel: "volunteers", buttonLink: "" }, //todo
  ];

  const eventCalendar = [
    {
      eventName: "Auditions",
      date: "02/09/25",
      title: "The Sleeping Beauty Auditions",
      subtitle: "February 9, 2025",
      caption: "Auditions are held at Nylia Ballet Academy",
      buttonLink: "https://form.jotform.com/250095489472163",
      buttonLabel: "Register for Auditions",
    },
    {
      eventName: "Rehearsals Begin",
      date: "02/10/25",
      caption: "All rehearsals are held at Nylia Ballet Academy",
    },
    {
      eventName: "Costume Measurements",
      date: "02/10/25",
      caption:
        "Costume measurements will be taken during the dancer's rehearsal from February 10 - 15.",
    },
    {
      eventName: "Performance Fees Due",
      date: "02/22/25",
      title: "Performance Fees Due",
      caption: "Take a look at our handbook for detailed information!",
    },
    {
      eventName: "Costume Fees Due",
      date: "03/01/25",
      title: "Costume Fees Due",
      caption: "Take a look at our handbook for detailed information!",
    },
    {
      eventName: "Rehearsal Attire Orders Due",
      date: "03/01/25",
      caption:
        "Role-specific rehearsal attire orders are due. This includes rehearsal tutus, skirts, character shoes, and more. ",
    },
    {
      eventName: "Rehearsal Attire Required",
      date: "03/08/25",
      title: "Role-Specific Rehearsal Attire Required",
      caption:
        "All dancers must be wearing their designated rehearsal attire to all rehearsals. The rehearsal attire depends on their role in the production.",
    },
    {
      eventName: "Cast Photoshoot",
      date: "04/13/25",
      title: "Swan Lake Cast Photoshoot",
      caption:
        "Picture packages can be purchased at the front desk. Make the beautiful memories last a lifetime!",
    },
    {
      eventName: "Full Run-Throughs (ALL CAST)",
      date: "05/01/25",
      title: "Full Run-Throughs (ALL CAST)",
      subtitle: "May 1 - 6",
      caption:
        "All dancers will be rehearsing and doing full run-throughs of the show daily. Full details can be found in our Handbook.",
    },
    {
      eventName: "Dress Rehearsal",
      date: "05/07/25",
      title: "Swan Lake Dress Rehearsal",
      subtitle: "May 7",
      caption:
        "Dress rehearsal will take place at UTEP's Magoffin Auditorium. Full details can be found in the Swan Lake Handbook.",
    },
    {
      eventName: "Nylia Ballet Company's The Sleeping Beauty",
      date: "05/08/25",
      title: "The Sleeping Beauty",
      subtitle: "May 8 at 7 pm",
      caption: "UTEP's Magoffin Auditorium",
      // buttonLink:
      // "https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F",
      buttonLabel: "RESERVE YOUR SEATS",
    },
  ];

  return (
    <div id="sleepingBeauty2025Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        auditionDate={auditionDate}
        performanceWeek={true}
        perfSect2ButtonLink={perfSect2ButtonLink}
        perfSect2Images={perfSect2Images}
        importantLinks={importantLinks}
        eventCalendar={eventCalendar}
        handbookLink={handbook}
        perfSect2PerformanceWeekButtonLink={program}
      />
      <Footer />
    </div>
  );
}

export default SleepingBeauty2025;
