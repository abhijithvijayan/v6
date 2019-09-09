import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ExperienceHeader = () => {
    return (
        <Row>
            <Col md={12} className="wow fadeInUp">
                <h2 className="d-flex align-items-center line__title">What I'm doing.</h2>
            </Col>
        </Row>
    );
};

export default ExperienceHeader;
