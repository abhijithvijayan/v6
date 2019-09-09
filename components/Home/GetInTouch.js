import React from 'react';
import { Col, Row } from 'react-bootstrap';

const GetInTouch = ({ data }) => {
    return (
        <Row className="pb-4">
            <Col md={12} style={{ marginTop: '50px', animationDelay: '625ms' }} className="animated fadeInUp ">
                <a href="#contact" className="button__main">
                    {data}
                </a>
            </Col>
        </Row>
    );
};

export default GetInTouch;
