import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ProjectsHeader = () => {
    return (
        <Row>
            <Col md={12} className="wow fadeInUp">
                <h2 className="d-flex align-items-center line__title">Some Things I've Built</h2>
            </Col>
        </Row>
    );
};

export default ProjectsHeader;
