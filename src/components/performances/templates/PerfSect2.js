import { React } from "react";
import NyliaButton from "../../nyliaButton/NyliaButton.js";

// PERFSECT2
// Performance Section 2
// Used for Program (past), Tickets (active), & Auditions(upcoming)

function PerfSect2({
  showName,
  status,
  sectionImages,
  auditionDate,
  buttonLink,
}) {
  const showNameCaps = "showNameCaps";
  const title =
    status === "PAST"
      ? `${showName.toUpperCase()} PROGRAM`
      : status === "ACTIVE"
      ? `${showName.toUpperCase()} TICKETS`
      : status === "UPCOMING"
      ? `${showName.toUpperCase()} AUDITIONS`
      : "";

  const subtitle =
    status === "PAST"
      ? "Performance Program & Credits"
      : status === "ACTIVE"
      ? `Reserve Your Place at the Ballet – Tickets Available Now!`
      : status === "UPCOMING"
      ? `Calling All Dancers – Join Our Next Production!`
      : "";

  const caption =
    status === "PAST"
      ? `Discover the heart of our production with the official performance program! This beautifully designed program includes full credits, show details, and acknowledgments of the incredible talent and effort behind ${showName}. Download it below to explore the artistry and dedication that make this performance unforgettable.`
      : status === "ACTIVE"
      ? "Join us in supporting the Nylia Ballet Company, a true treasure of El Paso, Texas! Your ticket not only grants you access to an unforgettable performance but also helps nurture the local talent and passion that make our community shine. Don’t miss the chance to be a part of something special!"
      : status === "UPCOMING"
      ? `Audition for the Nylia Ballet Company’s ${showName}—an opportunity to be part of something truly special. We’d be lucky to have you join our community, creating something beautiful and unforgettable. It’s a chance to grow, to connect, and to make your dreams a reality. Don’t miss out on this rewarding experience`
      : "";

  const buttonLabel =
    status === "PAST"
      ? `${showName} PROGRAM`
      : status === "ACTIVE"
      ? // ? `Reserve Your Seat`
        `purchase your tickets at nylia ballet academy`
      : status === "UPCOMING"
      ? "Register for auditions"
      : "";

  return (
    <div className="main-img-bkg" id="performance-second-section">
      <div className="main-box">
        {sectionImages && (
          <div className="main-img">
            <img
              src={sectionImages.sm}
              srcSet={`${sectionImages.sm} 300w, ${sectionImages.md} 768w, ${sectionImages.lg} 1280w, ${sectionImages.xl} 2000w`}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Adult ballet students for Nylia Ballet Academy in El Paso, Texas"
            />
          </div>
        )}
        <h1 id="highlightTitle">{title}</h1>
        <h2>{subtitle}</h2>
        <p>
          <br />
          {caption}
          <br /> <br />
        </p>
        {status === "UPCOMING" && (
          <div>
            {" "}
            <hr></hr>
            <br></br>
            <h2>
              <b>{showName.toUpperCase()} AUDITIONS</b>
            </h2>
            <p>
              <b>{auditionDate.toUpperCase()}</b>
              <br></br>
              Auditions will be held at Nylia Ballet Academy
            </p>
            <br></br>
            <p style={{ textAlign: "left" }}>
              <b>YOUTH AUDITIONS</b>
              <br></br>
              <b>10:00 AM:</b>{" "}
              <i>Check-in for all youth audition participants </i>
              <br></br>
              <b>10:30 AM:</b> <i>4 - 9 years old</i>
              <br></br>
              <b>11:00 AM:</b> <i>10-13 years old</i>
              <br></br>
              <b>11:30 AM:</b> <i>14-18 years old </i>
              <br></br>
              <b>12:00 PM:</b> <i>Youth Parent Meeting</i>
              <br></br>
              <br></br>
              <b>ADULT AUDITIONS</b>
              <br></br>
              <b>11:30 AM:</b>{" "}
              <i>Check-in for all adult audition participants</i>
              <br></br>
              <b>12:00 PM:</b> <i>Beginner adults </i>
              <br></br>
              <b>12:30 PM:</b> <i>Intermediate & advanced adults</i>
              <br></br>
            </p>
          </div>
        )}

        <br></br>
        <a href={buttonLink}>
          <NyliaButton label={buttonLabel}></NyliaButton>
        </a>
        {status === "UPCOMING" && (
          <div>
            <hr></hr>

            <br></br>
            <a href="/auditionguidelines">
              <NyliaButton label="AUDITION GUIDELINES"></NyliaButton>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PerfSect2;
