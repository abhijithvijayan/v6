import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const StyledHeading = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: ${({ theme }) => {
        return theme.semibold;
    }};
    color: ${({ theme }) => {
        return theme.headWhite;
    }};
    margin: 10px 0px 40px;
    white-space: nowrap;

    @media screen and (max-width: ${({ theme }) => {
            return theme.screenSmMin;
        }}) {
        font-size: 24px;
    }
`;

const OtherProjectsHeader = () => {
    return (
        <Row>
            <Col md={12} className="wow fadeInUp">
                <StyledHeading>Other Projects</StyledHeading>
            </Col>
        </Row>
    );
};

export default OtherProjectsHeader;
