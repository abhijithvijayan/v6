import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

import { navLinks, resume } from '../../config';

const SidebarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    text-align: center;
    background-color: ${({ theme }) => {
        return theme.darkPurple;
    }};
    box-shadow: rgba(
            $color:
                ${({ theme }) => {
                    return theme.purple;
                }},
            $alpha: 0.7
        ) -2px 0px 4px;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    ol {
        width: 100%;
        color: ${({ theme }) => {
            return theme.headWhite;
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
                color: ${({ theme }) => {
                    return theme.whiteYellow;
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

const SidebarContent = props => {
    const handleClick = () => {
        clearAllBodyScrollLocks();
        props.toggleSidebar(!props.isSidebarOpen);
    };

    const renderItem = ({ name, url }) => {
        return (
            <Nav.Item as="li" key={name}>
                <Nav.Link onClick={handleClick} href={url} className="fade-link">
                    {name}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <SidebarWrapper>
            <Nav as="ol">
                {navLinks.map(item => {
                    return renderItem(item);
                })}
            </Nav>
            <a
                href={resume}
                onClick={handleClick}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="button__main button__resume"
            >
                Resume
            </a>
        </SidebarWrapper>
    );
};

export default SidebarContent;
