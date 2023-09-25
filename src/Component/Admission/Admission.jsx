/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Admission.css';

const Admission = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('get-admission');
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <Container className='' id='get-admission'>
            <Row xs={1} md={1} lg={2} className='d-flex align-items-center mx-5 my-5 py-5'>
                <Col id='' className={`text-center p-5 my-5 ${isVisible ? 'visible' : ''}`}>
                    <motion.h1
                        className='text-center align-items-center'
                        initial={{ opacity: 0, x: '-50px' }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-50px' }}
                        transition={{ duration: 1 }}
                    >
                        Want to get your child admitted?
                    </motion.h1>
                    <motion.p
                        className='pt-5'
                        id='admission-talk'
                        initial={{ opacity: 0, x: '-50px' }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-50px' }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis ad adipisci unde ab aut ducimus ut, corrupti reprehenderit minus dolorum nisi nemo magnam! Atque voluptas consectetur hic fuga laboriosam.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: '30px' }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '30px' }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Button id='call-us' className='btn btn-success'>Call Us!</Button>
                    </motion.div>
                </Col>
                <Col className={`my-5 ${isVisible ? 'visible' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: '50px' }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '50px' }}
                        transition={{ duration: 1 }}
                    >
                        <Image id='admission-image' src='/media/admission.jpg' fluid></Image>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Admission;
