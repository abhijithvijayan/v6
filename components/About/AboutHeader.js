import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { trimQuotes } from '../../utils';

const AboutHeader = ({ title }) => {
    return (
        <Row>
            <Col md={12}>
                <h2 className="d-flex align-items-center line__title">{trimQuotes(title)}</h2>
            </Col>
        </Row>
    );
};

export default AboutHeader;
