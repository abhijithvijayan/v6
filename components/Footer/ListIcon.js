import React from 'react';

const ListIcon = props => {
    const { title, url, icon } = props;
    return (
        <li>
            <a title={title} href={url} className="fade-link p-10" target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
            </a>
        </li>
    );
};

export default ListIcon;
