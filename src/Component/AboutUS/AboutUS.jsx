/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./AboutUS.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUS = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-us");
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
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
    <Container id="about-us">
      <Row xs={1} md={1} lg={2} className="d-flex align-items-center mx-5 my-5 py-5">
        <Col id="about-us-section" className={`my-5 about-us-section left ${isVisible ? "visible" : ""}`}>
          <motion.h1
            className="text-center align-items-center my-2"
            initial={{ opacity: 0, x: '-50px' }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-50px' }}
            transition={{ duration: 1 }}
          >
            Who are We??
          </motion.h1>
          <motion.p
            className="m-4"
            initial={{ opacity: 0, x: '-50px' }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-50px' }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam consequatur minus? Inventore eum velit ex ipsam cum? Nulla voluptatibus odit animi ea quo eveniet nam magnam necessitatibus at cumque.
          </motion.p>
        </Col>
        <Col id="about-us-section" className={`my-5 about-us-section right ${isVisible ? "visible" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: '50px' }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '50px' }}
            transition={{ duration: 1 }}
          >
            <Image src="/src/media/ltw-school.jpg" rounded />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUS;
