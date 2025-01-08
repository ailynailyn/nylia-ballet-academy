import { React } from "react";

import Footer from "../Footer";

// Files used
// import littleMermaidHandbook from "../../assets/nbc/Nylia Ballet Company Handbook 2024-2025.pdf";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/TheLittleMermaid2025/The Little Mermaid Poster-300.png";
import perfSect2ImgMd from "../../assets/performances/TheLittleMermaid2025/The Little Mermaid Poster-768.png";
import perfSect2ImgLg from "../../assets/performances/TheLittleMermaid2025/The Little Mermaid Poster-1280.png";
import perfSect2ImgXL from "../../assets/performances/TheLittleMermaid2025/The Little Mermaid Poster-2000.png";

import PerformanceTemplate from "./templates/PerformanceTemplate";

import "./TheLittleMermaid2025.css";

function TheLittleMermaid2025() {
  const status = "UPCOMING";
  const showName = "The Little Mermaid";
  const showDate = "2025";
  const headerDescription = `This is the description of what the little mermaid is and what it is about. a story of underwater and the land and a prince and a princess`;
  // const handbook = littleMermaidHandbook;

  const auditionDate = "DATE: TO BE ANNOUNCED";
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
      />
      <Footer />
    </div>
  );
}

export default TheLittleMermaid2025;
