import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import InsertIcon from '../Icons/InsertIcon';

const FeaturedLink = props => {
    const { url, title, icon } = props;
    return (
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-right">{title}</Tooltip>}>
            <a
                style={{
                    padding: '10px',
                    fontSize: '22px',
                }}
                href={url}
                className="fade-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <InsertIcon icon={icon} />
            </a>
        </OverlayTrigger>
    );
};

export default FeaturedLink;
