import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

import "./PhotoGallery.css";

function PhotoGallery({ images, curEventIndex }) {
  const renderItems = () => {
    return images.map((imageInfo, index) => (
      <Carousel.Item interval={4000}>
        <img
          key={index}
          src={imageInfo.smImg}
          srcSet={imageInfo.imgSet}
          alt="Nylia Ballet Academy Photo Gallery image"
        />
      </Carousel.Item>
    ));
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" defaultActiveIndex={curEventIndex}>
      {renderItems()}
    </Carousel>
  );
}

export default PhotoGallery;
