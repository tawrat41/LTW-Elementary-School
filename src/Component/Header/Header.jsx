/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css"; // Import your CSS file
import { Col, Image, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div id='banner' className="d-flex align-items-center">
      <Row
      
      xs={1}
      md={1}
      lg={2}
      className="container d-flex justify-content-center align-items-center mx-auto"
    >
      <Col className="container mt-5">
        <div className="container my-5 px-5">
          <h2>Welcome to</h2>
          <h1 className="text-fluid" id='lead-the-way'>LEAD THE WAY</h1>
          <h2>Elementary School</h2>
          <button className="btn btn-success my-3">Admission Going On!</button>
        </div>
      </Col>

      <Col className="mt-5 px-5">
        <Image src="/src/media/banner.png" width={700}></Image>
      </Col>
    </Row>
    </div>
  );
};

export default Header;
