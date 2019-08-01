import React, { Component } from 'react';
import styled from 'styled-components';

const IconButton = styled.button`
    padding: 0;
    z-index: 12;
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
        }
    }

    .arrow {
        &::before,
        &::after {
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

class HamburgerIcon extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        const { isSidebarOpen } = this.props;
        return (
            <IconButton
                onClick={() => {
                    return this.props.toggleSidebar(!isSidebarOpen);
                }}
                className={
                    isSidebarOpen ? 'd-none hamburger hamburger--spin is-active' : 'd-none hamburger hamburger--spin'
                }
                type="button"
            >
                <span className="hamburger-box">
                    <span className={isSidebarOpen ? 'hamburger-inner' : 'hamburger-inner arrow'}></span>
                </span>
            </IconButton>
        );
    }
}

export default HamburgerIcon;
