import React, { useEffect, useState } from 'react';
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
    background-color: ${({ theme }) => {
        return theme.purple;
    }} !important;
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
    font-weight: ${({ theme }) => {
        return theme.semibold;
    }};
    z-index: 11;
    @media screen and (max-width: 48em) {
        display: block;
    }
`;

const NavbarWrapper = styled(Navbar)`
    position: initial;
    flex-flow: row nowrap;
    justify-content: flex-start;
    @media screen and (max-width: 48em) {
        position: static;
    }
`;

const DELTA = 5;

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleSidebar = toggle => {
        setIsSidebarOpen(toggle);
    };

    useEffect(() => {
        const handleScroll = () => {
            const fromTop = window.scrollY;

            // Make sure they scroll more than DELTA
            if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
                return;
            }

            if (fromTop < DELTA) {
                setScrollDirection('none');
            } else if (fromTop > lastScrollTop && fromTop > 100) {
                if (scrollDirection !== 'down') {
                    setScrollDirection('down');
                }
            } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
                if (scrollDirection !== 'up') {
                    setScrollDirection('up');
                }
            }

            setLastScrollTop(fromTop);
        };

        const onScroll = () => {
            return throttle(handleScroll());
        };

        setIsMounted(true);
        window.addEventListener('scroll', onScroll);

        return () => {
            setIsMounted(false);
            window.removeEventListener('scroll', onScroll);
        };
    }, [isMounted, scrollDirection, lastScrollTop]);

    return (
        <StyledHeader
            className="d-flex justify-content-end pr-0 pr-sm-3 pr-md-4 pr-lg-5"
            scrollDirection={scrollDirection}
        >
            <NavbarWrapper collapseOnSelect expand="sm">
                <HamburgerIcon toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <HorizontalHeader />
                <VerticalHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </NavbarWrapper>
        </StyledHeader>
    );
};

export default Header;
