import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

import { throttle } from '../../utils';
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
    height: ${props => {
        return props.scrollDirection === 'none' ? props.theme.navHeight : props.theme.navScrollHeight;
    }};
    box-shadow: ${props => {
        return props.scrollDirection === 'up' ? `0px 2px 4px ${props.theme.shadow}` : 'none';
    }};
    transform: translateY(
        ${props => {
            return props.scrollDirection === 'down' ? `-${props.theme.navScrollHeight}` : '0px';
        }}
    );
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

const DELTA = 5;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMounted: false,
            scrollDirection: 'none',
            lastScrollTop: 0,
            isSidebarOpen: false,
        };
    }

    componentDidMount() {
        this.setState({ isMounted: true });

        window.addEventListener('scroll', () => {
            return throttle(this.handleScroll());
        });
    }

    handleScroll = () => {
        const { isMounted, scrollDirection, lastScrollTop } = this.state;
        const fromTop = window.scrollY;

        // Make sure they scroll more than DELTA
        if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
            return;
        }

        if (fromTop < DELTA) {
            this.setState({ scrollDirection: 'none' });
        } else if (fromTop > lastScrollTop && fromTop > 100) {
            if (scrollDirection !== 'down') {
                this.setState({ scrollDirection: 'down' });
            }
        } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
            if (scrollDirection !== 'up') {
                this.setState({ scrollDirection: 'up' });
            }
        }

        this.setState({ lastScrollTop: fromTop });
    };

    toggleSidebar = toggle => {
        this.setState({ isSidebarOpen: toggle });
    };

    render() {
        const { isSidebarOpen, scrollDirection } = this.state;

        return (
            <StyledHeader
                className="d-flex justify-content-end pr-0 pr-sm-3 pr-md-4 pr-lg-5"
                scrollDirection={scrollDirection}
            >
                <NavbarWrapper collapseOnSelect expand="sm">
                    <HamburgerIcon toggleSidebar={this.toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <HorizontalHeader />
                    {/* <VerticalHeader toggleSidebar={this.toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
                </NavbarWrapper>
            </StyledHeader>
        );
    }
}

export default Header;
