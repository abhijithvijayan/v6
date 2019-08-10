import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
    font-size: 14px;
    font-weight: normal;
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
    color: ${({ theme }) => {
        return theme.whiteYellow;
    }};
    margin-top: 20px;
    padding-top: 0px;
`;

const TitleHeader = () => {
    return <StyledHeader>Featured Project</StyledHeader>;
};

export default TitleHeader;
