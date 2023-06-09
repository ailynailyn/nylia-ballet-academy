import Carousel from "react-bootstrap/Carousel";
import "./PhotoGallery.css";

function PhotoGallery({ images }) {
  const renderItems = () => {
    return images.map((imageInfo, index) => (
      <Carousel.Item>
        <img
          key={index}
          src={imageInfo.smImg}
          srcSet={imageInfo.imgSet}
          alt="Nylia Ballet Academy Photo Gallery image"
        />
      </Carousel.Item>
    ));
  };

  return <Carousel variant="dark">{renderItems()}</Carousel>;
}

export default PhotoGallery;
