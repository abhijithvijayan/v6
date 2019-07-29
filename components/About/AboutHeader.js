import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutHeader = () => {
    return (
        <Row>
            <Col md={12}>
                <h2 className="d-flex align-items-center line-title">About Me</h2>
            </Col>
        </Row>
    );
};

export default AboutHeader;
