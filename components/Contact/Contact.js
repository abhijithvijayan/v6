import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import ContactHeader from './ContactHeader';
import ContactContentHolder from './ContactContentHolder';

const ContactWrapper = styled.div`
    max-width: 600px;
    margin: 0px auto 100px;
`;

const Contact = () => {
    return (
        <section id="contact">
            <ContactWrapper className="wrapper">
                <Row>
                    <Col md={12} className="text-center">
                        <ContactHeader />
                        <ContactContentHolder />
                    </Col>
                </Row>
            </ContactWrapper>
        </section>
    );
};

export default Contact;
