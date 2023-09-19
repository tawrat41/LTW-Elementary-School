/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion"; // Add this import
import "./Classroom.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("classroom-div");
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <motion.div
      className={`p-5 ${isVisible ? "visible" : ""}`}
      id="classroom-div"
    >
      <Row
        xs={1}
        md={1}
        lg={2}
        className="container d-flex justify-content-center align-items-center mx-auto my-5 py-5"
      >
        <motion.Col
          className={`my-5 ${isVisible ? "visible" : ""}`}
          initial={{ opacity: 0, x: "-70px" }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-70px" }}
          transition={{ duration: 1 }}
        >
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
        </motion.Col>
        <motion.Col
          id="about-us-section"
          className={`my-5 ${isVisible ? "visible" : ""}`}
          initial={{ opacity: 0, x: "70px" }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "70px" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center align-items-center">Our Classroom</h1>
          <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ratione accusantium maxime ullam debitis sunt eum delectus non voluptas quos, a voluptatibus laudantium reiciendis natus tempore minima ex exercitationem placeat.</p>
        </motion.Col>
      </Row>
    </motion.div>
  );
}

export default ControlledCarousel;
