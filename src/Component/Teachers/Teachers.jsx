/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Teachers = () => {
    return (
        <Container className='py-5 my-5' id='our-teachers'>
            <Row className='mt-5'>
                <h5 className='text-center'>INSTRUCTOR</h5>
                <h1 className='text-center'>Our Teachers</h1>
            </Row>
            <Row xs={1} md={2} lg={4} className='d-flex justify-content-around align-items-center mb-5'>
                <Col className='p-5 text-center'>
                    <Image className='px-2 py-5' src='/src/media/t-1.png' fluid roundedCircle></Image>
                    <h4>John Doe</h4>
                    <p>Principal</p>
                </Col>
                <Col className='p-5 text-center'>
                    <Image className='px-2 py-5' src='/src/media/t-2.webp' fluid roundedCircle></Image>
                    <h4>John Doe</h4>
                    <p>Vice Principal</p>
                </Col>
                <Col className='p-5 text-center'>
                    <Image className='px-2 py-5' src='/src/media/t-3.png' fluid roundedCircle></Image>
                    <h4>John Doe</h4>
                    <p>Co-ordinator</p>
                </Col>
                <Col className='p-5 text-center'>
                    <Image className='px-2 py-5' src='/src/media/t-4.png' fluid roundedCircle></Image>
                    <h4>John Doe</h4>
                    <p>Teacher</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Teachers;