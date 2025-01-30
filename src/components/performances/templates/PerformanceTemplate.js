import { React } from "react";

import NyliaButton from "../../nyliaButton/NyliaButton.js";
import PerfSect2 from "./PerfSect2";
import PerfSectImportantLinks from "./PerfSectImportantLinks";
import PerfSectCalendar from "./PerfSectCalendar";
import PerfSectGallery from "./PerfSectGallery";

import Accordion from "react-bootstrap/Accordion";

import "./PerformanceTemplate.css";
////////////////
// PARAMETERS //
////////////////
// Pass in the show status: {PAST, ACTIVE, UPCOMING}

////////////////////
// PAGE STRUCTURE //
////////////////////
// Section Structure ->
//   1st (Header)
//   2nd (Program OR Tickets OR Auditions)
//   3rd (Guidelines)
//   4th (ONLY CURRENT SHOWS: Important Links AND Calendar)
//   5th (Gallery)
//
// Past shows: Header, Program, Guidelines, Gallery
// Active shows: Header, Tickets, Guidelines, { Important Links, Calendar }, Gallery
// Upcoming shows: Header, Auditions, Guidelines, Gallery
// 3rd Section

function PerformanceTemplate({
  status,
  showName,
  showDate,
  headerDescription,
  handbookLink,
  auditionDate,
  perfSect2ButtonLink,
  perfSect2Images,
  importantLinks,
  eventCalendar,
  galleryImages,
  performanceWeek, // boolean used to trigger the program & ticket sales at the same time
  perfSect2PerformanceWeekButtonLink,
}) {
  const past = "PAST";
  const active = "ACTIVE";
  const upcoming = "UPCOMING";
  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(false);
  };
  const showNameCaps = showName.toUpperCase();

  // CAST GUIDELINES DESCRIPTION
  const pastGuidelinesDesc = `Welcome, ${showName} cast! This section celebrated all the hard work and dedication that made this show a success. Here, you found helpful guidelines to support you during rehearsals and performance days, along with links to resources like schedules and costume care. Take pride in everything we accomplished together—what a magical journey it was!`;
  const activeGuidelinesDesc = `Welcome, ${showName} cast! This section celebrates all the hard work
  and dedication that make this show a success. Here, you’ll find
  helpful guidelines to support you during rehearsals and performance
  days, along with links to resources like schedules and costume care.
  Take pride in everything we’re accomplishing together—what a magical
  journey this is!`;
  const upcomingGuidelinesDesc = `Welcome, ${showName} cast! This space will celebrate your dedication and guide you with tips, schedules, and costume care. Together, we’ll bring ${showName} to life—what a magical journey it will be!`;

  const castGuidelinesDesc =
    status === past
      ? pastGuidelinesDesc
      : status === active
      ? activeGuidelinesDesc
      : upcomingGuidelinesDesc;

  // HANDBOOK
  const handbookButtonLabel = handbookLink
    ? showNameCaps + " HANDBOOK"
    : "HANDBOOK COMING SOON";

  return (
    <div class="main-container">
      <div className="main-img-bkg" id="performance-header-section">
        <div className="main-title">
          <h1>{showNameCaps}</h1>
        </div>
        <div className="main-box">
          <h1>Nylia Ballet Company's {showName}</h1>
          <h2>{showDate}</h2>
          <p>
            <br />
            {headerDescription}
          </p>
          <a href="/performances">
            <NyliaButton label={"more performances"}></NyliaButton>
          </a>
        </div>
      </div>
      <PerfSect2
        status={status}
        showName={showName}
        auditionDate={auditionDate}
        buttonLink={perfSect2ButtonLink}
        sectionImages={perfSect2Images}
      />
      {/* Used when a production is near the end and a link program & tickets are both needed */}
      {performanceWeek === true && (
        <div>
          <PerfSect2
            status={"PAST"}
            showName={showName}
            buttonLink={perfSect2PerformanceWeekButtonLink}
          />
        </div>
      )}

      <div className="main-img-bkg" id="performance-guidelines-section">
        <div className="main-box">
          <h1 id="highlightTitle">{showNameCaps} CAST</h1>
          <h2>Performing Dancer's Guidelines</h2>
          <p>
            <br />
            {castGuidelinesDesc}
            <br /> <br />
          </p>

          <br></br>
          <div className="shadow-box">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b id="highlightTitle">{showNameCaps} HANDBOOK</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Take a look at our dedicated {showName} Handbook, where
                    you'll find everything you need to guide you through this
                    performance season, including:
                    <br />
                    <ul>
                      <li>Important dates</li>
                      <li>
                        Costume Information <br />
                      </li>
                      <li>
                        Rehearsal Information <br />
                      </li>
                      <li>
                        Dress Rehearsal <br />
                      </li>
                      <li>Performance Guidelines</li>
                      <li>
                        Performance Day <br />
                      </li>
                    </ul>
                    <NyliaButton
                      label={handbookButtonLabel}
                      link={handbookLink}
                    ></NyliaButton>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      {status == active && (
        <PerfSectImportantLinks importantLinks={importantLinks} />
      )}

      {status == active && <PerfSectCalendar eventCalendar={eventCalendar} />}
      {galleryImages && (
        <PerfSectGallery images={galleryImages}></PerfSectGallery>
      )}
    </div>
  );
}

export default PerformanceTemplate;
