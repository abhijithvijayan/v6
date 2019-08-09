import React from 'react';

import ImageHolder from './ImageHolder';
import ContentHolder from './ContentHolder';
import ProjectItemWrapper from './ProjectItemWrapper';

const LeftHighlighedProject = ({ content }) => {
    const { image } = content;
    return (
        <ProjectItemWrapper>
            <ImageHolder image={image} />
            <ContentHolder />
        </ProjectItemWrapper>
    );
};

export default LeftHighlighedProject;
