import React from 'react';
import styled from 'styled-components';

import InsertIcon from '../Icons/InsertIcon';

const IconWrapper = styled.div`
  color: ${({theme}) => {
    return theme.whiteYellow;
  }};
  font-size: 40px;
`;

const HeaderIcon = () => {
  return (
    <IconWrapper>
      <InsertIcon icon="folder-open" />
    </IconWrapper>
  );
};

export default HeaderIcon;
