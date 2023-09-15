/* eslint-disable no-unused-vars */
import React from 'react';
import './AboutUS.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUS = () => {
    return (
        <Container>
            <Row xs={1} md={1} lg={2} className='d-flex align-items-center mx-5 my-5 py-5'>
                <Col id='about-us-section' ><h1 className='text-center align-items-center my-5 p-5'>Who are We??</h1></Col>
                <Col id='about-us-section' ><p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro maiores totam assumenda, doloremque sed consequatur est ex cupiditate iusto! Ullam a fuga perferendis incidunt, tempora quas nostrum corporis eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatum ipsum maxime et, enim, labore quas earum tempore minima cumque laboriosam delectus nulla libero odit architecto! Omnis voluptatem soluta fugit.</p></Col>
            </Row>
        </Container>
    );  
};  

export default AboutUS;