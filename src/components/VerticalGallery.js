import React from "react";
import { ReactSmartScroller } from "react-smart-scroller";
import tempImg from "../assets/temp-contact.jpg";
import logo from "../assets/nylia-logo.png";

import "./VerticalGallery.css";

// TODO AILYN: Will leave this for now in case of use, but if removed, remove from readme and package.json dependencies

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

export const VerticalGallery = () => (
  <ReactSmartScroller
    draggable
    // vertical
    // spacing={10}

    thumb={
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "orange",
        }}
      />
    }
    trackProps={{
      height: 25,
    }}
  >
    {renderImages()}
  </ReactSmartScroller>
);

export default VerticalGallery;
