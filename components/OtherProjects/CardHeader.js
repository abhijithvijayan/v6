import React from 'react';
import styled from 'styled-components';

import HeaderIcon from './HeaderIcon';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardHeader = ({children}) => {
  return (
    <HeaderWrapper>
      <HeaderIcon />
      {children}
    </HeaderWrapper>
  );
};

export default CardHeader;
