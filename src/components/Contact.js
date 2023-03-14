import { React } from "react";
import { ReactSmartScroller } from "react-smart-scroller";
import { VerticalGallery } from "./VerticalGallery.js";
import tempImg from "../assets/temp-contact.jpg";
import logo from "../assets/nylia-logo.png";
import "./Contact.css";

function Contact() {
  const renderImages = () => {
    const images = [tempImg, logo, tempImg, logo];

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
      <div className="contact-images">
        <div id="contact-gallery">{renderImages()}</div>
      </div>
      <div className="contact-info">
        <p>HELLO AILYN info</p>
      </div>
    </div>
  );
}

export default Contact;
