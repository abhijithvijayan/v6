import React from 'react';

import SubtitleText from './SubtitleText';
import SubtitleLink from './SubtitleLink';

const CardSubtitleHolder = () => {
    return (
        <div style={{ fontSize: '15px' }}>
            <SubtitleText />
            <SubtitleLink />
        </div>
    );
};

export default CardSubtitleHolder;
