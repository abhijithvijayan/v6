import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { trimQuotes } from '../../utils';

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
        font-size: 70px;
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
        font-size: 70px;
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
        @media screen and (max-width: 62.5em) {
            font-size: 63px;
        }

        @media screen and (max-width: ${({ theme }) => {
                return theme.screenSmMin;
            }}) {
            font-size: 53px;
        }

        @media screen and (max-width: ${({ theme }) => {
                return theme.screenXxsMin;
            }}) {
            font-size: 43px;
        }
    }
`;

const HomeMainContent = ({ data }) => {
    const { title, name, subtitle } = data;
    return (
        <MainContentWrapper>
            <Col md={12}>
                <h2 className="intro__text">{trimQuotes(title)}</h2>
                <h1 className="main__text">{trimQuotes(name)}</h1>
                <h2 className="end__text">{trimQuotes(subtitle)}</h2>
            </Col>
        </MainContentWrapper>
    );
};

export default HomeMainContent;
