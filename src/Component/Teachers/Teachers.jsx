


/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Teachers = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('our-teachers');
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
        <Container className='py-5 my-5' id='our-teachers'>
            <Row className='mt-5'>
                <motion.h5
                    className='text-center'
                    initial={{ opacity: 0, y: '-60px' }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '-60px' }}
                    transition={{ duration: 1 }}
                >
                    INSTRUCTOR
                </motion.h5>
                <motion.h1
                    className='text-center'
                    initial={{ opacity: 0, y: '-60px' }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '-60px' }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Our Teachers
                </motion.h1>
            </Row>
            <Row xs={1} md={2} lg={4} className='d-flex justify-content-around align-items-center mb-5'>
                <Col className='p-5 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: '60px' }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '60px' }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image className='px-2 py-5' src='/media/t-1.png' fluid roundedCircle></Image>
                        <h4>John Doe</h4>
                        <p>Principal</p>
                    </motion.div>
                </Col>
                <Col className='p-5 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: '60px' }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '60px' }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image className='px-2 py-5' src='/media/t-1.png' fluid roundedCircle></Image>
                        <h4>John Doe</h4>
                        <p>Principal</p>
                    </motion.div>
                </Col>
                <Col className='p-5 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: '60px' }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '60px' }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image className='px-2 py-5' src='/media/t-1.png' fluid roundedCircle></Image>
                        <h4>John Doe</h4>
                        <p>Principal</p>
                    </motion.div>
                </Col>
                <Col className='p-5 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: '60px' }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '60px' }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image className='px-2 py-5' src='/media/t-1.png' fluid roundedCircle></Image>
                        <h4>John Doe</h4>
                        <p>Principal</p>
                    </motion.div>
                </Col>
                {/* Add similar motion.div elements for other teachers */}
            </Row>
        </Container>
    );
};

export default Teachers;
