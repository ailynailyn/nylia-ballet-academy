import { React } from "react";
import newYear2024Sm from "../assets/newYear2024-300.png";
import newYear2024Md from "../assets/newYear2024-768.png";
import newYear2024Lg from "../assets/newYear2024-2000.png";
import friendWeek2024Sm from "../assets/FriendWeek2024-300.png";
import friendWeek2024Md from "../assets/FriendWeek2024-768.png";
import friendWeek2024Lg from "../assets/FriendWeek2024-1280.png";
import friendWeek2024XL from "../assets/FriendWeek2024-2000.png";
import movieNightSm from "../assets/CinderellaMovieNight2024-300.png";
import movieNightMd from "../assets/CinderellaMovieNight2024-768.png";
import movieNightLg from "../assets/CinderellaMovieNight2024-1280.png";
import movieNightXL from "../assets/CinderellaMovieNight2024-2000.png";
import FarmersMarketSm from "../assets/FarmersMarket-300.png";
import FarmersMarketMd from "../assets/FarmersMarket-768.png";
import FarmersMarketLg from "../assets/FarmersMarket-1280.png";
import FarmersMarketXL from "../assets/Farmers Market-2000.png";
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
import obsSm from "../assets/ObservationWeekFeb2024-300.png";
import obsMd from "../assets/ObservationWeekFeb2024-768.png";
import obsLg from "../assets/ObservationWeekFeb2024-1280.png";
import obsXL from "../assets/ObservationWeekFeb2024-2000.png";
import BallerinaStoryTimeMarch2024Sm from "../assets/BallerinaStoryTimeMarch2024-300.png";
import BallerinaStoryTimeMarch2024Md from "../assets/BallerinaStoryTimeMarch2024-768.png";
import BallerinaStoryTimeMarch2024Lg from "../assets/BallerinaStoryTimeMarch2024-1280.png";
import BallerinaStoryTimeMarch2024XL from "../assets/BallerinaStoryTimeMarch2024-2000.png";
import PaintAndSipMarch2024Sm from "../assets/PaintAndSipMarch2024-300.png";
import PaintAndSipMarch2024Md from "../assets/PaintAndSipMarch2024-768.png";
import PaintAndSipMarch2024Lg from "../assets/PaintAndSipMarch2024-2000.png";

import MomWeek2024Sm from "../assets/MomWeek2024-300.png";
import MomWeek2024Md from "../assets/MomWeek2024-768.png";
import MomWeek2024Lg from "../assets/MomWeek2024-1280.png";
import MomWeek2024XL from "../assets/MomWeek2024-2000.png";
import DadWeek2024Sm from "../assets/DadWeek2024-300.png";
import DadWeek2024Md from "../assets/DadWeek2024-768.png";
import DadWeek2024Lg from "../assets/DadWeek2024-1280.png";
import DadWeek2024XL from "../assets/DadWeek2024-2000.png";
import Valentines2024Sm from "../assets/Valentines2024-300.png";
import Valentines2024Md from "../assets/Valentines2024-768.png";
import Valentines2024Lg from "../assets/Valentines2024-1080.png";

import PhotoGallery from "./photoGallery/PhotoGallery.js";

import "./UpcomingEvents.css";

function UpcomingEvents() {
  const CUREVENTIDX = 9;
  const images = [
    {
      smImg: newYear2024Sm,
      imgSet: `${newYear2024Sm} 300w, ${newYear2024Md} 768w, ${newYear2024Lg} 1280w, ${newYear2024Lg} 2000w`,
    },
    {
      smImg: friendWeek2024Sm,
      imgSet: `${friendWeek2024Sm} 300w, ${friendWeek2024Md} 768w, ${friendWeek2024Lg} 1280w, ${friendWeek2024XL} 2000w`,
    },
    {
      smImg: movieNightSm,
      imgSet: `${movieNightSm} 300w, ${movieNightMd} 768w, ${movieNightLg} 1280w, ${movieNightXL} 2000w`,
    },
    {
      smImg: FarmersMarketSm,
      imgSet: `${FarmersMarketSm} 300w, ${FarmersMarketMd} 768w, ${FarmersMarketLg} 1280w, ${FarmersMarketXL} 2000w`,
    },
    {
      smImg: Valentines2024Sm,
      imgSet: `${Valentines2024Sm} 300w, ${Valentines2024Md} 768w, ${Valentines2024Lg} 1280w, ${Valentines2024Lg} 2000w`,
    },

    {
      smImg: obsSm,
      imgSet: `${obsSm} 300w, ${obsMd} 768w, ${obsLg} 1280w, ${obsXL} 2000w`,
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
    {
      smImg: BallerinaStoryTimeMarch2024Sm,
      imgSet: `${BallerinaStoryTimeMarch2024Sm} 300w, ${BallerinaStoryTimeMarch2024Md} 768w, ${BallerinaStoryTimeMarch2024Lg} 1280w, ${BallerinaStoryTimeMarch2024XL} 2000w`,
    },
    {
      smImg: PaintAndSipMarch2024Sm,
      imgSet: `${PaintAndSipMarch2024Sm} 300w, ${PaintAndSipMarch2024Md} 768w, ${PaintAndSipMarch2024Lg} 1280w, ${PaintAndSipMarch2024Lg} 2000w`,
    },
    {
      smImg: MomWeek2024Sm,
      imgSet: `${MomWeek2024Sm} 300w, ${MomWeek2024Md} 768w, ${MomWeek2024Lg} 1280w, ${MomWeek2024XL} 2000w`,
    },
    {
      smImg: DadWeek2024Sm,
      imgSet: `${DadWeek2024Sm} 300w, ${DadWeek2024Md} 768w, ${DadWeek2024Lg} 1280w, ${DadWeek2024XL} 2000w`,
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
        <h1>ACADEMY EVENTS</h1>
      </div>
      <div className="upcomingevents-images">
        <div id="upcomingevents-gallery">
          <PhotoGallery
            images={images}
            curEventIndex={CUREVENTIDX}
          ></PhotoGallery>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
