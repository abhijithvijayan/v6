import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';

const StyledLink = styled.a`
    padding: 10px;
    font-size: 22px;
`;

const FeaturedLink = props => {
    const { url, title, icon } = props;
    return (
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-right">{title}</Tooltip>}>
            <StyledLink href={url} className="fade-link" target="_blank" rel="nofollow noopener noreferrer">
                <i className={icon}></i>
            </StyledLink>
        </OverlayTrigger>
    );
};

export default FeaturedLink;
