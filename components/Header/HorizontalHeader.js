import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

import { navLinks } from '../../config';

const CollapsedNavbar = styled(Navbar.Collapse)`
    @media screen and (max-width: ${({ theme }) => {
            return theme.screenXsMax;
        }}) {
        // 767px
        display: none !important;
    }

    ul {
        font-size: 13px;
        margin: 0px 10px;
        color: ${({ theme }) => {
            return theme.lightBlue;
        }} !important;

        li {
            position: relative;
            counter-increment: item 1;
            margin: 0px 10px;

            &::before {
                content: '0' counter(item) '.';
                text-align: right;
                color: ${({ theme }) => {
                    return theme.whiteYellow;
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
    const renderItem = ({ name, url }) => {
        return (
            <Nav.Item as="li" key={name}>
                <Nav.Link href={url} className="fade-link">
                    {name}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <CollapsedNavbar>
            <Nav as="ul" className="ml-auto">
                {navLinks.map(item => {
                    return renderItem(item);
                })}
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
