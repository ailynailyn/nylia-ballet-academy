import { React } from "react";
import NyliaButton from "../../nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";

// PERFSECT2
// Performance Section 3
// Used for NONE (past), Both Important Links & Calendar of Events (active), & NONE(upcoming)

function PerfSectCalendar({ eventCalendar }) {
  return (
    <div className="main-img-bkg" id="performance-calendar-section">
      <div className="main-box">
        <h1 id="highlightTitle">EVENT CALENDAR</h1>
        <p>
          <br />
        </p>

        <div className="shadow-box">
          <Accordion flush>
            {eventCalendar.map((eventInfo, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  <b id="highlightTitle">
                    {eventInfo.date}: {eventInfo.eventName}
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  {eventInfo.title && (
                    <p>
                      <b>{eventInfo.title}</b>
                      {eventInfo.subtitle && (
                        <p>
                          {eventInfo.subtitle}
                          <br />
                        </p>
                      )}
                    </p>
                  )}
                  {eventInfo.caption && <p>{eventInfo.caption}</p>}
                  {eventInfo.buttonLink && (
                    <NyliaButton
                      label={eventInfo.buttonLabel}
                      link={eventInfo.buttonLink}
                    ></NyliaButton>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default PerfSectCalendar;
