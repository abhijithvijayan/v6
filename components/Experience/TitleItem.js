import React from 'react';
import { Nav } from 'react-bootstrap';
import { trimQuotes } from '../../utils';

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

    const trimmedTitle = str => {
        return trimQuotes(str);
    };

    return (
        <Nav.Item>
            <Nav.Link
                eventKey={id}
                onClick={e => {
                    return handleClick(e);
                }}
            >
                {trimmedTitle(title)}
            </Nav.Link>
        </Nav.Item>
    );
};

export default TitleItem;
