import { React } from "react";
import Map from "./map/Map.js";

import emmaBarreSm from "../assets/emmaBarre300.JPG";
import emmaBarreMd from "../assets/emmaBarre768.JPG";
import emmaBarreLg from "../assets/emmaBarre1280.JPG";
import emmaBarreXL from "../assets/emmaBarre2000.JPG";

import ContactForm from "./contact/ContactForm.js";
import PhotoGallery from "./photoGallery/PhotoGallery.js";
import { SocialIcon } from "react-social-icons";

import "./Contact.css";

function Contact() {
  const location = {
    address: "13340 Soleen Rd. Suite D, El Paso, Texas, 79938",
    lat: 31.823562,
    lng: -106.223031,
  };

  const images = [
    // {
    //   smImg: evanSittingSm,
    //   imgSet: `${evanSittingSm} 300w, ${evanSittingMd} 768w, ${evanSittingLg} 1280w, ${evanSittingXL} 2000w`,
    // },
    // {
    //   smImg: anahidFourthSm,
    //   imgSet: `${anahidFourthSm} 300w, ${anahidFourthMd} 768w, ${anahidFourthLg} 1280w, ${anahidFourthXL} 2000w`,
    // },
    // {
    //   smImg: luisaPoseSm,
    //   imgSet: `${luisaPoseSm} 300w, ${luisaPoseMd} 768w, ${luisaPoseLg} 1280w, ${luisaPoseXL} 2000w`,
    // },
    // {
    //   smImg: tereTenduSm,
    //   imgSet: `${tereTenduSm} 300w, ${tereTenduMd} 768w, ${tereTenduLg} 1280w, ${tereTenduXL} 2000w`,
    // },
    {
      smImg: emmaBarreSm,
      imgSet: `${emmaBarreSm} 300w, ${emmaBarreMd} 768w, ${emmaBarreLg} 1280w, ${emmaBarreXL} 2000w`,
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
    <div class="contact-container">
      <div className="mobile-contact-title">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-images">
        <div id="contact-gallery">{renderImages()}</div>
        <div id="mobile-contact-gallery">
          <PhotoGallery images={images}></PhotoGallery>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-message">
          <div className="contact-title">
            <h1>CONTACT</h1>
          </div>
          <div className="form-container">
            <ContactForm></ContactForm>
          </div>
        </div>
        <div className="contact-map">
          <Map location={location} zoomLevel={17} />
        </div>
        <div className="contact-address">
          <h2>SCHOOL ADDRESS</h2>
          <p>
            13340 Soleen Rd, Suite D<br></br>
            El Paso, Texas 79938
            <br></br>
            (915) 478 - 7380
            <br></br>
            info@nyliaballetacademy.com
          </p>
          <SocialIcon
            url="https://www.facebook.com/nyliaballetacademy/"
            network="facebook"
            bgColor="#7D83AA"
            fgColor="white"
            style={{ marginRight: "1rem" }}
          />
          <SocialIcon
            url="https://www.instagram.com/nyliaballetacademy/"
            network="instagram"
            bgColor="#7DAAA4"
            fgColor="white"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
