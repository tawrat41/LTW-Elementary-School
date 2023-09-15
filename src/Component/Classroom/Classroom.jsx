import { useState } from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Classroom.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container p-5" id="classroom-div">
      <Row>
      <h1 className='text-center align-items-center p-5'>Our Classroom</h1>
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <div className="classroom-overlay">
              <img src="/src/media/c1.jfif" alt="" />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <div className="classroom-overlay">
              <img src="/src/media/c2.jfif" alt="" />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <div className="classroom-overlay">
              <img src="/src/media/c3.jfif" alt="" />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Row>
    </div>
  );
}

export default ControlledCarousel;
