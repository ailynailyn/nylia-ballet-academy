import { React } from "react";

import Footer from "../Footer";
// import littleMermaidHandbook from "../../assets/nbc/Nylia Ballet Company Handbook 2024-2025.pdf";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/SwanLake2025/SwanLake2024Poster-300.png";
import perfSect2ImgMd from "../../assets/performances/SwanLake2025/SwanLake2024Poster-768.png";
import perfSect2ImgLg from "../../assets/performances/SwanLake2025/SwanLake2024Poster-1280.png";
import perfSect2ImgXL from "../../assets/performances/SwanLake2025/SwanLake2024Poster-2000.png";

// Gallery Images
import gallery1 from "../../assets/performances/SwanLake2025/gallery/1.png";
import gallery2 from "../../assets/performances/SwanLake2025/gallery/2.png";
import gallery3 from "../../assets/performances/SwanLake2025/gallery/3.png";
import gallery4 from "../../assets/performances/SwanLake2025/gallery/4.png";
import gallery5 from "../../assets/performances/SwanLake2025/gallery/5.png";
import gallery6 from "../../assets/performances/SwanLake2025/gallery/6.png";

import handbook from "../../assets/performances/SwanLake2025/Swan Lake Handbook 2024-2025.pdf";
import castList from "../../assets/performances/SwanLake2025/SwanLakeCastList2024.pdf";
import rehearsalAttire from "../../assets/performances/SwanLake2025/SwanLake24RehearsalReqs.png";
import rehearsalSchedule from "../../assets/performances/SwanLake2025/Swan Lake Weekly Schedule 2024.pdf";
import costumeReqs from "../../assets/performances/SwanLake2025/SwanLake2024CostumeReqs.png";
import program from "../../assets/performances/SwanLake2025/Swan Lake Program 2025.pdf";

import PerformanceTemplate from "./templates/PerformanceTemplate";

import "./SwanLake2025.css";

function SwanLake2025() {
  const status = "PAST";
  const showName = "Swan Lake";
  const showDate = "February 1, 2025";
  const headerDescription = `Immerse yourself in the enchanting love story of Swan Lake. Witness Prince Siegfried's fateful encounter with the Swan Queen, Odette, as he pledges his undying love and loyalty to her. However, a cruel curse by the evil sorcerer Baron von Rothbart only allows Odette to take human form at night. Only true love and unwavering fidelity can break this powerful spell.`;

  // const handbook = handbook;
  const perfSect2ButtonLink =
    "https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F";
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  const importantLinks = [
    { buttonLabel: "Cast list", buttonLink: castList },
    { buttonLabel: "Rehearsal Attire", buttonLink: rehearsalAttire },
    { buttonLabel: "rehearsal schedule", buttonLink: rehearsalSchedule },
    { buttonLabel: "Costume Requirements", buttonLink: costumeReqs },
    // { buttonLabel: "communications", buttonLink: "" }, //todo
    // { buttonLabel: "volunteers", buttonLink: "" }, //todo
  ];

  const eventCalendar = [
    {
      eventName: "Auditions",
      date: "10/26/24",
      title: "Swan Lake Auditions",
      subtitle: "October 26, 2024",
      caption: "Auditions are held at Nylia Ballet Academy",
      // buttonLink: "Register for Auditions.com",
      // buttonLabel: "Register for Auditions",
    },
    {
      eventName: "Rehearsals Begin",
      date: "10/28/24",
      caption: "All rehearsals are held at Nylia Ballet Academy",
    },
    {
      eventName: "Costume Measurements",
      date: "10/28/24",
      caption:
        "Costume measurements will be taken during the dancer's rehearsal from October 28 - November 1.",
    },
    {
      eventName: "Rehearsal Attire Orders Due",
      date: "11/04/24",
      caption:
        "Role-specific rehearsal attire orders are due. This includes rehearsal tutus, skirts, character shoes, and more. ",
    },
    {
      eventName: "Performance & Costume Fees Due",
      date: "11/09/24",
      title: "Performance Fee & Costume Fees Due",
      caption: "Take a look at our handbook for detailed information!",
    },
    {
      eventName: "Rehearsal Attire Required",
      date: "11/11/24",
      title: "Role-Specific Rehearsal Attire Required",
      caption:
        "All dancers must be wearing their designated rehearsal attire to all rehearsals. The rehearsal attire depends on their role in the production.",
    },
    {
      eventName: "Cast Photoshoot",
      date: "11/11/24",
      title: "Swan Lake Cast Photoshoot",
      caption:
        "Picture packages can be purchased at the front desk. Make the beautiful memories last a lifetime!",
    },
    {
      eventName: "Full Run-Throughs (ALL CAST)",
      date: "01/27/25",
      title: "Full Run-Throughs (ALL CAST)",
      subtitle: "January 27 - 31",
      caption:
        "All dancers will be rehearsing and doing full run-throughs of the show daily. Full details can be found in our Handbook.",
    },
    {
      eventName: "Dress Rehearsal",
      date: "02/01/25",
      title: "Swan Lake Dress Rehearsal",
      subtitle: "February 1",
      caption:
        "Dress rehearsal will take place at UTEP's Magoffin Auditorium. Full details can be found in the Swan Lake Handbook.",
    },
    {
      eventName: "Nylia Ballet Company's Swan Lake",
      date: "02/01/25",
      title: "Swan Lake",
      subtitle: "February 1 at 7 pm",
      caption: "UTEP's Magoffin Auditorium",
      buttonLink:
        "https://www.ticketmaster.com/swan-lake-el-paso-texas-02-01-2025/event/0C00615EE1493D5F",
      buttonLabel: "RESERVE YOUR SEATS",
    },
  ];

  // const galleryImages = [{ imageSrc: "", title: "title", caption: "caption" }];
  const galleryImages = [
    { imageSrc: gallery1 },
    { imageSrc: gallery2 },
    { imageSrc: gallery3 },
    { imageSrc: gallery4 },
    { imageSrc: gallery5 },
    { imageSrc: gallery6 },
  ];

  return (
    <div id="swanLake2025Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        handbookLink={handbook}
        perfSect2ButtonLink={program}
        perfSect2Images={perfSect2Images}
        importantLinks={importantLinks}
        // eventCalendar={eventCalendar}
        galleryImages={galleryImages}
        performanceWeek={false}
      />
      <Footer />
    </div>
  );
}

export default SwanLake2025;
