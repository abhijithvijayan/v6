/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import { GRID_LIMIT } from '../../config';

import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    position: relative;
    gap: 15px;
`;

const OtherProjectsWrapper = props => {
    const { projects, itemsHidden } = props;
    let count = 0;
    return (
        <div>
            <ProjectsWrapper>
                {projects.map(item => {
                    const {
                        attributes: { title, show },
                    } = item;

                    if (show !== 'false') {
                        count += 1;
                        // For animationDelay (125,250,375,0,125,250...)
                        const delay = itemsHidden ? count : count >= GRID_LIMIT + 1 ? count - (GRID_LIMIT + 1) : count;
                        return <ProjectCard data={item} key={title} delay={delay * 125} />;
                    }
                    return null;
                })}
            </ProjectsWrapper>
        </div>
    );
};

export default OtherProjectsWrapper;
