import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

import HamburgerIcon from './HamburgerIcon';
import VerticalHeader from './VerticalHeader';
import HorizontalHeader from './HorizontalHeader';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    width: 100%;
    height: 100px;
    transform: translateY(0px);
    padding: 0px 50px;
    background-color: ${props => {
        return props.theme.purple;
    }} !important;
    font-family: ${props => {
        return props.theme.sfmono;
    }};
    font-weight: ${props => {
        return props.theme.semibold;
    }};
    z-index: 11;
    @media screen and (max-width: 48em) {
        display: block;
    }
`;

const NavbarWrapper = styled(Navbar)`
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isSidebarOpen: false };
    }

    toggleSidebar = toggle => {
        this.setState({ isSidebarOpen: toggle });
    };

    render() {
        const { isSidebarOpen } = this.state;

        return (
            <StyledHeader className="d-flex justify-content-end pr-0 pr-sm-5">
                <NavbarWrapper collapseOnSelect expand="sm">
                    <HamburgerIcon toggleSidebar={this.toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <HorizontalHeader />
                    <VerticalHeader toggleSidebar={this.toggleSidebar} isSidebarOpen={isSidebarOpen} />
                </NavbarWrapper>
            </StyledHeader>
        );
    }
}

export default Header;
