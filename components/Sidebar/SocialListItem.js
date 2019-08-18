import React from 'react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import InsertIcon from '../Icons/InsertIcon';

const SocialListItemWrapper = styled.li`
    position: relative;

    &:last-child::after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        background-color: ${({ theme }) => {
            return theme.lightBlue;
        }};
        margin: 0px auto;
    }

    a {
        display: inline-block;
        padding: 8px;
        font-size: 19px;
    }
`;

const SocialListItem = props => {
    const { icon, title, ...other } = props;
    return (
        <SocialListItemWrapper>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-right">{title}</Tooltip>}>
                <a {...other} className="fade-link" target="_blank" rel="nofollow noopener noreferrer">
                    <InsertIcon icon={icon} />
                </a>
            </OverlayTrigger>
        </SocialListItemWrapper>
    );
};

export default SocialListItem;
