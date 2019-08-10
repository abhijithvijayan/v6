import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
    font-size: 14px;
    font-weight: normal;
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
`;

const StackItem = ({ title }) => {
    return <StyledItem className="list-inline-item">{title}</StyledItem>;
};

export default StackItem;
