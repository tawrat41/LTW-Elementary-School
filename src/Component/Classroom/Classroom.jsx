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
    <div className="p-5" id="classroom-div">
      <Row
        xs={1}
        md={1}
        lg={2}
        className="container d-flex justify-content-center align-items-center mx-auto my-5 py-5"
      >
        <Col className="my-5">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <div className="classroom-overlay">
                <Image
                  id="classroom-image"
                  src="/src/media/c1.jfif"
                  alt=""
                  fluid
                />
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
                <Image
                  id="classroom-image"
                  src="/src/media/c2.jfif"
                  alt=""
                  fluid
                />
              </div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <div className="classroom-overlay">
                <Image
                  id="classroom-image"
                  src="/src/media/c3.jfif"
                  alt=""
                  fluid
                />
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
        <Col id="about-us-section" className="my-5">
          <h1 className="text-center align-items-center">Our Classroom</h1>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro
            maiores totam assumenda, doloremque sed consequatur est ex
            cupiditate iusto! Ullam a fuga perferendis incidunt, tempora quas
            nostrum corporis eligendi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laborum voluptatum ipsum maxime et, enim, labore
            quas earum tempore minima cumque laboriosam delectus nulla libero
            odit architecto! Omnis voluptatem soluta fugit.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ControlledCarousel;
