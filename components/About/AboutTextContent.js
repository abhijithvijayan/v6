import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const TextWrapper = styled.div`
    p {
        line-height: 1.6;
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};
        font-size: 17px;
        margin: 0px 0px 15px;
    }
`;

const AboutTextContent = ({ data }) => {
    return <TextWrapper>{parse(data)}</TextWrapper>;
};

export default AboutTextContent;
