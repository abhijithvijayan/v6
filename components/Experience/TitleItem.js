import React from 'react';
import { Nav } from 'react-bootstrap';

const TitleItem = ({ title, id, setActiveTabId }) => {
    const handleClick = e => {
        const { target } = e;
        if (!target.classList.contains('active')) {
            const trimmedId = target.id.slice(8);
            setActiveTabId(trimmedId - 1);
        }
    };

    return (
        <Nav.Item>
            <Nav.Link
                eventKey={id}
                onClick={e => {
                    return handleClick(e);
                }}
            >
                {title}
            </Nav.Link>
        </Nav.Item>
    );
};

export default TitleItem;
