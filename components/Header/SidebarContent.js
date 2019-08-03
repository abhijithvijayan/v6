import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const SidebarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    text-align: center;
    background-color: ${props => {
        return props.theme.darkPurple;
    }};
    box-shadow: rgba(
            $color:
                ${props => {
                    return props.theme.purple;
                }},
            $alpha: 0.7
        ) -2px 0px 4px;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    ol {
        width: 100%;
        color: ${props => {
            return props.theme.headWhite;
        }};

        li {
            font-size: 17px;
            margin: 0px auto 10px;
            position: relative;
            counter-increment: item;

            &::before {
                content: '0' counter(item) '.';
                text-align: right;
                font-size: 12px;
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
            }

            a {
                padding: 3px 20px 20px !important;
            }
        }
    }

    .button__resume {
        display: block;
        text-align: center;
        padding: 18px 50px;
        margin: 10% auto 0px;
    }
`;

const SidebarContent = () => {
    return (
        <SidebarWrapper>
            <Nav as="ol">
                <Nav.Item as="li">
                    <Nav.Link href="#about" className="fade-link">
                        About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/experience" className="fade-link">
                        Experience
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/work" className="fade-link">
                        Work
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/contact" className="fade-link">
                        Contact
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <a href="/" className="button__main button__resume">
                Resume
            </a>
        </SidebarWrapper>
    );
};

export default SidebarContent;
