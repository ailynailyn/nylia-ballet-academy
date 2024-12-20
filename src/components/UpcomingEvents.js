import { React } from "react";
import Footer from "../components/Footer";

import newYear2024Sm from "../assets/academyEvents/newYear2024-300.png";
import newYear2024Md from "../assets/academyEvents/newYear2024-768.png";
import newYear2024Lg from "../assets/academyEvents/newYear2024-2000.png";
import friendWeek2024Sm from "../assets/academyEvents/FriendWeek2024-300.png";
import friendWeek2024Md from "../assets/academyEvents/FriendWeek2024-768.png";
import friendWeek2024Lg from "../assets/academyEvents/FriendWeek2024-1280.png";
import friendWeek2024XL from "../assets/academyEvents/FriendWeek2024-2000.png";
import movieNightSm from "../assets/academyEvents/CinderellaMovieNight2024-300.png";
import movieNightMd from "../assets/academyEvents/CinderellaMovieNight2024-768.png";
import movieNightLg from "../assets/academyEvents/CinderellaMovieNight2024-1280.png";
import movieNightXL from "../assets/academyEvents/CinderellaMovieNight2024-2000.png";
import FarmersMarketSm from "../assets/academyEvents/FarmersMarket-300.png";
import FarmersMarketMd from "../assets/academyEvents/FarmersMarket-768.png";
import FarmersMarketLg from "../assets/academyEvents/FarmersMarket-1280.png";
import FarmersMarketXL from "../assets/academyEvents/Farmers Market-2000.png";
import assessmentsSm from "../assets/academyEvents/StudentAssessments2024-300.png";
import assessmentsMd from "../assets/academyEvents/StudentAssessments2024-768.png";
import assessmentsLg from "../assets/academyEvents/StudentAssessments2024-1280.png";
import assessmentsXL from "../assets/academyEvents/StudentAssessments2024-2000.png";
import auditionsSm from "../assets/academyEvents/CinderellaAuditions-300.png";
import auditionsMd from "../assets/academyEvents/CinderellaAuditions-768.png";
import auditionsLg from "../assets/academyEvents/CinderellaAuditions-1280.png";
import auditionsXL from "../assets/academyEvents/CinderellaAuditions-2000.png";
import obsSm from "../assets/academyEvents/ObservationWeekFeb2024-300.png";
import obsMd from "../assets/academyEvents/ObservationWeekFeb2024-768.png";
import obsLg from "../assets/academyEvents/ObservationWeekFeb2024-1280.png";
import obsXL from "../assets/academyEvents/ObservationWeekFeb2024-2000.png";
import BallerinaStoryTimeMarch2024Sm from "../assets/academyEvents/BallerinaStoryTimeMarch2024-300.png";
import BallerinaStoryTimeMarch2024Md from "../assets/academyEvents/BallerinaStoryTimeMarch2024-768.png";
import BallerinaStoryTimeMarch2024Lg from "../assets/academyEvents/BallerinaStoryTimeMarch2024-1280.png";
import BallerinaStoryTimeMarch2024XL from "../assets/academyEvents/BallerinaStoryTimeMarch2024-2000.png";
import PaintAndSipMarch2024Sm from "../assets/academyEvents/PaintAndSipMarch2024-300.png";
import PaintAndSipMarch2024Md from "../assets/academyEvents/PaintAndSipMarch2024-768.png";
import PaintAndSipMarch2024Lg from "../assets/academyEvents/PaintAndSipMarch2024-2000.png";
import mayObsSm from "../assets/academyEvents/ObsWeekMay2024-300.png";
import mayObsMd from "../assets/academyEvents/ObsWeekMay2024-768.png";
import mayObsLg from "../assets/academyEvents/ObsWeekMay2024-1280.png";
import mayObsXL from "../assets/academyEvents/ObsWeekMay2024-2000.png";
import mayAsmntSm from "../assets/academyEvents/mayAssessments-300.png";
import mayAsmntMd from "../assets/academyEvents/mayAssessments-768.png";
import mayAsmntLg from "../assets/academyEvents/mayAssessments-1280.png";
import mayAsmntXL from "../assets/academyEvents/mayAssessments-2000.png";
import MomWeek2024Sm from "../assets/academyEvents/MomWeek2024-300.png";
import MomWeek2024Md from "../assets/academyEvents/MomWeek2024-768.png";
import MomWeek2024Lg from "../assets/academyEvents/MomWeek2024-1280.png";
import MomWeek2024XL from "../assets/academyEvents/MomWeek2024-2000.png";
import cinderella2024Sm from "../assets/academyEvents/Cinderella2024-300.png";
import cinderella2024Md from "../assets/academyEvents/Cinderella2024-768.png";
import cinderella2024Lg from "../assets/academyEvents/Cinderella2024-1280.png";
import DadWeek2024Sm from "../assets/academyEvents/DadWeek2024-300.png";
import DadWeek2024Md from "../assets/academyEvents/DadWeek2024-768.png";
import DadWeek2024Lg from "../assets/academyEvents/DadWeek2024-1280.png";
import DadWeek2024XL from "../assets/academyEvents/DadWeek2024-2000.png";
import intensive2024Sm from "../assets/academyEvents/SummerIntensive2024Poster-300.png";
import intensive2024Md from "../assets/academyEvents/SummerIntensive2024Poster-768.png";
import intensive2024Lg from "../assets/academyEvents/SummerIntensive2024Poster-1280.png";
import intensive2024XL from "../assets/academyEvents/SummerIntensive2024Poster-2000.png";
import Valentines2024Sm from "../assets/academyEvents/Valentines2024-300.png";
import Valentines2024Md from "../assets/academyEvents/Valentines2024-768.png";
import Valentines2024Lg from "../assets/academyEvents/Valentines2024-1080.png";
import sepObsSm from "../assets/academyEvents/ObsWeekSep2024-300.png";
import sepObsMd from "../assets/academyEvents/ObsWeekSep2024-768.png";
import sepObsLg from "../assets/academyEvents/ObsWeekSep2024-1280.png";
import sepObsXL from "../assets/academyEvents/ObsWeekSep2024-2000.png";
import sepAsmntSm from "../assets/academyEvents/sepAssessments-300.png";
import sepAsmntMd from "../assets/academyEvents/sepAssessments-768.png";
import sepAsmntLg from "../assets/academyEvents/sepAssessments-1280.png";
import sepAsmntXL from "../assets/academyEvents/sepAssessments-2000.png";
import draculaSm from "../assets/performances/Dracula Poster-Bride 2024-300.png";
import draculaMd from "../assets/performances/Dracula Poster-Bride 2024-768.png";
import draculaLg from "../assets/performances/Dracula Poster-Bride 2024-1280.png";
import draculaXL from "../assets/performances/Dracula Poster-Bride 2024.png";
import decObsSm from "../assets/academyEvents/ObsWeekDec2024-300.png";
import decObsMd from "../assets/academyEvents/ObsWeekDec2024-768.png";
import decObsLg from "../assets/academyEvents/ObsWeekDec2024-1280.png";
import decObsXL from "../assets/academyEvents/ObsWeekDec2024-2000.png";

import NyliaButton from "./nyliaButton/NyliaButton.js";

import PhotoGallery from "./photoGallery/PhotoGallery.js";

import "./UpcomingEvents.css";

function UpcomingEvents() {
  const CUREVENTIDX = 18;
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
      smImg: mayObsSm,
      imgSet: `${mayObsSm} 300w, ${mayObsMd} 768w, ${mayObsLg} 1280w, ${mayObsXL} 2000w`,
    },
    {
      smImg: mayAsmntSm,
      imgSet: `${mayAsmntSm} 300w, ${mayAsmntMd} 768w, ${mayAsmntLg} 1280w, ${mayAsmntXL} 2000w`,
    },
    {
      smImg: cinderella2024Sm,
      imgSet: `${cinderella2024Sm} 300w, ${cinderella2024Md} 768w, ${cinderella2024Lg} 1280w, ${cinderella2024Lg} 2000w`,
    },
    {
      smImg: DadWeek2024Sm,
      imgSet: `${DadWeek2024Sm} 300w, ${DadWeek2024Md} 768w, ${DadWeek2024Lg} 1280w, ${DadWeek2024XL} 2000w`,
    },
    {
      smImg: intensive2024Sm,
      imgSet: `${intensive2024Sm} 300w, ${intensive2024Md} 768w, ${intensive2024Lg} 1280w, ${intensive2024XL} 2000w`,
    },
    {
      smImg: sepObsSm,
      imgSet: `${sepObsSm} 300w, ${sepObsMd} 768w, ${sepObsLg} 1280w, ${sepObsXL} 2000w`,
    },
    {
      smImg: sepAsmntSm,
      imgSet: `${sepAsmntSm} 300w, ${sepAsmntMd} 768w, ${sepAsmntLg} 1280w, ${sepAsmntXL} 2000w`,
    },
    {
      smImg: draculaSm,
      imgSet: `${draculaSm} 300w, ${draculaMd} 768w, ${draculaLg} 1280w, ${draculaXL} 2000w`,
    },
    {
      smImg: decObsSm,
      imgSet: `${decObsSm} 300w, ${decObsMd} 768w, ${decObsLg} 1280w, ${decObsXL} 2000w`,
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
          height: "90%",
          objectFit: "cover",
        }}
      />
    ));
  };

  return (
    <div class="upcomingevents-container">
      <div className="calendar">
        <div className="upcomingevents-title">
          <h1>CALENDAR</h1>
          <p>
            <br></br>
            Our mission is to inspire students and cultivate a love for dance.
            We exist to nurture creativity and encourage each student to reach
            their respective goals while at the same educating our community
            about the narrative power of the art form.
            <br></br>
            <br></br>
            As we instill discipline and respect for art form amongst students
            and community, our sights are set to the future and how to
            facilitate the transition from Academy to Company. It is our intent
            to focus on large scale productions and establish El Paso as a
            renowned epicenter for ballet.
          </p>
          <div className="upcomingevents-button">
            <a id="events-button" href="#fullcalendar">
              <NyliaButton label={"SEE FULL CALENDAR"}></NyliaButton>
            </a>
          </div>
        </div>
        <hr></hr>

        <div className="upcomingevents-images">
          <div id="upcomingevents-gallery">
            <PhotoGallery
              images={images}
              curEventIndex={CUREVENTIDX}
            ></PhotoGallery>
          </div>
        </div>
        <div className="upcomingevents-button">
          <a id="events-button" href="">
            <NyliaButton label={"Go to Latest Event"}></NyliaButton>
          </a>
        </div>
        <hr></hr>
        <div className="upcomingevents-title" id="fullcalendar">
          <h1>2024 - 2025 CALENDAR</h1>
        </div>
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="date">
                  DATE
                </th>
                <th scope="col" colspan="3" className="event">
                  EVENT
                </th>
                <th scope="col" className="category">
                  NOTE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="date">
                  01/06/24
                </th>
                <td colspan="3" className="event">
                  1st Day of Classes
                </td>
                <td className="holiday">CLASSES RESUME</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  01/15/24
                </th>
                <td colspan="3" className="event">
                  Bring a Friend Week
                </td>
                <td className="special">Special Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/02/24
                </th>
                <td colspan="3" className="event">
                  Cinderella Movie Night
                </td>
                <td className="special">CINDERELLA</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/11/24
                </th>
                <td colspan="3" className="event">
                  Farmer's Market
                </td>
                <td className="community">Community Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/14/24
                </th>
                <td colspan="3" className="event">
                  Pas de Deux Night
                </td>
                <td className="special">Special Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/12/24
                </th>
                <td colspan="3" className="event">
                  Observation Week
                </td>
                <td className="special">Family Observation</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/21/24
                </th>
                <td colspan="3" className="event">
                  Student Assessments
                </td>
                <td className="special">Assessments</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/25/24
                </th>
                <td colspan="3" className="event">
                  Cinderella Auditions
                </td>
                <td className="special">CINDERELLA</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  03/02/24
                </th>
                <td colspan="3" className="event">
                  Ballerina Storytimes
                </td>
                <td className="special">Community Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  03/21/24
                </th>
                <td colspan="3" className="event">
                  Paint & Sip Brunch
                </td>
                <td className="special">Community Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  05/08/24
                </th>
                <td colspan="3" className="event">
                  Mom & Me Week
                </td>
                <td className="special">Special Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  05/15/24
                </th>
                <td colspan="3" className="event">
                  Observation Week
                </td>
                <td className="special">Family Observation</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  05/22/24
                </th>
                <td colspan="3" className="event">
                  Student Assessments
                </td>
                <td className="special">Assessments</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  05/27/24
                </th>
                <td colspan="3" className="event">
                  Memorial Day - NO CLASSES
                </td>
                <td className="special">Holiday</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  06/15/24
                </th>
                <td colspan="3" className="event">
                  Cinderella Ballet - UTEP's Magoffin Auditorium
                </td>
                <td className="special">CINDERELLA</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  06/26/24
                </th>
                <td colspan="3" className="event">
                  Dad & Me Week
                </td>
                <td className="special">Special Event</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  07/15/24 - 07/19/24
                </th>
                <td colspan="3" className="event">
                  Youth Summer Intensive
                </td>
                <td className="special">Monday - Friday from 8:00 - 2:00 PM</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  07/15/24 - 07/19/24
                </th>
                <td colspan="3" className="event">
                  Adult Summer Intensive
                </td>
                <td className="special">Monday - Friday from 5:00 - 8:30 PM</td>
              </tr>

              <tr>
                <th scope="row" className="date">
                  08/03/24
                </th>
                <td colspan="3" className="event">
                  Nylia Ballet Company Auditions
                </td>
                <td className="special">NBC</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  08/03/24
                </th>
                <td colspan="3" className="event">
                  Nylia Ballet Youth Company Auditions
                </td>
                <td className="special">NYBC</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  08/03/24
                </th>
                <td colspan="3" className="event">
                  Dracula Auditions
                </td>
                <td className="special">DRACULA</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  09/02/24
                </th>
                <td colspan="3" className="event">
                  Labor Day - NO CLASSES
                </td>
                <td className="special">Holiday</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  09/11/24
                </th>
                <td colspan="3" className="event">
                  Observation Week
                </td>
                <td className="special">Family Observation</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  09/18/24
                </th>
                <td colspan="3" className="event">
                  Student Assessments
                </td>
                <td className="special">Assessments</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  10/20/2024
                </th>
                <td colspan="3" className="event">
                  <b>Dracula</b>
                </td>
                <td className="special">DRACULA</td>
              </tr>

              <tr>
                <th scope="row" className="date">
                  10/26/24
                </th>
                <td colspan="3" className="event">
                  Swan Lake Auditions
                </td>
                <td className="special">SWAN LAKE</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  11/28/24 - 11/30/24
                </th>
                <td colspan="3" className="event">
                  THANKSGIVING BREAK - NO CLASSES
                </td>
                <td className="special">Holiday</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  12/04/24
                </th>
                <td colspan="3" className="event">
                  Observation Week
                </td>
                <td className="special">Family Observation</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  12/23/24 - 1/01/25
                </th>
                <td colspan="3" className="event">
                  WINTER BREAK - NO CLASSES
                </td>
                <td className="special">Holiday</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  01/02/25
                </th>
                <td colspan="3" className="event">
                  1st Day of Classes in 2025
                </td>
                <td className="holiday">CLASSES RESUME</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  FEBRUARY 2025
                </th>
                <td colspan="3" className="event">
                  <b>Swan Lake</b>
                </td>
                <td className="special">SWAN LAKE</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  02/08/25
                </th>
                <td colspan="3" className="event">
                  Sleeping Beauty Auditions
                </td>
                <td className="special">SLEEPING BEAUTY</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  4/18/25
                </th>
                <td colspan="3" className="event">
                  BREAK - NO CLASSES
                </td>
                <td className="special">Holiday</td>
              </tr>
              <tr>
                <th scope="row" className="date">
                  JUNE 2025
                </th>
                <td colspan="3" className="event">
                  <b>Sleeping Beauty</b>
                </td>
                <td className="special">SLEEPING BEAUTY</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UpcomingEvents;
