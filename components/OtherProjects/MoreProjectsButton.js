import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Button = styled.button`
    margin: 100px auto 0px;
    cursor: pointer;
`;

const MoreProjectsButton = () => {
    return (
        <Row>
            <Col md={12} className="text-center">
                <Button type="button" className="button__main">
                    More Projects
                </Button>
            </Col>
        </Row>
    );
};

export default MoreProjectsButton;
