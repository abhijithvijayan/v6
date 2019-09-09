import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import parse from 'html-react-parser';

const SubContentWrapper = styled(Row)`
    margin-top: 25px;
    p {
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};
        font-size: 17px;
        line-height: 1.4;
        margin: 0px 0px 15px;
        strong {
            color: ${({ theme }) => {
                return theme.whiteYellow;
            }};
        }
    }
`;

const HomeSubContent = ({ data }) => {
    return (
        <SubContentWrapper>
            <Col md={6} className="animated fadeInUp" style={{ animationDelay: '500ms' }}>
                {parse(data)}
            </Col>
        </SubContentWrapper>
    );
};

export default HomeSubContent;
