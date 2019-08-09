import React from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectsWrapper from './ProjectsWrapper';

const Projects = () => {
    return (
        <section id="projects">
            <div className="wrapper">
                <ProjectsHeader />
                <ProjectsWrapper />
            </div>
        </section>
    );
};

export default Projects;
