import React from 'react';
import styled from 'styled-components';

import SubtitleLink from './SubtitleLink';

const StyledText = styled.p`
    color: ${({ theme }) => {
        return theme.skyBlue;
    }};
    margin: 0px 0px 15px;
`;

const SubtitleText = () => {
    return (
        <StyledText>
            An article and guidance to build and deploy Ghost&nbsp;Blog to GitHub&nbsp;Pages for free in a few minutes.
            <SubtitleLink url="https://abhijithvijayan.github.io/ghost-blog-demo/" text="View demo" />
        </StyledText>
    );
};

export default SubtitleText;
