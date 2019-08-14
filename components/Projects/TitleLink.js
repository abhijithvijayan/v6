import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    margin-bottom: 20px;
    color: ${({ theme }) => {
        return theme.blueWhite;
    }};
    font-size: 28px;
    font-weight: ${({ theme }) => {
        return theme.semibold;
    }};

    &:hover {
        color: ${({ theme }) => {
            return theme.whiteYellow;
        }};
    }

    @media screen and (max-width: ${({ theme }) => {
            return theme.screenSmMin;
        }}) {
        font-size: 24px;
    }
`;

const TitleLink = props => {
    const { url, title } = props;
    return (
        <StyledLink href={url} target="_blank" rel="nofollow noreferrer noopener">
            {title}
        </StyledLink>
    );
};

export default TitleLink;
