import React from 'react';
import styled from 'styled-components';

const HolderWrapper = styled.ul`
    margin: 25px 0px 10px;
    padding-left: 0;
    list-style: none;
`;

const StackHolder = ({ children }) => {
    return <HolderWrapper>{children}</HolderWrapper>;
};

export default StackHolder;
