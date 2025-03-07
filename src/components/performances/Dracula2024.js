import { React } from "react";

import Footer from "../Footer";
import PerformanceTemplate from "./templates/PerformanceTemplate";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/Dracula2024/DraculaPoster-Bride2024-300.png";
import perfSect2ImgMd from "../../assets/performances/Dracula2024/DraculaPoster-Bride2024-768.png";
import perfSect2ImgLg from "../../assets/performances/Dracula2024/DraculaPoster-Bride2024-1280.png";
import perfSect2ImgXL from "../../assets/performances/Dracula2024/Dracula Poster-Bride 2024.png";
import handbook from "../../assets/performances/Dracula2024/Dracula Handbook 2024.pdf";
import program from "../../assets/performances/Dracula2024/Dracula 2024 Program.pdf";

import "./Dracula2024.css";

function Dracula2024() {
  const status = "PAST";
  const showName = "Dracula";
  const showDate = "October 20, 2024";
  const headerDescription = `This captivating story unfolds as Dracula and his Vampire Brides seize the beloved Flora, transforming her into one of their own. As they seek to ensnare the innocent Svetlana, the villagers rise up in an attempt to save their friend.`;

  const perfSect2ButtonLink = program;
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="dracula2024Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        handbookLink={handbook}
        perfSect2ButtonLink={perfSect2ButtonLink}
        perfSect2Images={perfSect2Images}
      />
      <Footer />
    </div>
  );
}

export default Dracula2024;
