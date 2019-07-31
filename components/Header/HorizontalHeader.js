import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

const CollapsedNavbar = styled(Navbar.Collapse)`
    @media screen and (max-width: ${props => {
            return props.theme.screenXsMax;
        }}) {
        // 767px
        display: none !important;
    }

    ul {
        font-size: 13px;
        margin: 0px 10px;
        color: ${props => {
            return props.theme.lightBlue;
        }} !important;

        li {
            position: relative;
            counter-increment: item 1;
            margin: 0px 10px;

            &::before {
                content: '0' counter(item) '.';
                text-align: right;
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
                font-size: 12px;
            }

            a {
                display: inline-block;
                font-size: 14px;
                padding: 12px 10px;
            }
        }
    }
    .resume__link--holder {
        a {
            padding: 12px 17px;
        }
    }
`;

const HorizontalHeader = () => {
    return (
        <CollapsedNavbar>
            <Nav as="ul" className="ml-auto">
                <Nav.Item as="li">
                    <Nav.Link href="/about" className="fade-link">
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
            <div className="resume__link--holder">
                <a href="/" className="button__main">
                    Resume
                </a>
            </div>
        </CollapsedNavbar>
    );
};

export default HorizontalHeader;
