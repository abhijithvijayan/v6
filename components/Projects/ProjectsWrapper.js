import React from 'react';

import LeftHighlighedProject from './LeftHighlighedProject';
import RightHighlightedProject from './RightHighlighedProject';

const sampleLeftContent = {
    image: {
        source: '/static/images/kutt.png',
        text: 'Kutt.it',
    },
};

const sampleRightContent = {
    image: {
        source: '/static/images/glitch.jpg',
        text: 'Glitch 2.0',
    },
};

const ProjectsWrapper = () => {
    return (
        <React.Fragment>
            <LeftHighlighedProject content={sampleLeftContent} />
            <RightHighlightedProject content={sampleRightContent} />
        </React.Fragment>
    );
};

export default ProjectsWrapper;
