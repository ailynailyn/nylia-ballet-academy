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
          alt="First slide"
        />
      </Carousel.Item>
    ));
  };

  return <Carousel>{renderItems()}</Carousel>;
}

export default PhotoGallery;
