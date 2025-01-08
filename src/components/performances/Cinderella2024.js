import { React } from "react";

import Footer from "../Footer";
import PerformanceTemplate from "./templates/PerformanceTemplate";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/Cinderella2024/Cinderella2024-CinderellaPoster-300.png";
import perfSect2ImgMd from "../../assets/performances/Cinderella2024/Cinderella2024-CinderellaPoster-768.png";
import perfSect2ImgLg from "../../assets/performances/Cinderella2024/Cinderella2024-CinderellaPoster-1280.png";
import perfSect2ImgXL from "../../assets/performances/Cinderella2024/Cinderella2024-CinderellaPoster-2000.png";
import handbook from "../../assets/performances/Cinderella2024/Cinderella Handbook 2024.pdf";

import "./Cinderella2024.css";

function Cinderella2024() {
  const status = "PAST";
  const showName = "Cinderella";
  const showDate = "June 15, 2024";
  const headerDescription = `Nylia Ballet Academy is thrilled to present our first public
  production of Cinderella! This ballet tells the classic story of
  Cinderella, taking us on a journey of emotions as she discovers
  unexpected support, friendships and, ultimately, her true love.`;

  // const perfSect2ButtonLink = "" TODO - Cinderella Program
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="cinderella2024Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        handbookLink={handbook}
        // perfSect2ButtonLink={perfSect2ButtonLink}
        perfSect2Images={perfSect2Images}
      />
      <Footer />
    </div>
  );
}

export default Cinderella2024;
