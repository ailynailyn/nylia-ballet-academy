import { React } from "react";

import Footer from "../Footer";
import PerformanceTemplate from "./templates/PerformanceTemplate";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/UNS 2023/UNS-Poster-300.png";
import perfSect2ImgMd from "../../assets/performances/UNS 2023/UNS-Poster-768.png";
import perfSect2ImgLg from "../../assets/performances/UNS 2023/UNS-Poster-1280.png";
import perfSect2ImgXL from "../../assets/performances/UNS 2023/UNS-Poster-2000.png";
import handbook from "../../assets/performances/UNS 2023/UNSHandbook2023.pdf";
import program from "../../assets/performances/UNS 2023/UNSProgram2023.pdf";

import "./UNS2023.css";

function UNS2023() {
  const status = "PAST";
  const showName = "Una Notte Silenziosa";
  const showDate = "December 16, 2023";
  const headerDescription = `Featuring Excerpts from "The Nutcracker"`;

  const perfSect2ButtonLink = program;
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="uns2023Div">
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

export default UNS2023;
