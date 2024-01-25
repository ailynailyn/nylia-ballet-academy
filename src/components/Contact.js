import { React } from "react";
import Map from "./map/Map.js";

// import emmaBarreSm from "../assets/emmaBarre300.JPG";
// import emmaBarreMd from "../assets/emmaBarre768.JPG";
// import emmaBarreLg from "../assets/emmaBarre1280.JPG";
// import emmaBarreXL from "../assets/emmaBarre2000.JPG";
import pSm from "../assets/galleryImages/kristina300.png";
import pMd from "../assets/galleryImages/kristina-768.png";
import pLg from "../assets/galleryImages/kristina-1280.png";
import pXL from "../assets/galleryImages/kristina-2000.png";

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
    {
      smImg: pSm,
      imgSet: `${pSm} 300w, ${pMd} 768w, ${pLg} 1280w, ${pXL} 2000w`,
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
