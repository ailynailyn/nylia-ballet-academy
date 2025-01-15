import { React } from "react";

import Footer from "../Footer";

// Files used
// import littleMermaidHandbook from "../../assets/nbc/Nylia Ballet Company Handbook 2024-2025.pdf";

// IMAGES FOR PAGE
import perfSect2ImgSm from "../../assets/performances/SleepingBeauty2025/SleepingBeautyAuditions-300.png";
import perfSect2ImgMd from "../../assets/performances/SleepingBeauty2025/SleepingBeautyAuditions-768.png";
import perfSect2ImgLg from "../../assets/performances/SleepingBeauty2025/SleepingBeautyAuditions-1280.png";
import perfSect2ImgXL from "../../assets/performances/SleepingBeauty2025/SleepingBeautyAuditions-2000.png";
import handbook from "../../assets/performances/SleepingBeauty2025/SleepingBeautyHandbook2025.pdf";

import PerformanceTemplate from "./templates/PerformanceTemplate";

import "./SleepingBeauty2025.css";

function SleepingBeauty2025() {
  const status = "UPCOMING";
  const showName = "Sleeping Beauty";
  const showDate = "May 8, 2025";
  const headerDescription = `Visit an enchanting world of princesses, fairy godmothers, and magical spells!`;
  // const handbook = littleMermaidHandbook;

  const auditionDate = "FEBRUARY 9, 2025";
  const perfSect2ButtonLink = "https://form.jotform.com/250095489472163";
  const perfSect2Images = {
    sm: perfSect2ImgSm,
    md: perfSect2ImgMd,
    lg: perfSect2ImgLg,
    xl: perfSect2ImgXL,
  };

  return (
    <div id="sleepingBeauty2025Div">
      <PerformanceTemplate
        status={status}
        showName={showName}
        showDate={showDate}
        headerDescription={headerDescription}
        auditionDate={auditionDate}
        perfSect2ButtonLink={perfSect2ButtonLink}
        perfSect2Images={perfSect2Images}
        handbookLink={handbook}
      />
      <Footer />
    </div>
  );
}

export default SleepingBeauty2025;
