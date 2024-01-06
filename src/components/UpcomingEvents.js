import { React } from "react";

import movieNightSm from "../assets/CinderellaMovieNight2024-300.png";
import movieNightMd from "../assets/CinderellaMovieNight2024-768.png";
import movieNightLg from "../assets/CinderellaMovieNight2024-1280.png";
import movieNightXL from "../assets/CinderellaMovieNight2024-2000.png";
import assessmentsSm from "../assets/StudentAssessments2024-300.png";
import assessmentsMd from "../assets/StudentAssessments2024-768.png";
import assessmentsLg from "../assets/StudentAssessments2024-1280.png";
import assessmentsXL from "../assets/StudentAssessments2024-2000.png";

import auditionsSm from "../assets/CinderellaAuditions-300.png";
import auditionsMd from "../assets/CinderellaAuditions-768.png";
import auditionsLg from "../assets/CinderellaAuditions-1280.png";
import auditionsXL from "../assets/CinderellaAuditions-2000.png";
import cinderellaScheduleSm from "../assets/CinderellaWeeklySchedule2024-300.png";
import cinderellaScheduleMd from "../assets/CinderellaWeeklySchedule2024-768.png";
import cinderellaScheduleLg from "../assets/CinderellaWeeklySchedule2024-1280.png";
import cinderellaScheduleXL from "../assets/CinderellaWeeklySchedule2024-2000.png";

import PhotoGallery from "./photoGallery/PhotoGallery.js";

import "./UpcomingEvents.css";

function UpcomingEvents() {
  const images = [
    {
      smImg: movieNightSm,
      imgSet: `${movieNightSm} 300w, ${movieNightMd} 768w, ${movieNightLg} 1280w, ${movieNightXL} 2000w`,
    },
    {
      smImg: assessmentsSm,
      imgSet: `${assessmentsSm} 300w, ${assessmentsMd} 768w, ${assessmentsLg} 1280w, ${assessmentsXL} 2000w`,
    },

    {
      smImg: auditionsSm,
      imgSet: `${auditionsSm} 300w, ${auditionsMd} 768w, ${auditionsLg} 1280w, ${auditionsXL} 2000w`,
    },
    {
      smImg: cinderellaScheduleSm,
      imgSet: `${cinderellaScheduleSm} 300w, ${cinderellaScheduleMd} 768w, ${cinderellaScheduleLg} 1280w, ${cinderellaScheduleXL} 2000w`,
    },
  ];

  const renderImages = () => {
    return images.map((imageInfo, index) => (
      <img
        key={index}
        src={imageInfo.smImg}
        srcSet={imageInfo.imgSet}
        alt="Nylia Ballet Academy Dancer from El Paso Texas"
        style={{
          // width: "100%",
          height: "90%",
          objectFit: "cover",
        }}
      />
    ));
  };

  return (
    <div class="upcomingevents-container">
      <div className="upcomingevents-title">
        <h1>UPCOMING EVENTS</h1>
      </div>
      <div className="upcomingevents-images">
        <div id="upcomingevents-gallery">
          <PhotoGallery images={images}></PhotoGallery>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
