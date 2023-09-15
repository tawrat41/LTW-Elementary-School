import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Classroom.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container p-5" id="classroom-div">
      <Row xs={1} md={1} lg={2} className='d-flex align-items-center mx-5 my-5 py-5'>
        <Col className="my-5">
          <h1 className="text-center align-items-center py-5">Our Classroom</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse consectetur excepturi, quasi nostrum impedit qui magni hic voluptas, eius deserunt porro? Illum fugiat eveniet veritatis unde minus necessitatibus quae?</p>
        </Col>
        <Col className="my-5">
          <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <div className="classroom-overlay">
                <Image src="/src/media/c1.jfif" alt="" fluid />
              </div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <div className="classroom-overlay">
              <Image src="/src/media/c2.jfif" alt="" fluid />
              </div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <div className="classroom-overlay">
              <Image src="/src/media/c3.jfif" alt="" fluid />
              </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default ControlledCarousel;
