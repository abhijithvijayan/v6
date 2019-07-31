import React from 'react';
import styled from 'styled-components';

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
        color: $color-head-white;

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
        }
    }

    a {
        display: block;
        text-align: center;
        margin-top: 20px;
    }
`;

const SidebarContent = () => {
    return (
        <SidebarWrapper>
            <ol>
                <li>
                    <a className="nav-link section__link header__navlink fade-link" href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a className="nav-link section__link header__navlink fade-link" href="#experience">
                        Experience
                    </a>
                </li>
                <li>
                    <a className="nav-link section__link header__navlink fade-link" href="#projects">
                        Work
                    </a>
                </li>
                <li>
                    <a className="nav-link section__link header__navlink fade-link" href="#contact">
                        Contact
                    </a>
                </li>
            </ol>
            <a href="/" className="button__main button__resume">
                Resume
            </a>
        </SidebarWrapper>
    );
};

export default SidebarContent;
