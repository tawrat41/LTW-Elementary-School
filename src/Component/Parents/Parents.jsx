/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Carousel, Row, Col, Image, Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Parents.css";

const Parents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("our-parents");
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="my-5 py-5" id="our-parents">
      <motion.h5
        className="text-center"
        initial={{ opacity: 0, y: "-50px" }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "-50px" }}
        transition={{ duration: 1 }}
      >
        TESTIMONIAL
      </motion.h5>
      <motion.h1
        className="text-center mb-5"
        initial={{ opacity: 0, y: "-50px" }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "-50px" }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        What do our Parents say?
      </motion.h1>
      <Carousel className="container my-5" id="parent-carousel">
        <Carousel.Item interval={5000}>
          <Row xs={1} md={1} lg={3}>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            {/* Add similar motion.div elements for other testimonials */}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row xs={1} md={1} lg={3}>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                className="container"
                id="testimionial-div"
                initial={{ opacity: 0, y: "50px" }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "50px" }
                }
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="d-flex justify-content-center p-2 my-5">
                  <div className="px-3">
                    <Figure.Image
                      src="/media/t-1.png"
                      width={60}
                      height={60}
                    ></Figure.Image>
                  </div>
                  <div>
                    <h4>Mr. Ahmed</h4>
                    <span id="rating-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                </div>
                <div id="testimionial-div-saying" className="mx-3">
                  <p className="">
                    <span id="inverted-comma">
                      <i className="fa-solid fa-quote-left fa-2xl p-2"></i>
                    </span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas id eum accusantium, delectus molestiae odit adipisci,
                    unde placeat quaerat sequi perspiciatis molestias recusandae
                  </p>
                </div>
              </motion.div>
            </Col>
            {/* Add similar motion.div elements for other testimonials */}
          </Row>
        </Carousel.Item>
        {/* Add similar Carousel.Items for other sets of testimonials */}
      </Carousel>
    </div>
  );
};

export default Parents;
