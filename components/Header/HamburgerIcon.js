import React from 'react';
import styled from 'styled-components';

const IconButton = styled.button`
    padding: 0;
    @media screen and (max-width: 575px) {
        display: flex !important;
    }
    .hamburger-inner {
        background-color: ${props => {
            return props.theme.whiteYellow;
        }} !important;
        width: 30px;
        height: 2px;

        &::before,
        &::after {
            background-color: ${props => {
                return props.theme.whiteYellow;
            }} !important;
            width: 30px;
            height: 2px;
            left: auto;
            right: 0px;
        }

        &::before {
            width: 120% !important;
        }

        &::after {
            width: 80% !important;
        }
    }
`;

const HamburgerIcon = () => {
    return (
        <IconButton className="d-none hamburger hamburger--spin" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner hamburger__arrow"></span>
            </span>
        </IconButton>
    );
};

export default HamburgerIcon;
