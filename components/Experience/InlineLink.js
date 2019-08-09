import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const InlineLink = props => {
    const { url = '#', title, text, customClass = '', placement = 'bottom' } = props;
    return (
        <OverlayTrigger placement={placement} overlay={<Tooltip id="tooltip-right">{text}</Tooltip>}>
            <a className={`${customClass}`} href={url} target="_blank" rel="nofollow noopener noreferrer">
                {title}
            </a>
        </OverlayTrigger>
    );
};

export default InlineLink;
