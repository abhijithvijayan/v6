import React from 'react';
import { Col, Row } from 'react-bootstrap';

const GetInTouch = ({ data }) => {
    return (
        <Row className="pb-4">
            <Col style={{ marginTop: '50px' }} md={12}>
                <a href="#contact" className="button__main">
                    {data}
                </a>
            </Col>
        </Row>
    );
};

export default GetInTouch;
