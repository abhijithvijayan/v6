import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const MainContentWrapper = styled(Row)`
    .intro__text {
        font-size: 16px;
        font-weight: normal;
        margin: 0px 0px 15px 3px;
        font-family: ${props => {
            return props.theme.sfmono;
        }};
        color: ${props => {
            return props.theme.whiteYellow;
        }};
    }

    .main__text {
        font-size: 70px;
        line-height: 1.1;
        margin: 0px;
        color: ${props => {
            return props.theme.headWhite;
        }};
        font-weight: ${props => {
            return props.theme.semibold;
        }};
    }

    .end__text {
        font-size: 70px;
        line-height: 1.1;
        color: ${props => {
            return props.theme.skyBlue;
        }};
        font-weight: ${props => {
            return props.theme.semibold;
        }};
    }

    .main__text,
    .end__text {
        @media screen and (max-width: 62.5em) {
            font-size: 63px;
        }

        @media screen and (max-width: ${props => {
                return props.theme.screenSmMin;
            }}) {
            font-size: 53px;
        }

        @media screen and (max-width: ${props => {
                return props.theme.screenXxsMin;
            }}) {
            font-size: 43px;
        }
    }
`;

const HomeMainContent = () => {
    return (
        <MainContentWrapper>
            <Col md={12}>
                <h2 className="intro__text">Hi, I am</h2>
                <h1 className="main__text">Abhijith Vijayan.</h1>
                <h2 className="end__text">an Engineer in the making.</h2>
            </Col>
        </MainContentWrapper>
    );
};

export default HomeMainContent;
