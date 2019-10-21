import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Nav } from 'react-bootstrap';

const TitlesWrapper = styled(Nav)`
    border-bottom: 0 !important;

    @media screen and (max-width: 37.5em) {
        flex-wrap: nowrap;
        margin-bottom: 30px;
        width: 100%;
        overflow-x: scroll
    }

    #active__highlighter {
        display: block;
        width: 2px;
        height: 42px;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        background: rgb(100, 255, 218);
        border-radius: 2px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;

        @media screen and (max-width: 37.5em) {
            width: 100%;
            max-width: 143px;
            height: 2px;
            top: 41px;
        }
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
        letter-spacing: 0.5px;
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
            min-width: 120px;
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
                {/* <Nav.Item>
                    <Nav.Link onClick={this.handleClick} eventKey="1">
                        Full Stack Dev
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                        <Nav.Link onClick={this.handleClick} eventKey="2">
                            Front-end Dev
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick} eventKey="3">
                            Designer
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick} eventKey="4">
                            Tech Lead
                        </Nav.Link>
                    </Nav.Item> */}
                <span id="active__highlighter" className="d-sm-block"></span>
            </TitlesWrapper>
        </Col>
    );
};

export default TitlesHolder;
