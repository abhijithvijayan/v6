import React from 'react';
import { Nav } from 'react-bootstrap';

const TitleItem = ({ title, id }) => {
    const handleClick = e => {
        const { target } = e;
        const highLighter = document.getElementById('active__highlighter');
        if (!target.classList.contains('active')) {
            const trimmedId = target.id.slice(8);
            if (window.outerWidth >= 583) {
                highLighter.style = `transform: translateY(${41 * (trimmedId - 1)}px)`;
            } else {
                // Mobile context

                const prevTab = document.getElementById(`exp-tab-${trimmedId - 1}`);

                highLighter.setAttribute(
                    'style',
                    `transform: translateX(${target.offsetLeft}px); width: ${target.offsetWidth}px;`
                );
            }
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
