import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import SocialIcons from './SocialIcons';
import RepoLink from './RepoLink';

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => {
        return theme.darkredPurple;
    }};
    color: ${({ theme }) => {
        return theme.skyBlue;
    }};
    height: auto;
    min-height: 90px !important;
    padding: 15px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Row className="w-100">
                <Col md={12} className="text-center">
                    <SocialIcons />
                    <RepoLink />
                </Col>
            </Row>
        </FooterWrapper>
    );
};

export default Footer;
