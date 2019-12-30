import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
    color: ${({ theme }) => {
        return theme.skyBlue;
    }};
    font-size: 13px;
    font-weight: normal;
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
`;

const StackItem = ({ title }) => {
    return <StyledItem className="list-inline-item">{title}</StyledItem>;
};

export default StackItem;
