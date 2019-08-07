import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    position: relative;
    gap: 15px;
`;

const OtherProjectsWrapper = props => {
    const { hasExpanded } = props;
    return (
        <div>
            <ProjectsWrapper>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard style={hasExpanded ? { animationDelay: `${125 * 1}ms` } : { display: 'none' }} />
                <ProjectCard style={hasExpanded ? { animationDelay: `${125 * 2}ms` } : { display: 'none' }} />
                <ProjectCard style={hasExpanded ? { animationDelay: `${125 * 3}ms` } : { display: 'none' }} />
            </ProjectsWrapper>
        </div>
    );
};

export default OtherProjectsWrapper;
