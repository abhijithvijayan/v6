import React from 'react';
import styled from 'styled-components';

import HeaderIcon from './HeaderIcon';
import HeaderLinksHolder from './HeaderLinksHolder';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CardHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderIcon />
            <HeaderLinksHolder />
        </HeaderWrapper>
    );
};

export default CardHeader;
