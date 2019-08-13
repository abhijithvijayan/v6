import React from 'react';
import { Col } from 'react-bootstrap';

const TextContentWrapper = ({ children }) => {
    return <Col md={6}>{children}</Col>;
};

export default TextContentWrapper;
