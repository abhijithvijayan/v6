import React from 'react';
import styled from 'styled-components';
import { Col, Nav } from 'react-bootstrap';

const TitlesWrapper = styled(Nav)`
    border-bottom: 0 !important;
    position: relative;

    @media screen and (max-width: 37.5em) {
        flex-wrap: nowrap;
        margin-bottom: 30px;
        width: 100%;
        overflow-x: scroll;
    }

    .nav-link.active {
        background-color: ${({ theme }) => {
            return theme.lightPurple;
        }} !important;
        color: ${({ theme }) => {
            return theme.whiteYellow;
        }} !important;
        border: none !important;
        border-radius: 0 !important;
    }

    a {
        color: ${({ theme }) => {
            return theme.navyBlue;
        }};
        font-family: ${({ theme }) => {
            return theme.sfmono;
        }};
        font-weight: ${({ theme }) => {
            return theme.medium;
        }};
        letter-spacing: 0px;
        font-size: 13px;
        padding: 0px 18px 2px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        white-space: nowrap;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: none !important;
        border-radius: 0 !important;
        border-left: 2px solid
            ${({ theme }) => {
                return theme.blueLight;
            }} !important;

        @media screen and (max-width: 37.5em) {
            border-bottom: 2px solid
                ${({ theme }) => {
                    return theme.blueLight;
                }} !important;
            border-left: 0px !important;
            /* this varies with title head length */
            min-width: 152px;
        }

        &:hover {
            background-color: ${({ theme }) => {
                return theme.lightPurple;
            }} !important;
            color: ${({ theme }) => {
                return theme.whiteYellow;
            }} !important;
            border: none !important;
            border-left: 2px solid
                ${({ theme }) => {
                    return theme.blueLight;
                }} !important;
            border-radius: 0 !important;
        }
    }
`;

const TitlesHolder = ({ children }) => {
    return (
        <Col sm={3} className="pl-0">
            <TitlesWrapper variant="tabs" className="flex-row flex-sm-column">
                {children}
            </TitlesWrapper>
        </Col>
    );
};

export default TitlesHolder;
