import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const MainContentWrapper = styled(Row)`
    .intro__text {
        font-size: 16px;
        font-weight: normal;
        margin: 0px 0px 15px 3px;
        font-family: ${({ theme }) => {
            return theme.sfmono;
        }};
        color: ${({ theme }) => {
            return theme.whiteYellow;
        }};
    }

    .main__text {
        font-size: 6p8x;
        line-height: 1.1;
        margin: 0px;
        color: ${({ theme }) => {
            return theme.headWhite;
        }};
        font-weight: ${({ theme }) => {
            return theme.semibold;
        }};
    }

    .end__text {
        font-size: 68px;
        line-height: 1.1;
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};
        font-weight: ${({ theme }) => {
            return theme.semibold;
        }};
    }

    .main__text,
    .end__text {
        // 1000
        @media screen and (max-width: 62.5em) {
            font-size: 62px;
        }

        /* // 768
        @media screen and (max-width: ${({ theme }) => {
            return theme.screenSmMin;
        }}) {
            font-size: 52px;
        } */

        // 481 - 768
        @media screen and (min-width: $${({ theme }) => {
            return theme.screenXsMin;
        }}) and (max-width: ${({ theme }) => {
    return theme.screenSmMin;
}}) {
            font-size: 52px;
        }
        
        // 480 
        @media screen and (max-width: ${({ theme }) => {
            return theme.screenXxsMax;
        }}) {
            font-size: 42px;
        }

        // 376
        @media screen and (max-width: 23.5em) {
            font-size: 39px;
        }
    }
`;

const HomeMainContent = ({ data }) => {
    const { title, name, subtitle } = data;
    return (
        <MainContentWrapper>
            <Col md={12}>
                <h2 className="intro__text animated fadeInUp" style={{ animationDelay: '125ms' }}>
                    {title}
                </h2>
                <h1 className="main__text animated fadeInUp" style={{ animationDelay: '250ms' }}>
                    {name}
                </h1>
                <h2 className="end__text animated fadeInUp" style={{ animationDelay: '375ms' }}>
                    {subtitle}
                </h2>
            </Col>
        </MainContentWrapper>
    );
};

export default HomeMainContent;
