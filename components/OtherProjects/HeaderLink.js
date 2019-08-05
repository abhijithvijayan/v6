import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    padding: 10px 5px;
`;

const HeaderLink = props => {
    const { url, title, icon } = props;
    return (
        <StyledLink href={url} title={title} className="fade-link" target="_blank" rel="nofollow noopener noreferrer">
            <i className={icon}></i>
        </StyledLink>
    );
};

export default HeaderLink;
