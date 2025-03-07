import { React } from "react";

import Footer from "../Footer";
import PerformanceTemplate from "./templates/PerformanceTemplate";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/Terra2023/Terra-Poster-300.png";
import perfSect2ImgMd from "../../assets/performances/Terra2023/Terra-Poster-768.png";
import perfSect2ImgLg from "../../assets/performances/Terra2023/Terra-Poster-1280.png";
import perfSect2ImgXL from "../../assets/performances/Terra2023/Terra-Poster-2000.png";
import handbook from "../../assets/performances/Terra2023/TerraHandbook2023.pdf";
import program from "../../assets/performances/Terra2023/Terra2023Program.pdf";

import "./Terra2023.css";

function Terra2023() {
  const status = "PAST";
  const showName = "Terra";
  const showDate = "September 10, 2023";
  const headerDescription = `Nylia Ballet Academy is proud to present our first Student Showcase "Terra" on September 10, 2023. "Terra" pays tribute to nature and the Earth. The showcase features pieces that demonstrate our dedicated students' hard work and progress.`;

  const perfSect2ButtonLink = program;
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="terra2023Div">
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

export default Terra2023;
