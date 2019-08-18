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
    const { projects } = props;
    return (
        <div>
            <ProjectsWrapper>
                {projects.map(item => {
                    const {
                        attributes: { title, show },
                    } = item;

                    if (show) {
                        return <ProjectCard data={item} key={title} />;
                    }
                    return null;
                })}
            </ProjectsWrapper>
        </div>
    );
};

export default OtherProjectsWrapper;
