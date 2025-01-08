import { React } from "react";
import NyliaButton from "../../nyliaButton/NyliaButton.js";
import Carousel from "react-bootstrap/Carousel";

// PERFSECT2
// Performance Section 3
// Used for NONE (past), Both Important Links & Calendar of Events (active), & NONE(upcoming)

function PerfSectGallery({ images }) {
  return (
    <div className="main-img-bkg" id="performance-gallery-section">
      <div className="main-box">
        <h1 id="highlightTitle">GALLERY</h1>
        <p>
          <br />
        </p>
        {/* button for any links to more gallery stuff? */}

        <div className="shadow-box">
          {" "}
          <Carousel>
            {images.map((imageInfo, index) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageInfo.imageSrc}
                  alt="Nylia Ballet Academy"
                />
                <Carousel.Caption>
                  <h3>{imageInfo.title}</h3>
                  <p>{imageInfo.caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PerfSectGallery;
