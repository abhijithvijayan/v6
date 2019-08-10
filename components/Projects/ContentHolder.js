import React from 'react';
import { Col } from 'react-bootstrap';

const ContentHolder = props => {
    const { children, customClass = '' } = props;
    return (
        <Col md={5} className={`${customClass}`}>
            {children}
        </Col>
    );
};

export default ContentHolder;
