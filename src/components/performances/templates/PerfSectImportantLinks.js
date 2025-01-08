import { React } from "react";
import NyliaButton from "../../nyliaButton/NyliaButton.js";

// PERFSECT2
// Performance Section 3: Important Links
// Used for NONE (past),  Important Links (active), & NONE(upcoming)

function PerfSectImportantLinks({ importantLinks }) {
  return (
    <div className="main-img-bkg" id="performance-importantlinks-section">
      <div className="main-box">
        <h1 id="highlightTitle">IMPORTANT LINKS</h1>
        <p>
          <br />
        </p>
        <hr></hr>
        {importantLinks.map((linkInfo, index) => (
          <div>
            <br></br>
            <a href={linkInfo.buttonLink}>
              <NyliaButton label={linkInfo.buttonLabel}></NyliaButton>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerfSectImportantLinks;
