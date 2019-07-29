import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const GetInTouchWrapper = styled(Col)`
    margin-top: 50px;
`;

const GetInTouch = () => {
    return (
        <Row className="pb-4">
            <GetInTouchWrapper md={12}>
                <a href="#contact">Get in Touch</a>
            </GetInTouchWrapper>
        </Row>
    );
};

export default GetInTouch;
