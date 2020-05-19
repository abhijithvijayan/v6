import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 23px;
  margin: 0px 0px 10px;
  color: ${({theme}) => {
    return theme.blueWhite;
  }};
`;

const CardTitle = (props) => {
  return <StyledHeader>{props.title}</StyledHeader>;
};

export default CardTitle;
