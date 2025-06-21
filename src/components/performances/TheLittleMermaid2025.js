import { React } from "react";

import Footer from "../Footer";

// Files used
import littleMermaidHandbook from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaidHandbook2025.pdf";
import littleMermaidRehearsalSchedule from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaid2025RehearsalSchedule.pdf";
import littleMermaidRehearsalReqs from "../../assets/performances/TheLittleMermaid2025/LittleMermaid2025CostumeReqs.pdf";
import littleMermaidCastList from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaid2025CastList.pdf";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-300.png";
import perfSect2ImgMd from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-768.png";
import perfSect2ImgLg from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-1280.png";
import perfSect2ImgXL from "../../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-2000.png";

import PerformanceTemplate from "./templates/PerformanceTemplate";

import "./TheLittleMermaid2025.css";

function TheLittleMermaid2025() {
  const status = "ACTIVE";
  const showName = "The Little Mermaid";
  const showDate = "2025";
  const headerDescription = `Dive into a world of sacrifice, love, and enchantment! Join the Nylia Ballet Company as we bring Hans Christian Andersen's timeless tale The Little Mermaid to life on stage. Witness the journey of a mermaid who dares to trade her voice for a chance at love, only to discover the true meaning of courage and selflessness.`;
  const handbook = littleMermaidHandbook;

  const importantLinks = [
    { buttonLabel: "Cast list", buttonLink: littleMermaidCastList },

    {
      buttonLabel: "rehearsal schedule",
      buttonLink: littleMermaidRehearsalSchedule,
    },
    {
      buttonLabel: "Rehearsal Attire",
      buttonLink: littleMermaidRehearsalReqs,
    },
    // { buttonLabel: "Costume Requirements", buttonLink: costumeReqs },
    // { buttonLabel: "communications", buttonLink: "" }, //todo
    // { buttonLabel: "volunteers", buttonLink: "" }, //todo
  ];

  const auditionDate = "Sunday, JUNE 8, 2025";
  // const perfSect2ButtonLink = "" TODO - Auditions Registry Link
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="littleMermaid2025Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        auditionDate={auditionDate}
        // perfSect2ButtonLink={perfSect2ButtonLink}
        perfSect2Images={perfSect2Images}
        handbookLink={handbook}
        importantLinks={importantLinks}
      />
      <Footer />
    </div>
  );
}

export default TheLittleMermaid2025;
