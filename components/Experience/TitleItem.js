import React from 'react';
import { Nav } from 'react-bootstrap';

const TitleItem = ({ title, id }) => {
    /* eslint-disable class-methods-use-this */
    const handleClick = e => {
        const { target } = e;
        const highLighter = document.getElementById('active__highlighter');
        if (!target.classList.contains('active')) {
            const trimmedId = target.id.slice(8);
            highLighter.style = `transform: translateY(${41 * (trimmedId - 1)}px)`;
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
