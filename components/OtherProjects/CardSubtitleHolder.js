import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const SubtitleWrapper = styled.div`
  p {
    color: ${({theme}) => {
      return theme.skyBlue;
    }};
    font-size: 17px;
    margin: 0px 0px 15px;

    a {
      color: ${({theme}) => {
        return theme.whiteYellow;
      }} !important;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const CardSubtitleHolder = ({data}) => {
  return (
    <SubtitleWrapper style={{fontSize: '15px'}}>{parse(data)}</SubtitleWrapper>
  );
};

export default CardSubtitleHolder;
