import React from 'react';
import styled from 'styled-components';

const MainHeading = styled.h3`
    display: block;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0px 20px;
    white-space: nowrap;
    color: ${({ theme }) => {
        return theme.whiteYellow;
    }};
    font-size: 16px;
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
    font-weight: normal;

    &::before {
        bottom: 0px;
        font-size: 15px;
        counter-increment: section;
        content: '0' counter(section) '.';
        margin-right: 10px;
        position: relative;
    }
`;

const ContactHeader = () => {
    return <MainHeading className="wow fadeInUp">What's Next?</MainHeading>;
};

export default ContactHeader;
