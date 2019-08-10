import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    margin-bottom: 20px;
    color: ${props => {
        return props.theme.blueWhite;
    }};
    font-size: 28px;
    font-weight: ${props => {
        return props.theme.semibold;
    }};

    &:hover {
        color: ${props => {
            return props.theme.whiteYellow;
        }};
    }

    @media screen and (max-width: ${props => {
            return props.theme.screenSmMin;
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
