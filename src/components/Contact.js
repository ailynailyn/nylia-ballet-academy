import { React } from "react";
import Map from "./map/Map.js";
import tempImg from "../assets/temp-contact.jpg";
import logo from "../assets/nylia-logo.png";
import logo2 from "../assets/NYLIA.png";
import anahidFourthPose from "../assets/anahidFourthPose.jpeg";
import luisaPose from "../assets/luisaPose.JPG";
import keinaPose from "../assets/keinaPose.JPG";
import zoePose from "../assets/zoePose.jpeg";
import firstPositionPose from "../assets/firstPositionPose.jpeg";

import ContactForm from "./contact/ContactForm.js";
import NyliaButton from "./nyliaButton/NyliaButton.js";
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
    anahidFourthPose,
    keinaPose,
    luisaPose,
    firstPositionPose,
    zoePose,
  ];

  const renderImages = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image}
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
            (915) 328 - 0422
            <br></br>
            info@nyliaballetacademy.com
          </p>
          <SocialIcon
            url="https://www.facebook.com/people/Nylia-Ballet-Academy/100090503081625/"
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
