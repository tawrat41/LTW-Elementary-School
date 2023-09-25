/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Image, Figure } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Parents.css';

const Parents = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('our-parents');
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
        <div className='my-5 py-5' id='our-parents'>
            <motion.h5
                className='text-center'
                initial={{ opacity: 0, y: '-50px' }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '-50px' }}
                transition={{ duration: 1 }}
            >
                TESTIMONIAL
            </motion.h5>
            <motion.h1
                className='text-center mb-5'
                initial={{ opacity: 0, y: '-50px' }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '-50px' }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                What do our Parents say?
            </motion.h1>
            <Carousel className='container my-5' id='parent-carousel'>
                <Carousel.Item interval={50000}>
                    <Row xs={1} md={1} lg={3}>
                        <Col>
                            <motion.div
                                className='container'
                                id='testimionial-div'
                                initial={{ opacity: 0, y: '50px' }}
                                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: '50px' }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                {/* ... rest of the code ... */}
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
