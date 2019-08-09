import React from 'react';

import ImageHolder from './ImageHolder';
import ContentHolder from './ContentHolder';
import ProjectItemWrapper from './ProjectItemWrapper';

const RightHighlighedProject = ({ content }) => {
    const { image } = content;
    return (
        <ProjectItemWrapper>
            <ContentHolder />
            <ImageHolder image={image} />
        </ProjectItemWrapper>
    );
};

export default RightHighlighedProject;
