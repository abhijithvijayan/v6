import React from 'react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const StyledLink = styled.a`
    padding: 10px 5px;
`;

const HeaderLink = props => {
    const { url, title, icon } = props;
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-right">{title}</Tooltip>}>
            <StyledLink href={url} className="fade-link" target="_blank" rel="nofollow noopener noreferrer">
                <i className={icon}></i>
            </StyledLink>
        </OverlayTrigger>
    );
};

export default HeaderLink;
