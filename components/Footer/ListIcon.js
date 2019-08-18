import React from 'react';

import InsertIcon from '../Icons/InsertIcon';

const ListIcon = props => {
    const { icon, ...other } = props;
    return (
        <li>
            <a {...other} className="fade-link p-10" target="_blank" rel="nofollow noopener noreferrer">
                <InsertIcon icon={icon} />
            </a>
        </li>
    );
};

export default ListIcon;
