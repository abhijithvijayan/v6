import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    color: ${({ theme }) => {
        return theme.whiteYellow;
    }} !important;

    &:hover {
        text-decoration: underline;
    }
`;

const SubtitleLink = props => {
    const { text, url } = props;
    return (
        <span>
            <Link href={url} target="_blank" rel="nofollow noopener noreferrer">
                {text}
            </Link>
        </span>
    );
};

export default SubtitleLink;
