import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const HeaderLink = props => {
    const { url, title, icon } = props;
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-right">{title}</Tooltip>}>
            <a
                style={{ padding: '10px 5px 10px 12px' }}
                href={url}
                className="fade-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <i className={icon}></i>
            </a>
        </OverlayTrigger>
    );
};

export default HeaderLink;
