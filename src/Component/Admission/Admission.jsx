/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './/Admission.css'

const Admission = () => {
    return (
        <Container className='' id='get-admission'>
            <Row xs={1} md={1} lg={2} className='d-flex align-items-center mx-5 my-5 py-5'>
                <Col id='' className='text-center p-5 my-5'>
                    <h1 className='text-center align-items-center'>Want to get your child admitted?</h1>
                    <p className='pt-5' id='admission-talk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis ad adipisci unde ab aut ducimus ut, corrupti reprehenderit minus dolorum nisi nemo magnam! Atque voluptas consectetur hic fuga laboriosam.</p>
                    <Button id='call-us' className='btn btn-success'>CAll US!</Button>
                </Col>
                <Col  className='my-5'>
                    <Image id='admission-image' src='/media/admission.jpg' fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Admission;