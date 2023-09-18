/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutUS.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUS = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    // <motion.div
    //     initial="hidden"
    //     animate="visible"
    //     variants={variants}
    // >
    <Container id="about-us">
      <Row
        xs={1}
        md={1}
        lg={2}
        className="d-flex align-items-center mx-5 my-5 py-5"
      >
        <Col id="about-us-section" className="my-5">
          <h1 className="text-center align-items-center my-2">Who are We??</h1>
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
        <Col id="about-us-section" className="my-5">
          <Image src="/src/media/ltw-school.jpg" rounded></Image>
        </Col>
      </Row>
    </Container>
    // </motion.div>
  );
};

export default AboutUS;
