import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    position: relative;
    gap: 15px;
    grid-auto-rows: 10px;
`;

const OtherProjectsWrapper = () => {
    return (
        <ProjectsWrapper>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ProjectsWrapper>
    );
};

export default OtherProjectsWrapper;
