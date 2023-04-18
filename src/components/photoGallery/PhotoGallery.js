import Carousel from "react-bootstrap/Carousel";
import "./PhotoGallery.css";

function PhotoGallery({ images }) {
  const renderItems = () => {
    return images.map((image, index) => (
      <Carousel.Item>
        <img
          key={index}
          //   className="d-block w-100"
          src={image}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    ));
  };

  return <Carousel>{renderItems()}</Carousel>;
}

export default PhotoGallery;
